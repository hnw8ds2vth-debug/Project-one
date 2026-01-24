/**
 * Типы для работы с API
 */

/**
 * Стандартный ответ API с данными
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

/**
 * Ответ API с пагинацией
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

/**
 * Параметры пагинации
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
}

/**
 * Ошибка API
 */
export interface ApiError {
  message: string;
  code?: string;
  field?: string; // Поле, в котором произошла ошибка
  details?: Record<string, unknown>;
}

/**
 * Ответ API с ошибкой
 */
export interface ApiErrorResponse {
  error: ApiError;
  success: false;
}
