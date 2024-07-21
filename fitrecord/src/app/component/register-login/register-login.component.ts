import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-register-login',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './register-login.component.html',
  styleUrl: './register-login.component.css'
})
export class RegisterLoginComponent {
  status : boolean = false;
  sign_up(){
    document.getElementsByClassName('.container')[0].classList.add('sign-up-mode');
  }

  sign_in(){
    document.getElementsByClassName('.container')[0].classList.remove('sign-up-mode');
  }
}
