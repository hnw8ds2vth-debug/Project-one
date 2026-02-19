const express = require('express');
const cors = require('cors');

// Подгружаем data.js при каждом запросе, чтобы изменения применялись без перезапуска
function getData() {
  delete require.cache[require.resolve('./data')];
  return require('./data');
}

const app = express();
const PORT = 3005;

app.use(cors());
app.use(express.json());

// Простая middleware для логирования запросов
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

/**
 * Обертка для успешного ответа в формате ApiResponse<T>
 * @template T
 * @param {T} data
 * @param {string} [message]
 */
function ok(data, message) {
  return {
    data,
    message,
    success: true,
  };
}

/**
 * Обертка для ответа ошибки, совместимая с ApiErrorResponse
 * @param {number} status
 * @param {string} message
 * @param {string} [code]
 */
function sendError(res, status, message, code) {
  res.status(status).json({
    error: {
      message,
      code,
    },
    success: false,
  });
}

/**
 * GET /api/artists
 * Возвращает список артистов.
 * Ответ: ApiResponse<Artist[]>
 */
app.get('/api/artists', (req, res) => {
  try {
    const { artists } = getData();
    res.json(ok(artists));
  } catch (err) {
    console.error('[GET /api/artists]', err);
    sendError(res, 500, err.message || 'Internal server error', 'SERVER_ERROR');
  }
});

/**
 * GET /api/artists/:artistId
 * Возвращает одного артиста по ID.
 * Ответ: ApiResponse<Artist>
 */
app.get('/api/artists/:artistId', (req, res) => {
  try {
    const { artistId } = req.params;
    const { artists } = getData();

    const artist = artists.find((a) => a.id === artistId);
    if (!artist) {
      return sendError(res, 404, 'Artist not found', 'ARTIST_NOT_FOUND');
    }

    res.json(ok(artist));
  } catch (err) {
    console.error('[GET /api/artists/:artistId]', err);
    sendError(res, 500, err.message || 'Internal server error', 'SERVER_ERROR');
  }
});

/**
 * GET /api/artists/:artistId/albums
 * Возвращает список альбомов для указанного артиста.
 * Ответ: ApiResponse<Album[]>
 */
app.get('/api/artists/:artistId/albums', (req, res) => {
  try {
    const { artistId } = req.params;
    const { artists, albums } = getData();

    const artist = artists.find((a) => a.id === artistId);
    if (!artist) {
      return sendError(res, 404, 'Artist not found', 'ARTIST_NOT_FOUND');
    }

    const artistAlbums = albums.filter((album) => album.artistId === artistId);
    res.json(ok(artistAlbums));
  } catch (err) {
    console.error('[GET /api/artists/:artistId/albums]', err);
    sendError(res, 500, err.message || 'Internal server error', 'SERVER_ERROR');
  }
});

/**
 * GET /api/albums/:slug
 * Возвращает альбом по slug.
 * Ответ: ApiResponse<Album>
 */
app.get('/api/albums/:slug', (req, res) => {
  try {
    const { slug } = req.params;
    const { albums, artists } = getData();

    const album = albums.find((a) => a.slug === slug);
    if (!album) {
      return sendError(res, 404, 'Album not found', 'ALBUM_NOT_FOUND');
    }

    const artist = artists.find((a) => a.id === album.artistId);
    res.json(ok({ ...album, artist: artist ?? null }));
  } catch (err) {
    console.error('[GET /api/albums/:slug]', err);
    sendError(res, 500, err.message || 'Internal server error', 'SERVER_ERROR');
  }
});

app.listen(PORT, () => {
  console.log(`AlleyCatMusicStore API is running on http://localhost:${PORT}`);
});

