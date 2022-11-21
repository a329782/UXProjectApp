import { Subscription } from 'rxjs';
import { LeaguesService } from './../leagues.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-statistics',
  templateUrl: './team-statistics.page.html',
  styleUrls: ['./team-statistics.page.scss'],
})
export class TeamStatisticsPage implements OnInit, OnDestroy {
  
  leagueDay: string;
  subscription: Subscription;

  playerInfo: string;
  playerSubscription: Subscription;

  leagues = [];

  constructor(private leaguesService: LeaguesService, private router: Router, private activatedRoute: ActivatedRoute) { 
  }
  
  getPlayersInfo(playerInfo){
    this.leaguesService.setPlayerStatistics(playerInfo);
  }

  ngOnInit() {
    this.leagues = this.leaguesService.getLeagues();
    this.subscription = this.leaguesService.currentLeagueDay.subscribe(leagueDay => this.leagueDay = leagueDay)
    this.playerSubscription = this.leaguesService.currentPlayersScore.subscribe(playerInfo => this.playerInfo = playerInfo);
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
      this.playerSubscription.unsubscribe();
  }
  
}
