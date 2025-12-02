import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';



export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.estalogado()){
    return true;
  } else {
    alert("Acesso negado! Faça login primeiro.");
    router.navigate(['/login']);
    return false;
  }

};
