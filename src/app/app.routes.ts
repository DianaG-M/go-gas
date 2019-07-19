import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/shared/maps/maps.component';
import { LoginComponent } from './components/login/login.component';
import { GasStationsComponent } from './components/gas-stations/gas-stations.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent,
        children: [
    { path: 'mapa', component: MapsComponent },
    { path: 'gasolinera', component: GasStationsComponent }
] },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
