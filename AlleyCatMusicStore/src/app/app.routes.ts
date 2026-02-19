import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AlbumPage } from './pages/album/album.page';
import { ArtistPage } from './artist-page/artist-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'albums/:slug', component: AlbumPage },
  { path: ':artistId', component: ArtistPage },
];