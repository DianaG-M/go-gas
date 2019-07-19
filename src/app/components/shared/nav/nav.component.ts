import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../providers/login.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public _ls:LoginService) { }

  ngOnInit() {
  }

}
