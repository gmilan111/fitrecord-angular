import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //Register
  register(email: any, password: any, username: any) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( ()=> {
      alert("Successfully registered user");
      localStorage.setItem('username', username);
      /*this.router.navigate(['/register']);*/
      window.location.reload();
    },err=>{
      alert(err.message);
      this.router.navigate(['/register']);
    });
  }

  //Login
  login(email: any, password: any, username: any) {
    this.fireauth.signInWithEmailAndPassword(email, password).then( ()=> {
      localStorage.setItem('token', 'true');
      localStorage.setItem('username', username);
      this.router.navigate(['']);
    }, err=>{
      alert(err.message);
      window.location.reload();
    });
  }

  logout(){
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/register']);
    }, err => {
      alert(err.message);
    });
  }
}
