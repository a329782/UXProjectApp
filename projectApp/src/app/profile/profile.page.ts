import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user = this.authService.getUser();

  constructor(private authService: AuthService) { }


  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
