import { BaseEntity } from '../../../shared/types';

/**
 * Отзыв на виниловую пластинку
 */
export interface Review extends BaseEntity {
  userId: string;
  vinylId: string;
  rating: number; // От 1 до 5
  title?: string;
  comment?: string;
  isVerifiedPurchase: boolean; // Подтвержденная покупка
  helpfulCount: number; // Количество "полезно"
  isPublished: boolean;
}

/**
 * Отзыв с расширенной информацией
 */
export interface ReviewWithDetails extends Review {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
  };
  vinyl: {
    id: string;
    album: {
      title: string;
      artist: {
        name: string;
      };
    };
  };
}

/**
 * Создание отзыва
 */
export interface CreateReviewDto {
  vinylId: string;
  rating: number;
  title?: string;
  comment?: string;
}

/**
 * Обновление отзыва
 */
export interface UpdateReviewDto {
  rating?: number;
  title?: string;
  comment?: string;
}

/**
 * Статистика отзывов для виниловой пластинки
 */
export interface ReviewStats {
  vinylId: string;
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}
