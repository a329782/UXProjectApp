import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { leagues } from '../leagues';
import { teamWednesday } from '../leagues';

@Component({
  selector: 'app-team-statistics',
  templateUrl: './team-statistics.page.html',
  styleUrls: ['./team-statistics.page.scss'],
})
export class TeamStatisticsPage implements OnInit {

  leagues = leagues;
  teamWednesday = teamWednesday;

  constructor() { }

  ngOnInit() {}

}
