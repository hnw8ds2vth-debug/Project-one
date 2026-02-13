import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArtistApiService } from '../../application/artists/artist-api.service';
import { AlbumApiService } from '../../application/albums/album-api.service';
import { catchError, map, of, startWith, switchMap } from 'rxjs';
import type { Artist } from '../../entities';

type ArtistListState =
  | { status: 'loading' }
  | { status: 'success'; artists: Artist[] }
  | { status: 'error'; message: string };

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.scss',
})
export class ArtistListComponent implements OnInit {
  protected readonly artistApi = inject(ArtistApiService);
  protected readonly albumApi = inject(AlbumApiService);
  private readonly route = inject(ActivatedRoute);

  protected readonly selectedArtistId = signal<string | null>(null);
  private artistsMap: Map<string, string> = new Map();

  private readonly albumsSection = viewChild<ElementRef<HTMLElement>>('albumsSection');

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const artistId = params['artist'];
      if (artistId) {
        this.selectedArtistId.set(artistId);
        setTimeout(() => {
          this.albumsSection()?.nativeElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 150);
      }
    });
  }

  protected selectArtist(artistId: string) {
    this.selectedArtistId.set(artistId);
    setTimeout(() => {
      this.albumsSection()?.nativeElement?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 50);
  }

  protected getArtistName(artistId: string): string {
    return this.artistsMap.get(artistId) ?? '';
  }

  protected readonly albums$ = toObservable(this.selectedArtistId).pipe(
    switchMap((id) => (id ? this.albumApi.getAlbumsByArtist$(id) : of([])))
  );

  protected readonly state$ = this.artistApi.getArtists$().pipe(
    map((artists) => {
      this.artistsMap = new Map(artists.map((a) => [a.id, a.name]));
      return { status: 'success' as const, artists };
    }),
    startWith({ status: 'loading' } as ArtistListState),
    catchError((err) => {
      const msg =
        err?.error?.error?.message ||
        err?.error?.message ||
        (err?.status === 0 || err?.status === 500
          ? 'Backend не отвечает. Запустите: в папке Project-one выполните npm start'
          : err?.message);
      return of({ status: 'error', message: msg } as ArtistListState);
    })
  );
}
