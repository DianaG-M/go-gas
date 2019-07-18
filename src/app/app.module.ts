import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { CardsComponent } from './components/shared/cards/cards.component';
import { HomeComponent } from './components/home/home.component';

// Service
import { LocationService } from './providers/location.service';

// Routes
import { FeatureRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    CardsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule

  ],
  providers: [
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
