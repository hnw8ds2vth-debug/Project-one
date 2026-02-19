import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

import { API_BASE_URL } from '../api.config';
import type { Artist } from '../../entities';
import type { ApiResponse } from '../../shared/types';

/**
 * Сервис для работы с артистами.
 *
 * Отвечает только за транспорт (запросы к backend),
 * без UI-логики — слой application в FSD.
 */
@Injectable({
  providedIn: 'root',
})
export class ArtistApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${API_BASE_URL}/artists`;

  /**
   * Получить список всех артистов.
   * GET /api/artists
   */
  getArtists$(): Observable<Artist[]> {
    return this.http
      .get<ApiResponse<Artist[]>>(this.baseUrl)
      .pipe(map((res) => res.data));
  }

  /**
   * Получить артиста по ID.
   * GET /api/artists/:artistId
   */
  getArtistById$(artistId: string): Observable<Artist | null> {
    const url = `${this.baseUrl}/${encodeURIComponent(artistId)}`;
    return this.http
      .get<ApiResponse<Artist>>(url)
      .pipe(
        map((res) => res.data ?? null),
        catchError(() => of(null))
      );
  }
}

