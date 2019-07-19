import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 19.432608;
  lng = -99.133209;

  zoom = 9;

  constructor( ) {}

  ngOnInit() {
  }

  mapClick(event) {
    console.log(event);
  }
}
