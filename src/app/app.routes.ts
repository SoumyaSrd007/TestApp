import { Routes } from '@angular/router';
import { PlaylistComponent } from './modules/music/components/playlist/playlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'playlist', pathMatch: 'full' },
  { path: 'playlist', component: PlaylistComponent },
];
