import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { Router } from '@angular/router';
import { CommonModule} from '@angular/common';
import { InputText } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule, CommonModule, InputText, ButtonModule, PasswordModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',


})

export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);
  

  formRegister = new FormGroup({
    nome: new FormControl(''),
    dataNascimento: new FormControl(''),
    telefone: new FormControl(''),
    endereco: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
   
   
});

cadastrar() {
    if (this.formRegister.invalid) {
      this.formRegister.markAllAsTouched();
      return;
    }

    this.authService.register(this.formRegister.value).subscribe({
      next: () => {
        alert('Conta criada com sucesso! Faça login.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        if (err === 'EMAIL_EXISTE') {
          alert('Este email já está cadastrado.');
        } else {
          alert('Erro ao criar conta.');
        }
      }
    });
  }

  
  }

    

