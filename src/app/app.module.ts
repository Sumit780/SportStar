import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarSportsComponent } from './star-sports/star-sports.component';
import { SportIconsComponent } from './sport-icons/sport-icons.component';
import { FootbaalComponent } from './footbaal/footbaal.component';
import { CricketComponent } from './cricket/cricket.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StarSportsComponent,
    SportIconsComponent,
    FootbaalComponent,
    CricketComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
