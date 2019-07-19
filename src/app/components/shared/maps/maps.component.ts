import { OnInit, Component } from '@angular/core';
import { LocationService } from '../../../providers/location.service';
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

  constructor(private markers: LocationService,
              private router: Router) {}

  ngOnInit() {
    this.arrMarkers = this.markers.getPlaces();
  }

  mapClick(event) {
    console.log(event);
  }

  getAllData() {
    this.router.navigate(['home/gasolinera']);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          console.log('Latitude: ' + position.coords.latitude +
            'Longitude: ' + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lng);
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }


}




