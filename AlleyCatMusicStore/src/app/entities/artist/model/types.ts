import { BaseEntity } from '../../../shared/types';

/**
 * Артист/Исполнитель
 */
export interface Artist extends BaseEntity {
  name: string;
  slug: string;
  bio?: string;
  imageUrl?: string;
  country?: string;
  website?: string;
  genres: string[]; // Массив ID жанров
  isActive: boolean;
}

/**
 * Создание артиста
 */
export interface CreateArtistDto {
  name: string;
  slug: string;
  bio?: string;
  imageUrl?: string;
  country?: string;
  website?: string;
  genres?: string[];
  isActive?: boolean;
}

/**
 * Обновление артиста
 */
export interface UpdateArtistDto {
  name?: string;
  slug?: string;
  bio?: string;
  imageUrl?: string;
  country?: string;
  website?: string;
  genres?: string[];
  isActive?: boolean;
}
