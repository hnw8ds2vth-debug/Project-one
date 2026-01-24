import { BaseEntity, RecordFormat, RecordCondition, Currency } from '../../../shared/types';

/**
 * Виниловая пластинка - основной продукт магазина
 */
export interface Vinyl extends BaseEntity {
  albumId: string;
  format: RecordFormat;
  condition: RecordCondition;
  price: number;
  currency: Currency;
  stock: number; // Количество на складе
  sku: string; // Артикул
  barcode?: string;
  color?: string; // Цвет винила (например, "черный", "красный", "прозрачный")
  weight?: number; // Вес в граммах (обычно 180g, 200g и т.д.)
  speed?: number; // Скорость вращения (33, 45)
  year?: number; // Год выпуска конкретного издания
  country?: string; // Страна выпуска
  isLimitedEdition: boolean;
  isNew: boolean; // Новый или б/у
  images: string[]; // Массив URL изображений
  description?: string;
  notes?: string; // Дополнительные заметки о состоянии
}

/**
 * Виниловая пластинка с расширенной информацией (для отображения)
 */
export interface VinylWithDetails extends Vinyl {
  album: {
    id: string;
    title: string;
    artist: {
      id: string;
      name: string;
    };
    releaseDate: Date;
    coverImageUrl?: string;
    genres: Array<{
      id: string;
      name: string;
    }>;
  };
}

/**
 * Создание виниловой пластинки
 */
export interface CreateVinylDto {
  albumId: string;
  format: RecordFormat;
  condition: RecordCondition;
  price: number;
  currency: Currency;
  stock: number;
  sku: string;
  barcode?: string;
  color?: string;
  weight?: number;
  speed?: number;
  year?: number;
  country?: string;
  isLimitedEdition?: boolean;
  isNew?: boolean;
  images?: string[];
  description?: string;
  notes?: string;
}

/**
 * Обновление виниловой пластинки
 */
export interface UpdateVinylDto {
  albumId?: string;
  format?: RecordFormat;
  condition?: RecordCondition;
  price?: number;
  currency?: Currency;
  stock?: number;
  sku?: string;
  barcode?: string;
  color?: string;
  weight?: number;
  speed?: number;
  year?: number;
  country?: string;
  isLimitedEdition?: boolean;
  isNew?: boolean;
  images?: string[];
  description?: string;
  notes?: string;
}

/**
 * Параметры фильтрации виниловых пластинок
 */
export interface VinylFilters {
  albumId?: string;
  artistId?: string;
  genreId?: string;
  format?: RecordFormat;
  condition?: RecordCondition;
  minPrice?: number;
  maxPrice?: number;
  currency?: Currency;
  isNew?: boolean;
  isLimitedEdition?: boolean;
  inStock?: boolean; // Только в наличии
  search?: string; // Поиск по названию альбома, артисту
}

/**
 * Параметры сортировки
 */
export enum VinylSortBy {
  PRICE_ASC = 'price_asc',
  PRICE_DESC = 'price_desc',
  TITLE_ASC = 'title_asc',
  TITLE_DESC = 'title_desc',
  RELEASE_DATE_ASC = 'release_date_asc',
  RELEASE_DATE_DESC = 'release_date_desc',
  CREATED_AT_DESC = 'created_at_desc',
  CREATED_AT_ASC = 'created_at_asc'
}
