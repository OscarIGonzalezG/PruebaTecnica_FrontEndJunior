# Gestor de Tareas – Prueba Técnica Frontend Junior

Aplicación desarrollada como parte de una prueba técnica para el cargo de Desarrollador Frontend Junior. Consiste en una SPA (Single Page Application) construida con Angular, que permite visualizar, agregar y marcar tareas como completadas.

---

## 🧩 Tecnologías utilizadas

- Angular 19
- Tailwind CSS
- localStorage (simulación de persistencia)
- Azure Static Web Apps (para despliegue)

---

## 📸 Funcionalidades

- Vista principal con listado de tareas (obtenidas desde un archivo JSON local)
- Segunda vista para:
  - Agregar una nueva tarea
  - Marcar una tarea como completada
- Separación clara de componentes y lógica
- Estilos básicos y ordenados gracias a Tailwind

---

## 🚀 Demo en línea

🔗 [https://thankful-forest-023685e1e.1.azurestaticapps.net](https://thankful-forest-023685e1e.1.azurestaticapps.net)  
*Reemplazar por la URL real tras el despliegue.*

---

## 📦 Instalación local

1. Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/tareas-angular.git
cd tareas-angular
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
ng serve
```

Accede en `http://localhost:4200`

---

## ⚙️ Build de producción

```bash
ng build
```

El proyecto se compilará en `dist/tarea-app`.

---

## 🧠 Enfoque del desarrollo

- Se simula un backend con un archivo `tareas.json` ubicado en la carpeta `public/`.
- Para persistencia local, se implementó `localStorage`, permitiendo mantener las tareas entre recargas del navegador.
- La lógica de datos está centralizada en un servicio (`TareaService`).
- La aplicación está estructurada por vistas usando rutas:
  - `/`: lista de tareas
  - `/nueva`: agregar nueva tarea y marcar tareas pendientes como completadas.
- Tailwind CSS fue utilizado para mantener una interfaz simple pero clara y ordenada.

---

## 📁 Estructura general

```
tarea-app/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── tareas/             ← Lista principal
│   │   │   ├── formulario/         ← Segunda vista (agregar/completar)
│   │   ├── services/
│   │   │   └── tarea.service.ts    ← Servicio central de tareas
│   ├── public/
│   │   └── tareas.json             ← Datos simulados
```
