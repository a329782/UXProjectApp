import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  // private currentUsuario: BehaviorSubject<any> = new BehaviorSubject(null);
  
  private usuarioName = new BehaviorSubject('Juan');
  currentUsuarioName = this.usuarioName.asObservable();

  private usuarioPaterno = new BehaviorSubject('Pérez');
  currentUsuarioPaterno = this.usuarioPaterno.asObservable();

  private usuarioEmail = new BehaviorSubject('juanp_locote@hotmail.com');
  currentUsuarioEmail = this.usuarioEmail.asObservable();

  private usuarioPhone = new BehaviorSubject(6144998101);
  currentUsuarioPhone = this.usuarioPhone.asObservable();

  private usuarioPassword = new BehaviorSubject('mundoDeCaramelo27');
  currentUsuarioPassword = this.usuarioPassword.asObservable();

  private confirmPassword = new BehaviorSubject('mundoDeCaramelo27');
  currentConfirmPassword = this.confirmPassword.asObservable();


  constructor() {
    // this.loadUsuario();
  }

  changeUsuarioName(name: string){
    this.usuarioName.next(name);
  }

  changeUsuarioPaterno(paterno: string){
    this.usuarioPaterno.next(paterno);
  }

  changeUsuarioEmail(email: string){
    this.usuarioEmail.next(email);
  }

  changeUsuarioPhone(phone: number){
    this.usuarioPhone.next(phone);
  }

  changeUsuarioPassword(password: string){
    this.usuarioPassword.next(password);
  }

  changeConfirmPassword(cPassword: string){
    this.confirmPassword.next(cPassword);
  }

  // loadUsuario(){
  //   this.currentUsuario.next;
  // }

  // updateName(nombre: string){
  //   this.currentUsuario.next(nombre);
  // }

  // getUsuario(){
  //   return this.currentUsuarioName.asObservable();
  // }

}
