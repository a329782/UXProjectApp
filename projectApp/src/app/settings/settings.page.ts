import { UsersService } from './../users.service';
import { Subscription } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  usuario: string;
  subscription: Subscription;
  paterno: string;
  paternoSubscription: Subscription;

  user = this.authService.getUser();

  constructor(private authService: AuthService, private usersService: UsersService) { }

  ngOnInit() {
    this.subscription = this.usersService.currentUsuarioName.subscribe(usuario => this.usuario = usuario);
    this.paternoSubscription = this.usersService.currentUsuarioPaterno.subscribe(paterno => this.paterno = paterno);

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.paternoSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

  getUsuario() {
    return this.usuario;
  }

  getUsuarioPaterno(){
    return this.paterno;
  }

}
