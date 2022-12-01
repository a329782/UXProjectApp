import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
})
export class CheckInPage implements OnInit {

  lat;
  lng;

  constructor(private geo: Geolocation, private alertController: AlertController) { }

  ngOnInit() {
  }

  whereIAm(){
    this.geo.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then((res)=>{
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
      this.confirmLocation(this.lat, this.lng);
    }). catch((e)=>{
      console.log(e);
    });
  }

  confirmLocation(lat, lng){
    if (Math.round(lat) === 29 && Math.round(lng)=== -106){
      this.checkInAlertCorrect();
    }else{
      console.log(Math.round(lat));
    }
  }

  async checkInAlertCorrect() {
    const alert = await this.alertController.create({
      header: "Check-In",
      cssClass: 'join-team-alert',
      message: "Ubicación confirmada.",
      buttons: [
        {
          text: 'Confirmar',
        }
      ]
    });
    await alert.present()
  }

  async checkInAlertIncorrect() {
    const alert = await this.alertController.create({
      header: "Check-In denegado",
      cssClass: 'join-team-alert',
      message: "La ubicación no coincide con la cancha, intenta de nuevo.",
      buttons: [
        {
          text: 'Confirmar',
        }
      ]
    });
    await alert.present()
  }

}
