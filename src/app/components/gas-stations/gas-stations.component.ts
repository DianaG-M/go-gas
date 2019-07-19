import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../providers/location.service';


@Component({
  selector: 'app-gas-stations',
  templateUrl: './gas-stations.component.html',
  styleUrls: ['./gas-stations.component.css']
})
export class GasStationsComponent implements OnInit {
  gasoline: any[] = [];

  constructor(private gasoineData: LocationService) { }

  ngOnInit() {
    this.gasoline = this.gasoineData.getPlaces();
  }

}
