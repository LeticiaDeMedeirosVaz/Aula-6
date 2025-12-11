import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/primitives/di';
import { Observable } from 'rxjs';
export interface Tarefa {
  id: string;
  titulo: string;
  data: string;
  concluida: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class Services {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/tarefas';

  listar(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl)
  }

  adicionar(titulo:string): Observable<Tarefa>{
    const novaTarefa = {titulo,concluida: false};
    return this.http.post<Tarefa>(this.apiUrl, novaTarefa);
  }

  remover(id: string): Observable<void>{
    return this.http.delete<void>('${this.apiUrl}/${id}') 
  }
}
