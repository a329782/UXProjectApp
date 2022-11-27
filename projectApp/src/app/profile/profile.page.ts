import { Subscription } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  usuario: string;
  subscription: Subscription;

  paterno: string;
  paternoSubscription: Subscription;

  email: string; 
  emailSubscription: Subscription;

  phone: number;
  phoneSubscription: Subscription;

  password: string;
  passwordSubscription: Subscription;

  confPassword: string;
  confPasswordSubscription: Subscription;


  user = this.authService.getUser();

  constructor(private authService: AuthService, private usersService: UsersService) { }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.subscription = this.usersService.currentUsuarioName.subscribe(usuario => this.usuario = usuario);

    this.paternoSubscription = this.usersService.currentUsuarioPaterno.subscribe(paterno => this.paterno = paterno);

    this.emailSubscription = this.usersService.currentUsuarioEmail.subscribe(email => this.email = email);

    this.phoneSubscription = this.usersService.currentUsuarioPhone.subscribe(phone => this.phone = phone);

    this.passwordSubscription = this.usersService.currentUsuarioPassword.subscribe(password => this.password = password);

    this.passwordSubscription = this.usersService.currentConfirmPassword.subscribe(confPassword => this.confPassword = confPassword);

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.paternoSubscription.unsubscribe();
    this.emailSubscription.unsubscribe();
    this.phoneSubscription.unsubscribe();
    this.passwordSubscription.unsubscribe();
    this.confPasswordSubscription.unsubscribe();
  }

  getUsuario(){
    return this.usuario;
  }

  getUsuarioPaterno(){
    return this.paterno;
  }

  getUsuarioEmail(){
    return this.email;
  }

  getUsuarioPhone(){
    return this.phone;
  }

  getUsuarioPassword(){
    return this.password;
  }

  getConfPassword(){
    return this.confPassword;
  }

}
