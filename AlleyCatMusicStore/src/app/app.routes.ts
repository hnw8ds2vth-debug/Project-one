import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AlbumPage } from './pages/album/album.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'albums/:slug', component: AlbumPage },
];
