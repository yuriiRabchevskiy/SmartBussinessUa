import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { SMART_BUSSINESS_UA } from './constants/config.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: firebase.User;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem(SMART_BUSSINESS_UA, JSON.stringify(this.user));
      } else {
        localStorage.removeItem(SMART_BUSSINESS_UA);
      }
    });
  }

  async login(email: string, password: string): Promise<void> {
    const result = await this.afAuth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['/']);
  }

  async logout(): Promise<void> {
    await this.afAuth.signOut();
    localStorage.removeItem(SMART_BUSSINESS_UA);
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    const user = localStorage.getItem(SMART_BUSSINESS_UA);
    return !!user;
  }
}
