import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LeaguesService } from '../leagues.service';

@Component({
  selector: 'app-ingame-arbitro',
  templateUrl: './ingame-arbitro.page.html',
  styleUrls: ['./ingame-arbitro.page.scss'],
})
export class IngameArbitroPage implements OnInit {

  teams = [];
  teamA = 'teamA';
  teamB = 'teamB';
  scoreA: number = 0;
  scoreB: number = 0;
  faltasA: number = 0;
  faltasB: number = 0;

  constructor(private router: Router, private leaguesService: LeaguesService, private alertController: AlertController, public modalCtrl: ModalController) { }

  async confirmGoalAlert(playerName) {
    const alert = await this.alertController.create({
      header: playerName,
      cssClass: 'join-team-alert',
      message: "Confirma que la persona anotó gol?",
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
            this.modalCtrl.dismiss();
          }
        }
      ]
    });
    await alert.present()
  }

  async confirmFoulAlert(playerName) {
    const alert = await this.alertController.create({
      header: playerName,
      cssClass: 'join-team-alert',
      message: "Confirma que la persona cometió falta?",
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
            this.modalCtrl.dismiss();
          }
        }
      ]
    });
    await alert.present()
  }

  cancelGoal(team){
    if(team==='teamA'){
      this.scoreA-=1;
    }else if(team==='teamB'){
      this.scoreB-=1;
    }
    this.modalCtrl.dismiss();
  }

  cancelFoul(team){
    if(team==='teamA'){
      this.faltasA-=1;
    }else if(team==='teamB'){
      this.faltasB-=1;
    }
    this.modalCtrl.dismiss();
  }

  async endgameAlert() {
    const alert = await this.alertController.create({
      header: "Finalizar el partido",
      cssClass: 'join-team-alert',
      message: "Desea finalizar el partido?",
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
            this.comentariosAlert();
          }
        }
      ]
    });
    await alert.present()
  }

  async comentariosAlert() {
    const alert = await this.alertController.create({
      header: "Comentarios sobre el partido",
      cssClass: 'join-team-alert',
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            this.router.navigateByUrl('/tabs');
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            this.router.navigateByUrl('/tabs');
          }
        }
      ],
      inputs: [
        {
          type: 'textarea',
          placeholder: 'Comentarios...'
        },
      ],
    });
    await alert.present()
  }

  async difGoalAlert() {
    const alert = await this.alertController.create({
      header: "Finalizar el partido",
      cssClass: 'join-team-alert',
      message: "La diferencia de goles de los equipos es mas de 10, desea finalizar el partido?",
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
            this.comentariosAlert();
          }
        }
      ]
    });
    await alert.present()
  }

  async penalAlert(team) {
    const alert = await this.alertController.create({
      header: team,
      cssClass: 'join-team-alert',
      message: "El equipo ha cometido 6 faltas, es momento de un penal en contra.",
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
            if(team==='Correcaminos'){
              this.faltasA=0;
            }else if(team==='Cadetes'){
              this.faltasB=0;
            }
          }
        }
      ]
    });
    await alert.present()
  }

  updateFoul(team){
    if(team==='teamA'){
      this.faltasA+=1;
    }else if(team==='teamB'){
      this.faltasB+=1;
    }
    if(this.faltasA >= 6 ){
      this.penalAlert('Correcaminos');
    }else if(this.faltasB >= 6){
      this.penalAlert('Cadetes');
    }
  }

  updateScore(team){
    if(team==='teamA'){
      this.scoreA+=1;
    }else if(team==='teamB'){
      this.scoreB+=1;
    }
    if((this.scoreA - this.scoreB) > 10){
      this.difGoalAlert();
    }else if((this.scoreB - this.scoreA) > 10){
      this.difGoalAlert();
    }
  }

  ngOnInit() {
    this.teams = this.leaguesService.getCurrentMatch();
  }

}
