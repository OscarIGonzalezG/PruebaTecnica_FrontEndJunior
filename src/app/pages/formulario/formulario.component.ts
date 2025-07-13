import { Component, importProvidersFrom } from '@angular/core';
import { TareaService, Tarea } from '../../services/tarea.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  nuevaTarea: Partial<Tarea> = {
    titulo: '',
    descripcion: '',
    estado: 'pendiente'
  };

  constructor(
    private tareaService: TareaService,
    private router: Router 
  ) {}
  
  agregarTarea() {
    const nueva: Tarea = {
      id: Date.now(),
      titulo: this.nuevaTarea.titulo || '',
      descripcion: this.nuevaTarea.descripcion || '',
      estado: this.nuevaTarea.estado as 'pendiente' | 'completada'
    };

    this.tareaService.agregarTarea(nueva);
    this.router.navigate(['/']);
  }
  
  tareasPendientes: Tarea[] = [];
  ngOnInit(): void {
    this.tareasPendientes = this.tareaService.obtenerTareas().filter(t => t.estado === 'pendiente');
  }
  
  marcarComoCompletada(id: number){
    this.tareaService.marcarTareaCompletada(id);
    this.tareasPendientes = this.tareaService.obtenerTareas().filter(t => t.estado === 'pendiente')
  }
}
