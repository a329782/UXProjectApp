import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage implements OnInit {

  user = this.authService.getLoggedInUser();

  constructor(private authService: AuthService, private router: Router, private alertController: AlertController) { }

  openArbitroPage(){
    this.router.navigateByUrl('/ingame-arbitro');
  }

  async presentArbitroAlert() {
    const alert = await this.alertController.create({
      header: "Comenzar el partido",
      cssClass: 'join-team-alert',
      message: "Desea comenzar el partido?",
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
            this.router.navigateByUrl('/ingame-arbitro');
          }
        }
      ]
    });
    await alert.present()
  }

  ngOnInit() {
  }

}
