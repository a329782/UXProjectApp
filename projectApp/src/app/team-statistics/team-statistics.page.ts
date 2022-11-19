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

  leagues = [];

  constructor(private leaguesService: LeaguesService, private router: Router, private activatedRoute: ActivatedRoute) { 
  }
  
  ngOnInit() {
    this.leagues = this.leaguesService.getLeagues();

    this.subscription = this.leaguesService.currentLeagueDay.subscribe(leagueDay => this.leagueDay = leagueDay)

  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
  
}
