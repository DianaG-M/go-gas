import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat: number = 19.432608;
  lng: number = -99.133209;

  zoom: number=9;

  mapClick(event){
 console.log(event);
 
  }
  constructor(private keyMap: AgmCoreModule){
    
  }
  ngOnInit() {
   
    
  }

}
