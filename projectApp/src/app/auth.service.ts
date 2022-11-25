import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { tap } from 'rxjs/operators'

const TOKEN_KEY = 'user-token';

export interface User {
  name: string;
  role: string;
  permissions: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private router: Router) { 
    this.loadUser();
  }

  loadUser() {

    Preferences.get({ key: TOKEN_KEY }).then(res => {
      if(res.value) {
        this.currentUser.next(JSON.parse(res.value));
      }else {
        this.currentUser.next(false)
      }
    });
  }

  signIn(name) {
    let userObj: User;
    //request local
    if(name === 'user'){
      userObj = {
        name: 'Alex test',
        role: 'USER',
        permissions: ['read']
      };
    } else if (name === 'capitan') {
      userObj = {
        name: 'Alex admin',
        role: 'ADMIN',
        permissions: ['read', 'write']
      };
    } else if (name === 'arbitro') {
    userObj = {
      name: 'Alex arbitro',
      role: 'ARBITRO',
      permissions: ['read', 'write']
    };
  }

    return of(userObj).pipe(
      tap(user => {
        Preferences.set({ key: TOKEN_KEY, value: JSON.stringify(user)})
        this.currentUser.next(user);
      })
    );
  }

  getUser() {
    return this.currentUser.asObservable();
  }

  async logout() {
    await Preferences.remove({ key: TOKEN_KEY });
    this.currentUser.next(false);
    this.router.navigateByUrl('/login', {replaceUrl: true});
  }

  hasPermission(permissions: string[]): boolean {
    for (const permission of permissions) {
      if(!this.currentUser.value || !this.currentUser.value.permissions.includes(permission)) {
        return false;
      }
    }
    return true;
  }

}



