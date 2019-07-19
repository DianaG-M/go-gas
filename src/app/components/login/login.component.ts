import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "../../providers/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private router: Router,
              public _ls: LoginService) { }

  

  ingresar( proveedor: string) {
    console.log(proveedor);

    this._ls.login(proveedor);
  }

  goMaps() {
    this.router.navigate(['home/mapa']);
  }

  
      

}
