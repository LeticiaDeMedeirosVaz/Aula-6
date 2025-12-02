import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-meus-componentes',
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './meus-componentes.html',
  styleUrl: './meus-componentes.scss',
})
export class MeusComponentes {

}
''