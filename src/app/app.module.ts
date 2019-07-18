import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { CardsComponent } from './components/shared/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

// Service
import { LocationService } from './providers/location.service';
import { LoginService } from './providers/login.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    CardsComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LocationService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
