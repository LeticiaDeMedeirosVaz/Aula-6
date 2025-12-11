import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import {Router} from '@angular/router'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card'
import {PasswordModule} from 'primeng/password'


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, InputTextModule, PasswordModule, ButtonModule, CardModule,],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


Entrar() {
  if (this.formLogin.valid){
    const email = this.formLogin.get('Email')!.value!;
    const senha = this.formLogin.get('senha')!.value!;
    this.authService.login(email,senha).subscribe(sucesso =>{
      if (sucesso){
        this.router.navigate(['/home']);

      }
    });

  }else{
    this.formLogin.markAllAsTouched();
  }
}
}