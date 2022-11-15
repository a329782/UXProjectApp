import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { modalController } from '@ionic/core';

@Component({
  selector: 'app-team-statistics',
  templateUrl: './team-statistics.page.html',
  styleUrls: ['./team-statistics.page.scss'],
})
export class TeamStatisticsPage implements OnInit {


  teams = [
    {teamId: 0, name: 'Los temerarios'},

  ]

  playersWednesday = [

    { id:0, name: 'Juan Pérez', numGoals: 14, yellowCards: 5, redCards: 2, gamesPlayed: 10},
    { id:1, name: 'Daniel García', numGoals: 10, yellowCards: 5, redCards: 2, gamesPlayed: 10 },
    { id:2, name: 'Alexander Martínez', numGoals: 8, yellowCards: 5, redCards: 2, gamesPlayed: 10 },
    { id:3, name: 'Mateo López', numGoals: 7, yellowCards: 5, redCards: 2, gamesPlayed: 10 },
    { id:4, name: 'Leonardo Rodríguez', numGoals: 5, yellowCards: 5, redCards: 2, gamesPlayed: 10 }
  ];

  constructor() { }

  ngOnInit() {}

}
