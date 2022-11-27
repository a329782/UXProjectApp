import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-profile-edit-mode',
  templateUrl: './profile-edit-mode.page.html',
  styleUrls: ['./profile-edit-mode.page.scss'],
})
export class ProfileEditModePage implements OnInit {

  usuarioName: string;
  subscription: Subscription;

  usuarioPaterno: string;
  paternoSubscription: Subscription;

  usuarioEmail: string;
  emailSubscription: Subscription;

  usuarioPhone: number;
  phoneSubscription: Subscription;

  usuarioPassword: string;
  passwordSubscription: Subscription;

  confPassword: string;
  confPasswordSubscription: Subscription;

  user = this.authService.getUser();
  
  
  constructor(private authService: AuthService, private usersService: UsersService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.subscription = this.usersService.currentUsuarioName.subscribe(usuarioName => this.usuarioName = usuarioName);
    this.paternoSubscription = this.usersService.currentUsuarioPaterno.subscribe(usuarioPaterno => this.usuarioPaterno = usuarioPaterno);
    this.emailSubscription = this.usersService.currentUsuarioEmail.subscribe(usuarioEmail => this.usuarioEmail = usuarioEmail);
    this.phoneSubscription = this.usersService.currentUsuarioPhone.subscribe(usuarioPhone => this.usuarioPhone = usuarioPhone);
    this.passwordSubscription = this.usersService.currentUsuarioPassword.subscribe(usuarioPassword => this.usuarioPassword = usuarioPassword);
    this.confPasswordSubscription = this.usersService.currentConfirmPassword.subscribe(confPassword => this.confPassword = confPassword);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.emailSubscription.unsubscribe();
    this.paternoSubscription.unsubscribe();
    this.phoneSubscription.unsubscribe();
    this.passwordSubscription.unsubscribe();
    this.confPasswordSubscription.unsubscribe();
  }

  newName() {
    this.usersService.changeUsuarioName(this.usuarioName);
    this.usersService.changeUsuarioPaterno(this.usuarioPaterno);
    this.usersService.changeUsuarioEmail(this.usuarioEmail);
    this.usersService.changeUsuarioPhone(this.usuarioPhone);
    this.usersService.changeUsuarioPassword(this.usuarioPassword);
    this.usersService.changeConfirmPassword(this.confPassword);
    this.confirmPassword();
  }

  confirmPassword() {
    if(this.usuarioPassword===this.confPassword){
      this.router.navigateByUrl('/tabs/profile');
    }else{
      this.difPasswords();
    }
  }

  async difPasswords() {
    const alert = await this.alertController.create({
      header: "Alerta",
      cssClass: 'join-team-alert',
      message: "Las contraseñas no coinciden, verifica que sean iguales en ambos campos.",
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Acción cancelada.');
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            console.log('Acción confirmar');
          }
        }
      ]
    });
    await alert.present()
  }

  logout() {
    this.authService.logout();
  }

}
