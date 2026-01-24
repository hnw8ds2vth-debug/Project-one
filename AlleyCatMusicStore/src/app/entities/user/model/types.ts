import { BaseEntity } from '../../../shared/types';

/**
 * Роль пользователя
 */
export enum UserRole {
  CUSTOMER = 'customer',
  ADMIN = 'admin',
  MODERATOR = 'moderator'
}

/**
 * Пользователь
 */
export interface User extends BaseEntity {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  avatarUrl?: string;
  isEmailVerified: boolean;
  isActive: boolean;
}

/**
 * Адрес доставки
 */
export interface Address extends BaseEntity {
  userId: string;
  street: string;
  city: string;
  state?: string; // Штат/область
  postalCode: string;
  country: string;
  isDefault: boolean;
  label?: string; // Например, "Дом", "Работа"
}

/**
 * Создание пользователя
 */
export interface CreateUserDto {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role?: UserRole;
  avatarUrl?: string;
}

/**
 * Обновление пользователя
 */
export interface UpdateUserDto {
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role?: UserRole;
  avatarUrl?: string;
  isActive?: boolean;
}

/**
 * Создание адреса
 */
export interface CreateAddressDto {
  street: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
  isDefault?: boolean;
  label?: string;
}

/**
 * Обновление адреса
 */
export interface UpdateAddressDto {
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  isDefault?: boolean;
  label?: string;
}
