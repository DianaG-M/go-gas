import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../providers/location.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
situation: any = [];
  constructor(private location: LocationService) {
   }

  ngOnInit() {
    console.log(this.location.getPlaces());
  }

}
