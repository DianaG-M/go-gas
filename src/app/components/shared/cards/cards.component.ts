import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../../../providers/location.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  mapId: any;
  mapCooders: any;

  @Input () dataGas: any = [];

  constructor(private map: LocationService) { }

  ngOnInit() {
  }





}
