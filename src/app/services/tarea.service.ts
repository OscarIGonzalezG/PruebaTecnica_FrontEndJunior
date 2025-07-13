import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of, Observable } from 'rxjs';

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  estado: 'pendiente' | 'completada';
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private tareas: Tarea[] = [];
  private storageKey = 'mis-tareas';

  constructor(private http: HttpClient) { }

  //cargar tareas desde localStorage o JSON local
  cargarTareas(): Observable<Tarea[]> {
    const guardadas = localStorage.getItem(this.storageKey);

    if (guardadas){
      this.tareas = JSON.parse(guardadas)
      return of(this.tareas)
    }
    else{
      return this.http.get<Tarea[]>('/tareas.json').pipe(
        map(data => {
          this.tareas = data;
          return data;
        })
      );
    }
  }

  obtenerTareas(): Tarea[] {
    return this.tareas;
  }
  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    this.guardarEnLocalStorage();
  }

  marcarTareaCompletada(id: number) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.estado = 'completada';
    }
  }

  private guardarEnLocalStorage(){
    localStorage.setItem(this.storageKey, JSON.stringify(this.tareas));
  }

}
