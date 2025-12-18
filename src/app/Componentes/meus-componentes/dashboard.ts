import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
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
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.service.listar().subscribe(tarefas => {
      this.todo = tarefas.filter(t => !t.concluida);
      this.done = tarefas.filter(t => t.concluida);
      this.cdr.detectChanges();
    })
    
  }

  drop(event: CdkDragDrop<Tarefa[]>){
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }

    const tarefa = event.previousContainer.data[event.previousIndex];
    const concluida = event.container.id === 'done';

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

    tarefa.concluida = concluida;
    this.service.atualizar(tarefa,concluida).subscribe();
    
  }

  trackById(index: number, item: Tarefa){
    return item.id;
  }
}
