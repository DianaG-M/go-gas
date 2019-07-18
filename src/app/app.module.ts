import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { CardsComponent } from './components/shared/cards/cards.component';

// Service
import { LocationService } from './providers/location.service';
import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/shared/maps/maps.component';

//key map
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    CardsComponent,
    HomeComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-G_RkDLqUzDLIa1x_2P694gwsqBHLeUo'
    })
  ],
  providers: [
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
