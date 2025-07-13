import { Component, OnInit } from '@angular/core';
import { TareaService, Tarea } from '../../services/tarea.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tareas',
  imports: [CommonModule, RouterModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit{

  tareas: Tarea[] = [];
  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.tareaService.cargarTareas().subscribe(data => {
      this.tareas = data;
    });
  }

}
