// Простейшие JSDoc-типы, соответствующие фронтовым интерфейсам

/**
 * @typedef {Object} BaseEntity
 * @property {string} id
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {BaseEntity & {
 *   name: string;
 *   slug: string;
 *   bio?: string | null;
 *   imageUrl?: string | null;
 *   country?: string | null;
 *   website?: string | null;
 *   genres: string[];
 *   isActive: boolean;
 * }} Artist
 */

/**
 * @typedef {BaseEntity & {
 *   title: string;
 *   slug: string;
 *   artistId: string;
 *   releaseDate: Date;
 *   label?: string | null;
 *   catalogNumber?: string | null;
 *   description?: string | null;
 *   coverImageUrl?: string | null;
 *   genres: string[];
 *   trackCount: number;
 *   duration?: number | null;
 *   isCompilation: boolean;
 * }} Album
 */

/**
 * @template T
 * @typedef {Object} ApiResponse
 * @property {T} data
 * @property {string | undefined} [message]
 * @property {boolean} success
 */

/**
 * @template T
 * @typedef {Object} PaginatedResponse
 * @property {T[]} data
 * @property {{
 *   page: number;
 *   limit: number;
 *   total: number;
 *   totalPages: number;
 *   hasNext: boolean;
 *   hasPrev: boolean;
 * }} pagination
 */

module.exports = {};

