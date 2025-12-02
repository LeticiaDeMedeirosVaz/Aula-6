import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;

  login() {
    this.loggedIn = true;
    sessionStorage.setItem('token','senha');
  }

  logout(){
    this.loggedIn = false;
    sessionStorage.clear();
  }

  estalogado(): boolean{
     return this.loggedIn || !!sessionStorage.getItem ("token");
  }
   
  
}

