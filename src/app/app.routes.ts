import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/shared/maps/maps.component';
import { LoginComponent } from './components/login/login.component';


/* import { Name2Component } from './';
import { Name3Component } from './';
import { Name4Component } from './';
import { PageNotFoundComponent } from './'; */

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent,
        children: [
    { path: 'mapa', component: MapsComponent }
] },
    /*{ path: 'path4', component: Name4Component }, */
    { path: '**', pathMatch: 'full', redirectTo: 'login' },

    // { path: 'path/:routeParam', component: MyComponent },
    // { path: 'staticPath', component: ... },
    // { path: '**', component: ... },
    // { path: 'oldPath', redirectTo: '/staticPath' },
    // { path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
