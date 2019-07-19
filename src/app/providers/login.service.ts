import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { Usuario } from "../interface/usuario.interface";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private itemsCollection: AngularFirestoreCollection<Usuario>;

  public usuario: any ={};

  constructor(public afAuth: AngularFireAuth) {


        this.afAuth.authState.subscribe( user =>{
          console.log ('Estado del usuario:',user);

          if(!user){
            return;
          }

          this.usuario.nombre= user.displayName;
          this.usuario.uid = user.uid;
          this.usuario.foto=user.photoURL

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
  agregarUsuario(  texto:string){
    let usuario :Usuario ={
      nombre: this.usuario.nombre,
      mensaje : texto,
      fecha: new Date ().getTime(),
      foto : this.usuario.foto,
      uid: this.usuario.uid
    }
    
    return this. itemsCollection.add(usuario);
}
}
