import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile-edit-mode',
  templateUrl: './profile-edit-mode.page.html',
  styleUrls: ['./profile-edit-mode.page.scss'],
})
export class ProfileEditModePage implements OnInit {

  user = this.authService.getUser();
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  
  logout() {
    this.authService.logout();
  }

}
