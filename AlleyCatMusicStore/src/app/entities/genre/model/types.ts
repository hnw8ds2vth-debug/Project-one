import { BaseEntity } from '../../../shared/types';

/**
 * Жанр музыки
 */
export interface Genre extends BaseEntity {
  name: string;
  slug: string;
  description?: string;
  parentId?: string; // Для поджанров
  imageUrl?: string;
}

/**
 * Создание жанра (без системных полей)
 */
export interface CreateGenreDto {
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
  imageUrl?: string;
}

/**
 * Обновление жанра
 */
export interface UpdateGenreDto {
  name?: string;
  slug?: string;
  description?: string;
  parentId?: string;
  imageUrl?: string;
}
