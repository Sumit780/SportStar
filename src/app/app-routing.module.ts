import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportIconsComponent } from './sport-icons/sport-icons.component';
import { FootbaalComponent } from './footbaal/footbaal.component';
import { CricketComponent } from './cricket/cricket.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const routes: Routes = [
  {
    path: 'stars',
    component: SportIconsComponent
  },
  {
    path: 'stars/football',
    component: FootbaalComponent
  },
  {
    path: 'stars/cricket',
    component: CricketComponent
  },
  {
    path: 'Details/:id',
    component: PlayerDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
