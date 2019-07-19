import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat = 19.432608;
  lng = -99.133209;

  zoom = 9;

  mapClick(event) {
    console.log(event);
  }
  constructor(private keyMap: AgmCoreModule) {}

  ngOnInit() { }

}
