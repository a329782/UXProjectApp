import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthService , private router: Router) { }

  myAuth: string;

  ngOnInit() {
  }

  signIn(userName) {
    this.auth.signIn(userName).subscribe(user => {
      if(userName === 'capitan'){
        this.router.navigateByUrl('/tabs', {replaceUrl: true});
      } else if (userName === 'user'){
        this.router.navigateByUrl('/tabs', {replaceUrl: true});
        console.log('hola usuario');
      } else if (userName === 'arbitro'){
        this.router.navigateByUrl('/tabs', {replaceUrl: true});
        console.log('hola arbitro');
      }
    });
  }

}
