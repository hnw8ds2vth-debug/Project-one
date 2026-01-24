import { BaseEntity, OrderStatus, PaymentStatus, ShippingMethod, Currency } from '../../../shared/types';

/**
 * Элемент заказа
 */
export interface OrderItem extends BaseEntity {
  orderId: string;
  vinylId: string;
  quantity: number;
  price: number; // Цена на момент заказа
  currency: Currency;
  sku: string;
}

/**
 * Элемент заказа с расширенной информацией
 */
export interface OrderItemWithDetails extends OrderItem {
  vinyl: {
    id: string;
    album: {
      title: string;
      artist: {
        name: string;
      };
    };
    format: string;
    condition: string;
  };
}

/**
 * Информация о доставке
 */
export interface ShippingInfo {
  method: ShippingMethod;
  cost: number;
  currency: Currency;
  address: {
    street: string;
    city: string;
    state?: string;
    postalCode: string;
    country: string;
  };
  trackingNumber?: string;
  estimatedDeliveryDate?: Date;
}

/**
 * Информация об оплате
 */
export interface PaymentInfo {
  method: string; // 'card', 'paypal', 'bank_transfer', etc.
  status: PaymentStatus;
  transactionId?: string;
  paidAt?: Date;
  amount: number;
  currency: Currency;
}

/**
 * Заказ
 */
export interface Order extends BaseEntity {
  userId: string;
  orderNumber: string; // Уникальный номер заказа
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  tax: number; // Налог
  total: number;
  currency: Currency;
  shippingInfo: ShippingInfo;
  paymentInfo: PaymentInfo;
  notes?: string; // Заметки от покупателя
  adminNotes?: string; // Заметки администратора
}

/**
 * Заказ с расширенной информацией
 */
export interface OrderWithDetails extends Omit<Order, 'items'> {
  items: OrderItemWithDetails[];
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

/**
 * Создание заказа
 */
export interface CreateOrderDto {
  shippingInfo: {
    method: ShippingMethod;
    addressId: string; // ID адреса из профиля пользователя
  };
  paymentInfo: {
    method: string;
  };
  notes?: string;
}

/**
 * Обновление заказа (для администратора)
 */
export interface UpdateOrderDto {
  status?: OrderStatus;
  shippingInfo?: Partial<ShippingInfo>;
  paymentInfo?: Partial<PaymentInfo>;
  adminNotes?: string;
}

/**
 * Параметры фильтрации заказов
 */
export interface OrderFilters {
  userId?: string;
  status?: OrderStatus;
  paymentStatus?: PaymentStatus;
  dateFrom?: Date;
  dateTo?: Date;
  orderNumber?: string;
}
