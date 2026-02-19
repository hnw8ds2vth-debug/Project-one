import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArtistApiService } from '../application/artists/artist-api.service';
import { AlbumApiService } from '../application/albums/album-api.service';
import { map, switchMap, of } from 'rxjs';

@Component({
  selector: 'app-artist-page',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './artist-page.html',
  styleUrl: './artist-page.scss',
})
export class ArtistPage {
  private readonly route = inject(ActivatedRoute);
  private readonly artistApi = inject(ArtistApiService);
  private readonly albumApi = inject(AlbumApiService);

  protected readonly artist$ = this.route.paramMap.pipe(
    map((params) => params.get('artistId')),
    switchMap((id) => (id ? this.artistApi.getArtistById$(id) : of(null)))
  );

  protected readonly albums$ = this.artist$.pipe(
    switchMap((artist) => (artist ? this.albumApi.getAlbumsByArtist$(artist.id) : of([])))
  );
}
