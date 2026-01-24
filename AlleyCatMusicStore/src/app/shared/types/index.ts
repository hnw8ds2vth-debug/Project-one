/**
 * Общие типы для приложения
 */

/**
 * Базовый интерфейс для всех сущностей с идентификатором
 */
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Статус заказа
 */
export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

/**
 * Статус оплаты
 */
export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  FAILED = 'failed',
  REFUNDED = 'refunded'
}

/**
 * Валюта
 */
export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  RUB = 'RUB'
}

/**
 * Формат пластинки
 */
export enum RecordFormat {
  LP = 'LP',           // Long Play (33⅓ RPM)
  EP = 'EP',           // Extended Play (45 RPM)
  SINGLE = 'single',   // Сингл (45 RPM)
  DOUBLE_LP = 'double_lp', // Двойной альбом
  TRIPLE_LP = 'triple_lp'  // Тройной альбом
}

/**
 * Состояние пластинки
 */
export enum RecordCondition {
  MINT = 'mint',           // Идеальное состояние
  NEAR_MINT = 'near_mint', // Почти идеальное
  VERY_GOOD = 'very_good', // Очень хорошее
  GOOD = 'good',           // Хорошее
  FAIR = 'fair',           // Удовлетворительное
  POOR = 'poor'            // Плохое
}

/**
 * Тип доставки
 */
export enum ShippingMethod {
  STANDARD = 'standard',
  EXPRESS = 'express',
  OVERNIGHT = 'overnight',
  PICKUP = 'pickup'
}

// Экспорт типов для API
export * from './api';
