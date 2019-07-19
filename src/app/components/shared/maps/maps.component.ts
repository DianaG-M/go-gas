import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../providers/location.service';
import { LoginService } from "../../../providers/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat = 19.432608;
  lng = -99.133209;

  zoom = 9;

  arrMarkers: any[] = [];

  constructor( private markers: LocationService,
               private router: Router,
               public _ls:LoginService) {
  }

  ngOnInit() {
    this.arrMarkers = this.markers.getPlaces();
  }

  mapClick(event) {
    console.log(event);
  }

  getAllData() {
    this.router.navigate(['home/gasolinera']);
  }

}
