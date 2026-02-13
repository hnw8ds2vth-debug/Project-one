import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { API_BASE_URL } from '../api.config';
import type { Album } from '../../entities';
import type { ApiResponse } from '../../shared/types';

/**
 * Сервис для работы с альбомами.
 *
 * Отвечает только за транспорт (запросы к backend),
 * без UI-логики — слой application в FSD.
 */
@Injectable({
  providedIn: 'root',
})
export class AlbumApiService {
  private readonly http = inject(HttpClient);

  /**
   * Получить список альбомов по артисту.
   * GET /api/artists/:artistId/albums
   */
  getAlbumsByArtist$(artistId: string): Observable<Album[]> {
    const url = `${API_BASE_URL}/artists/${encodeURIComponent(artistId)}/albums`;

    return this.http
      .get<ApiResponse<Album[]>>(url)
      .pipe(map((res) => res.data));
  }

  /**
   * Получить альбом по slug.
   * GET /api/albums/:slug
   */
  getAlbumBySlug$(slug: string): Observable<Album & { artist?: { name: string } | null }> {
    const url = `${API_BASE_URL}/albums/${encodeURIComponent(slug)}`;

    return this.http
      .get<ApiResponse<Album & { artist?: { name: string } | null }>>(url)
      .pipe(map((res) => res.data));
  }
}

