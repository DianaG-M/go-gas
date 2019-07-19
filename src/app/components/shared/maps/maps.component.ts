import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../providers/location.service';

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

  constructor( private markers: LocationService) {
  }

  ngOnInit() {
    this.arrMarkers = this.markers.getPlaces();
  }

  /* getData() {
    this.arrMarkers.forEach(element => {
      this.lat = element.location.x;
      console.log(this.lat);
      this.lat.push(element.location.x);
      this.lng = element.location.y;
      console.log(this.lng);
      this.lng.push(element.location.y);
    });
  }*/
  mapClick(event) {
    console.log(event);
  }

}
