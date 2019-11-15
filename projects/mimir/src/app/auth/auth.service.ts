import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private auth: AngularFireAuth
  ) { }

  login(email, password) {
      return this.auth.auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email, password) {
      return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
      return from(this.auth.auth.signOut());
  }
}
