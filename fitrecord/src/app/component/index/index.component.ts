import { Component } from '@angular/core';
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  constructor(private authService: AuthService) {
  }

  logout(){
    this.authService.logout();
  }

  protected readonly localStorage = localStorage;
}
