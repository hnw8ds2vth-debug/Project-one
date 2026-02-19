import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArtistApiService } from '../../application/artists/artist-api.service';
import { catchError, map, of, startWith } from 'rxjs';
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
export class ArtistListComponent {
  protected readonly artistApi = inject(ArtistApiService);

  protected readonly state$ = this.artistApi.getArtists$().pipe(
    map((artists) => ({ status: 'success' as const, artists })),
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
