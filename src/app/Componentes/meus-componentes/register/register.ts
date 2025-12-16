import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',


})

export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);
  

  formRegister = new FormGroup({
    nome: new FormControl(''),

    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])

    });

    cadastrar(){
      if(this.formRegister.valid){
        this.authService.Register(this.formRegister.value).subscribe({
          next: () =>  {
            alert('A sua conta foi criada com sucesso!');
          this.router.navigate(['/login']);

          },
          error: () => alert('Erro ao criar conta.')
        })
      }
    }
}
