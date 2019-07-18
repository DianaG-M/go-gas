import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../providers/location.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private location: LocationService) {
   }

  ngOnInit() {
  }

}
