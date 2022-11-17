import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  private leagueDaySource = new BehaviorSubject('default leagueDay');
  currentLeagueDay = this.leagueDaySource.asObservable();

  private leagues = [
    {
        id: 0,
        day: 'Domingo',
        belongs: false,
        teamRequested: false,
        team: 'Real Mandril',
    },
    {
        id: 1,
        day: 'Lunes',
        belongs: false,
        teamRequested: false,
        team: 'Los capis',
    },
    {
        id: 2,
        day: 'Martes',
        belongs: false,
        teamRequested: false,
        team: 'Los capis',
    },
    {
        id: 3,
        day: 'Miercoles',
        belongs: true,
        teamRequested: false,
        team: 'Los temerarios',
        season: 10,
        jj: 10, 
        jg: 5, 
        jp: 3, 
        je: 2, 
        gf: 27, 
        gc: 18, 
        pts: 17, 
        pos: 3,
        players: [
          { id:0, name: 'Juan Pérez', numGoals: 14, yellowCards: 5, redCards: 2, gamesPlayed: 10 },
          { id:1, name: 'Daniel García', numGoals: 10, yellowCards: 5, redCards: 2, gamesPlayed: 10 },
          { id:2, name: 'Alexander Martínez', numGoals: 8, yellowCards: 5, redCards: 2, gamesPlayed: 10 },
          { id:3, name: 'Mateo López', numGoals: 7, yellowCards: 5, redCards: 2, gamesPlayed: 10 },
          { id:4, name: 'Leonardo Rodríguez', numGoals: 5, yellowCards: 5, redCards: 2, gamesPlayed: 10 }
        ]
    },
    {
        id: 4,
        day: 'Jueves',
        team: 'Los abuelos F.C.',
        teamRequested: true,
        belongs: false,
    },
    {
        id: 5,
        day: 'Viernes',
        belongs: true,
        teamRequested: false,
        team: 'Los cadetes',
        season: 8,
        jj: 8,
        jg: 8,
        jp: 0,
        je: 0,
        gf: 20,
        gc: 7,
        pts: 24,
        pos: 1,
        players: [
          { id:5, name: 'Pedro Gonzalez', numGoals: 7, yellowCards: 4, redCards: 0, gamesPlayed: 8},
          { id:6, name: 'Gabriel Hernandez', numGoals: 6, yellowCards: 6, redCards: 2, gamesPlayed: 8 },
          { id:7, name: 'Martin Martínez', numGoals: 3, yellowCards: 1, redCards: 0, gamesPlayed: 8 },
          { id:8, name: 'Jose Arellano', numGoals: 2, yellowCards: 3, redCards: 0, gamesPlayed: 8 },
          { id:9, name: 'Jacobo Guerra', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8 }
        ]
    },
    {
        id: 6,
        day: 'Sabado',
        belongs: true,
        team: 'Los capis',
        teamRequested: false,
        season: 6,
        jj: 6,
        jg: 3,
        jp: 1,
        je: 2,
        gf: 12,
        gc: 16,
        pts: 11,
        pos: 7
    }
  ];

  constructor() { }

  changeLeagueDay(leagueDay: string){
    this.leagueDaySource.next(leagueDay);
  }

  getLeagues() {
    return this.leagues;
  }

}
