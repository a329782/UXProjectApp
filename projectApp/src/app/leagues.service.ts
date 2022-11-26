import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  private leagueDaySource = new BehaviorSubject('default leagueDay');
  currentLeagueDay = this.leagueDaySource.asObservable();

  private statisticsDaySource = new BehaviorSubject('default statistics day');
  currentStatisticsDay = this.statisticsDaySource.asObservable();

  private playersScoreSource = new BehaviorSubject('default player');
  currentPlayersScore = this.playersScoreSource.asObservable();


  private leagues = [
    {
        id: 0,
        day: 'Domingo',
        belongs: false,
        teamRequested: false,
        teamCode: '8fd9s0',
        team: 'Real Mandril',
    },
    {
        id: 1,
        day: 'Lunes',
        belongs: false,
        teamRequested: false,
        teamCode: '12iodl',
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
        teamCode: 'bf23hj',
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
          { id:4, name: 'Leonardo Rodríguez', numGoals: 5, yellowCards: 5, redCards: 2, gamesPlayed: 10 },
          { id:5, name: 'Ramón Reyes', numGoals: 0, yellowCards: 2, redCards: 0, gamesPlayed: 8 },
          { id:6, name: 'Jorge de la Cruz', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 4 },
          { id:7, name: 'Laureano Montoya', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 2 },
          { id:8, name: 'Alvaro Soler', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 4 },
          { id:9, name: 'Xavier Cobo', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 4 },
          { id:10, name: 'Miguek Duque', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 4 },
          { id:11, name: 'Octavio Andrade', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 4 },
          { id:12, name: 'Ali Ventura', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 4 }
        ]
    },
    {
        id: 4,
        day: 'Jueves',
        team: 'Los abuelos F.C.',
        teamCode: 'jdk231',
        teamRequested: true,
        belongs: false,
        season: 12
    },
    {
        id: 5,
        day: 'Viernes',
        belongs: true,
        teamCode: 'kdo9d8',
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
          { id:0, name: 'Pedro Gonzalez', numGoals: 7, yellowCards: 4, redCards: 0, gamesPlayed: 8},
          { id:1, name: 'Gabriel Hernandez', numGoals: 6, yellowCards: 6, redCards: 2, gamesPlayed: 8 },
          { id:2, name: 'Martin Martínez', numGoals: 3, yellowCards: 1, redCards: 0, gamesPlayed: 8 },
          { id:3, name: 'Jose Arellano', numGoals: 2, yellowCards: 3, redCards: 0, gamesPlayed: 8 },
          { id:4, name: 'Jacobo Guerra', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8 },
          { id:5, name: 'Alejandro Santiago'},
          { id:6, name: 'Pablo Tamayo'},
          { id:7, name: 'Faustino Millan'},
          { id:8, name: 'Alberto Costa'},
          { id:9, name: 'Vidal Lopez'},
          { id:10, name: 'Oscar Morales'},
          { id:11, name: 'Blas Saenz'},
          { id:12, name: 'Andres Cuevas'}
        ]
    },
    {
        id: 6,
        day: 'Sabado',
        belongs: true,
        team: 'Los capis',
        teamCode: 'ds6234',
        teamRequested: false,
        season: 6,
        jj: 6,
        jg: 3,
        jp: 1,
        je: 2,
        gf: 12,
        gc: 16,
        pts: 11,
        pos: 7,
        players: [
          { id:0, name: 'Pere Alvaro', numGoals: 7, yellowCards: 4, redCards: 0, gamesPlayed: 8},
          { id:1, name: 'Samuel Sevilla', numGoals: 6, yellowCards: 6, redCards: 2, gamesPlayed: 8 },
          { id:2, name: 'Juan Rebollo', numGoals: 3, yellowCards: 1, redCards: 0, gamesPlayed: 8 },
          { id:3, name: 'Alexandre Pareja', numGoals: 2, yellowCards: 3, redCards: 0, gamesPlayed: 8 },
          { id:4, name: 'Pascual Carpio', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8 },
          { id:5, name: 'Ramon Palomares'},
          { id:6, name: 'Luis Benitez'},
          { id:7, name: 'Pedro Chavez'},
          { id:8, name: 'Daniel Hinojos'},
          { id:9, name: 'Uriel Talamantes'},
          { id:10, name: 'Mario Garcia'},
          { id:11, name: 'Eduardo Ramirez'},
          { id:12, name: 'Alberto Arreola'}
        ]
    }
  ];

  private leagueTeams = [
    {
      id: 3,
      day: 'Miercoles',
      belongs: true,
      season: 10,
      teams: [
        { id: 0, name: 'Los correcaminos', pts: 31, pos: 1},
        { id: 1, name: 'Tacos Gera', pts: 28, pos: 2},
        { id: 2, name: 'Los temerarios', pts: 26, pos: 3},
        { id: 3, name: 'Caballeros', pts: 25, pos: 4},
        { id: 4, name: 'Galacticos', pts: 25, pos: 5},
        { id: 5, name: 'Gasolineras Carvel', pts: 21, pos: 6},
        { id: 6, name: 'Bonus team', pts: 19, pos: 7},
        { id: 7, name: 'Jidosha', pts: 18, pos: 8}
      ]
    },
    {
      id: 4,
      day: 'Jueves',
      belongs: false,
      season: 11,
      teams: [
        { id: 0, name: 'Premiere', pts: 32, pos: 1},
        { id: 1, name: 'Rivelinos F.C.', pts: 30, pos: 2},
        { id: 2, name: 'Tio pipsa', pts: 29, pos: 3},
        { id: 3, name: 'Matamoros', pts: 29, pos: 4},
        { id: 4, name: 'Team papas', pts: 26, pos: 5},
        { id: 5, name: 'La talleres', pts: 24, pos: 6},
        { id: 6, name: 'Mariscrudos', pts: 20, pos: 7},
        { id: 7, name: 'Flor arte', pts: 17, pos: 8}
      ]
    },
    {
      id: 5,
      day: 'Viernes',
      belongs: true,
      season: 8,
      teams: [
        { id: 0, name: 'Los cadetes', pts: 24, pos: 1},
        { id: 1, name: 'La PRI', pts: 23, pos: 2},
        { id: 2, name: 'Abuelos F.C.', pts: 20, pos: 3},
        { id: 3, name: 'Sacachispas', pts: 18, pos: 4},
        { id: 4, name: 'Rico pollo', pts: 17, pos: 5},
        { id: 5, name: 'Cuervos', pts: 16, pos: 6},
        { id: 6, name: 'Chalo caps', pts: 13, pos: 7},
        { id: 7, name: 'Balones ponchados', pts: 11, pos: 8}
      ]
    },
    {
      id: 6,
      day: 'Sabado',
      belongs: true,
      season: 6,
      teams: [
        { id: 0, name: 'Granja miranda', pts: 31, pos: 1},
        { id: 1, name: 'La cabañita', pts: 28, pos: 2},
        { id: 2, name: 'Juaguares', pts: 26, pos: 3},
        { id: 3, name: 'Perfiles del real', pts: 25, pos: 4},
        { id: 4, name: 'Vetados', pts: 25, pos: 5},
        { id: 5, name: 'La carreta', pts: 21, pos: 6},
        { id: 6, name: 'Los capis', pts: 11, pos: 7},
        { id: 7, name: 'Don Goyo', pts: 9, pos: 8}
      ]
    },


  ]


  constructor() { }
  
  private currentMatch=[
    {
      teamA: 'Los cadetes',
      playersA: [
        { id:0, name: 'Gonzalez Pedro', numGoals: 7, yellowCards: 4, redCards: 0, gamesPlayed: 8, isHere: 'si'},
        { id:1, name: 'Hernandez Gabriel', numGoals: 6, yellowCards: 6, redCards: 2, gamesPlayed: 8, isHere: 'si' },
        { id:2, name: 'Martínez Martin', numGoals: 3, yellowCards: 1, redCards: 0, gamesPlayed: 8, isHere: 'no' },
        { id:3, name: 'Arellano Jose', numGoals: 2, yellowCards: 3, redCards: 0, gamesPlayed: 8, isHere: 'si' },
        { id:4, name: 'Guerra Jacobo', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8, isHere: 'si' },
        { id:5, name: 'Santiago Alejandro', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8, isHere: 'si' },
        { id:6, name: 'Tamayo Pablo', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8, isHere: 'si' },
        { id:7, name: 'Millan Faustino', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8, isHere: 'no' },
        { id:8, name: 'Costa Alberto', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8, isHere: 'si' },
        { id:9, name: 'Lopez Vidal', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8, isHere: 'si' },
        { id:10, name: 'Morales Oscar', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8, isHere: 'si' },
        { id:11, name: 'Saenz Blas', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8, isHere: 'no' },
        { id:12, name: 'Cuevas Andres', numGoals: 2, yellowCards: 6, redCards: 0, gamesPlayed: 8, isHere: 'si' }
      ],
      teamB: 'Los temerarios',
      playersB: [
        { id:0, name: 'Pérez Juan', numGoals: 14, yellowCards: 5, redCards: 2, gamesPlayed: 10, isHere: 'si' },
        { id:1, name: 'García Daniel', numGoals: 10, yellowCards: 5, redCards: 2, gamesPlayed: 10, isHere: 'si' },
        { id:2, name: 'Martínez Alexander', numGoals: 8, yellowCards: 5, redCards: 2, gamesPlayed: 10, isHere: 'si' },
        { id:3, name: 'López Mateo', numGoals: 7, yellowCards: 5, redCards: 2, gamesPlayed: 10, isHere: 'si' },
        { id:4, name: 'Rodríguez Leonardo', numGoals: 5, yellowCards: 5, redCards: 2, gamesPlayed: 10, isHere: 'no' },
        { id:5, name: 'Reyes Ramón', numGoals: 0, yellowCards: 2, redCards: 0, gamesPlayed: 8, isHere: 'si' },
        { id:6, name: 'De la Cruz Jorge', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 4, isHere: 'si' },
        { id:7, name: 'Montoya Laureano', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 2, isHere: 'si' },
        { id:8, name: 'Soler Alvaro', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 4, isHere: 'no' },
        { id:9, name: 'Cobo Xavier', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 4, isHere: 'si' },
        { id:10, name: 'Duque Miguel', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 4, isHere: 'no' },
        { id:11, name: 'Andrade Octavio', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 4, isHere: 'si' },
        { id:12, name: 'Ventura Ali', numGoals: 0, yellowCards: 0, redCards: 0, gamesPlayed: 4, isHere: 'no' }
      ]
    }
  ]

  getCurrentMatch(){
    return this.currentMatch;
  }

  changeLeagueDay(leagueDay: string){
    this.leagueDaySource.next(leagueDay);
  }

  changeStatisticsDay(statisticsDay: string){
    this.statisticsDaySource.next(statisticsDay);
  }

  setPlayerStatistics(playersInfo: string){
    this.playersScoreSource.next(playersInfo);
  }


  getLeagues() {
    return this.leagues;
  }

  getLeagueTeams() {
    return this.leagueTeams;
  }

}
