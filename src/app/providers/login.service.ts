import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public usuario: any ={};

  constructor(public afAuth: AngularFireAuth) {


        this.afAuth.authState.subscribe( user =>{
          console.log ('Estado del usuario:',user);

          if(!user){
            return;
          }

          this.usuario.nombre= user.displayName;
          this.usuario.uid = user.uid;

        })

   }

  login(proveedor: string) {

    if (proveedor === 'google'){

      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }else{
      this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
  }
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }
}
