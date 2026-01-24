import { BaseEntity } from '../../../shared/types';

/**
 * Альбом
 */
export interface Album extends BaseEntity {
  title: string;
  slug: string;
  artistId: string;
  releaseDate: Date;
  label?: string; // Лейбл звукозаписи
  catalogNumber?: string; // Каталожный номер
  description?: string;
  coverImageUrl?: string;
  genres: string[]; // Массив ID жанров
  trackCount: number;
  duration?: number; // Длительность в секундах
  isCompilation: boolean; // Сборник различных артистов
}

/**
 * Создание альбома
 */
export interface CreateAlbumDto {
  title: string;
  slug: string;
  artistId: string;
  releaseDate: Date | string;
  label?: string;
  catalogNumber?: string;
  description?: string;
  coverImageUrl?: string;
  genres?: string[];
  trackCount: number;
  duration?: number;
  isCompilation?: boolean;
}

/**
 * Обновление альбома
 */
export interface UpdateAlbumDto {
  title?: string;
  slug?: string;
  artistId?: string;
  releaseDate?: Date | string;
  label?: string;
  catalogNumber?: string;
  description?: string;
  coverImageUrl?: string;
  genres?: string[];
  trackCount?: number;
  duration?: number;
  isCompilation?: boolean;
}
