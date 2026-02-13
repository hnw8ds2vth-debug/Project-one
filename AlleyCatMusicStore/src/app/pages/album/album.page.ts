import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumApiService } from '../../application/albums/album-api.service';
import { map, switchMap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-album-page',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterLink],
  templateUrl: './album.page.html',
  styleUrl: './album.page.scss',
})
export class AlbumPage {
  private readonly route = inject(ActivatedRoute);
  private readonly albumApi = inject(AlbumApiService);

  protected readonly album$ = this.route.paramMap.pipe(
    map((params) => params.get('slug')),
    switchMap((slug) =>
      slug ? this.albumApi.getAlbumBySlug$(slug) : of(null)
    ),
    catchError(() => of(null))
  );
}
