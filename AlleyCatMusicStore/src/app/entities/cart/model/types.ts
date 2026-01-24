import { BaseEntity, Currency } from '../../../shared/types';

/**
 * Элемент корзины
 */
export interface CartItem extends BaseEntity {
  userId: string;
  vinylId: string;
  quantity: number;
  price: number; // Цена на момент добавления в корзину
  currency: Currency;
}

/**
 * Элемент корзины с расширенной информацией
 */
export interface CartItemWithDetails extends CartItem {
  vinyl: {
    id: string;
    sku: string;
    album: {
      id: string;
      title: string;
      artist: {
        id: string;
        name: string;
      };
      coverImageUrl?: string;
    };
    format: string;
    condition: string;
    images: string[];
    stock: number;
  };
}

/**
 * Корзина пользователя
 */
export interface Cart {
  userId: string;
  items: CartItemWithDetails[];
  totalItems: number;
  subtotal: number;
  currency: Currency;
}

/**
 * Добавление товара в корзину
 */
export interface AddToCartDto {
  vinylId: string;
  quantity: number;
}

/**
 * Обновление количества товара в корзине
 */
export interface UpdateCartItemDto {
  quantity: number;
}
