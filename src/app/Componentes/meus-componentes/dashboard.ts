import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop'
import { Services, Tarefa } from '../../services/lista/services';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit{

  todo: Tarefa [] = [];
  done: Tarefa[] = [];

  private service = inject(Services);

  ngOnInit() {
    this.service.listar().subscribe(tarefas => {
      this.todo = tarefas.filter(t => !t.concluida);
      this.done = tarefas.filter(t => t.concluida);
    })
    
  }

  drop(event: CdkDragDrop<Tarefa[]>){
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }

    const tarefa = event.previousContainer.data[event.previousIndex];
    const concluida = event.container.id === 'done';


  }
}
