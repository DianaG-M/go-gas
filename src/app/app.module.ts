import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


// Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { CardsComponent } from './components/shared/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/shared/maps/maps.component';

// Service
import { LocationService } from './providers/location.service';
import { LoginService } from './providers/login.service';

// key map
import { AgmCoreModule } from '@agm/core';

// Routes
import { FeatureRoutingModule } from './app.routes';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    CardsComponent,
    HomeComponent,
    MapsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-G_RkDLqUzDLIa1x_2P694gwsqBHLeUo'
    }),
    FeatureRoutingModule
  ],
  providers: [
    LocationService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
