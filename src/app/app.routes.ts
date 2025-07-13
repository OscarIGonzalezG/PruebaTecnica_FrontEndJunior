import { Routes } from '@angular/router';
import { TareasComponent } from './pages/tareas/tareas.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

export const routes: Routes = [
    {path: '', component: TareasComponent },
    {path: 'formulario', component: FormularioComponent },
    {path: '**', redirectTo: '' } // Redirige cualquier ruta desconocida a la página principal
];
