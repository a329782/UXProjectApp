import { Subscription } from 'rxjs';
import { LeaguesService } from './../leagues.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit, OnDestroy {

  statisticsDay: string;
  statisticsSubscription: Subscription;

  leagueTeams = [];
  
  constructor(private leaguesService: LeaguesService) { }

  ngOnInit() {
    this.leagueTeams = this.leaguesService.getLeagueTeams();

    this.statisticsSubscription = this.leaguesService.currentStatisticsDay.subscribe(statisticsDay => this.statisticsDay = statisticsDay);

  }

  ngOnDestroy() {
    this.statisticsSubscription.unsubscribe();
  }

}
