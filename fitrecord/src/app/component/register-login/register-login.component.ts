import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {ReactiveFormsModule, FormControl, FormGroup, Validators, FormsModule} from "@angular/forms";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-register-login',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register-login.component.html',
  styleUrl: './register-login.component.css'
})
export class RegisterLoginComponent {
  constructor(private authService: AuthService,) {}

  signin = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  register = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  status : boolean = false;

  registration(){
    if(this.register.invalid){
      alert("Something went wrong!");
      return;
    }

    if(this.register.controls.username.invalid){
      alert("Username required");
      return;
    }
    if(this.register.controls.email.invalid){
      alert("Email required");
      return;
    }
    if(this.register.controls.password.invalid){
      alert("Password required");
      return;
    }

    this.authService.register(this.register.controls.email.value, this.register.controls.password.value, this.register.controls.username.value);
  }

  sign_in(){
    if(this.signin.invalid){
      alert("Username and password are required");
      return;
    }

    if(this.signin.controls.email.invalid){
      alert("Email required");
      return;
    }

    if(this.signin.controls.password.invalid){
      alert("Password required");
      return;
    }

    this.authService.login(this.signin.controls.email.value, this.signin.controls.password.value, this.register.controls.username.value);
  }
  /*sign_up(){
    document.getElementsByClassName('.container')[0].classList.add('sign-up-mode');
  }

  sign_in(){
    document.getElementsByClassName('.container')[0].classList.remove('sign-up-mode');
  }*/
}
