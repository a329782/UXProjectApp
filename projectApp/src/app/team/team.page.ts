import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LeaguesService } from '../leagues.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit, OnDestroy {

  leagueDay: string;
  subscription: Subscription;

  leagues = [];

  constructor(
    public alertController: AlertController, private leaguesService: LeaguesService, private router: Router) { }

  openTeamStatisticsPage(leagueDay){
    this.router.navigateByUrl('/team-statistics');
    this.leaguesService.changeLeagueDay(leagueDay);
  }

  ngOnInit() {
    this.leagues = this.leaguesService.getLeagues();
    this.subscription = this.leaguesService.currentLeagueDay.subscribe(leagueDay => this.leagueDay = leagueDay);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Unirse a equipo",
      cssClass: 'join-team-alert',
      message: "Ingresa el código del equipo",
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
            this.sentConfirmationAlert();
          }
        }
      ],
      inputs: [
        {
          placeholder: 'Código',
          attributes: {
            maxLength: 6,
          },
        },
      ],
    });
    await alert.present()
  }

  async sentConfirmationAlert() {
    const alert = await this.alertController.create({
      message: "Solicitud enviada.",
      buttons: ["Aceptar"]
    });
    await alert.present();
  }

  async presentSolAlert() {
    const alert = await this.alertController.create({
      header: "Aún no has sido aceptado.",
      message: "Enviaste esta solicitud el 17/10/2022",
      buttons: ["Aceptar"]
    });
    await alert.present();
  }

  
}
