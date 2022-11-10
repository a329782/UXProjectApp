import { alertController } from '@ionic/core';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() {
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

}
