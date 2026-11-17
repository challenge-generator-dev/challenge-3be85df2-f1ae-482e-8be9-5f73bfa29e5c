# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/outbound-adapters/TaskApiClient.ts` — La pieza p1 (Consumo de API REST con manejo de errores, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/core/useTasks.ts` — La pieza p2 (Gestión de estado y efectos secundarios con React Hooks, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/inbound-adapters/TaskForm.tsx` — La pieza p4 (Validación de formularios y manejo de estado en componentes React, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/core/useTaskFilter.ts` — La pieza p5 (Filtrado de datos con React Hooks y estado derivado, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Advanced L2

### Brecha de conocimiento
Aplicacion React con listado, creacion, edicion y filtrado de tareas consumiendo una API REST

### Reto
- Tema: Panel de gestion de tareas
- Seniority: advanced-l2
- Tipo: practical
- Título: Desarrollo de un panel de gestión de tareas en React
- Tiempo estimado: 10 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del entorno y listado de tareas — objetivo: Configurar el entorno de desarrollo y mostrar un listado de tareas obtenidas de la API REST. — entregable (NO resolver): Proyecto React configurado con un componente que muestra el listado de tareas.
- Fase 2: Creación y edición de tareas — objetivo: Implementar funcionalidades para crear y editar tareas, enviando los cambios a la API REST. — entregable (NO resolver): Componentes para crear y editar tareas, con funcionalidad para enviar los cambios a la API REST.
- Fase 3: Filtrado de tareas — objetivo: Añadir funcionalidad de filtrado para las tareas, permitiendo a los usuarios buscar tareas por diferentes criterios. — entregable (NO resolver): Componente de filtro que permite buscar tareas por diferentes criterios y muestra los resultados en tiempo real.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// === ARCHIVO: package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build",
    "test": "jest"
  },
  "dependencies": {
    "@tanstack/react-query": "5.108.0",
    "eslint": "8.57.1",
    "jest": "29.7.0",
    "prettier": "3.10.1",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-router-dom": "7.18.5"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: src/models/Task.ts ===
/**
 * Modelo de datos para representar una tarea.
 * Define la estructura y tipos de una tarea en el sistema.
 */
export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate?: string; // ISO 8601 date string
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
}

export const TaskStatus = {
    PENDING: 'pending' as const,
    IN_PROGRESS: 'in-progress' as const,
    COMPLETED: 'completed' as const,
};

export const isValidTaskStatus = (status: string): status is Task['status'] => {
    return Object.values(TaskStatus).includes(status as Task['status']);
};

export const createEmptyTask = (): Omit<Task, 'id' | 'createdAt' | 'updatedAt'> => ({
    title: '',
    description: '',
    status: TaskStatus.PENDING,
});

// === ARCHIVO: src/models/TaskFilter.ts ===
/**
 * Modelo de datos para representar filtros aplicables a tareas.
 * Permite definir criterios de búsqueda y filtrado para las tareas.
 */
export interface TaskFilter {
    title?: string;
    status?: 'pending' | 'in-progress' | 'completed';
    dueDateFrom?: string; // ISO 8601 date string
    dueDateTo?: string; // ISO 8601 date string
}

export const createEmptyFilter = (): TaskFilter => ({
    title: '',
    status: undefined,
    dueDateFrom: undefined,
    dueDateTo: undefined,
});

export const isFilterActive = (filter: TaskFilter): boolean => {
    return (
        (filter.title?.trim().length ?? 0) > 0 ||
        filter.status !== undefined ||
        filter.dueDateFrom !== undefined ||
        filter.dueDateTo !== undefined
    );
};

// === ARCHIVO: src/models/ApiError.ts ===
/**
 * Modelo de datos para representar errores provenientes de la API.
 * Proporciona información estructurada sobre errores en las solicitudes HTTP.
 */
export interface ApiError {
    statusCode: number;
    message: string;
    details?: {
        field?: string;
        issue?: string;
    }[];
    timestamp: string; // ISO 8601 date string
}

export const createApiError = (
    statusCode: number,
    message: string,
    details?: ApiError['details']
): ApiError => ({
    statusCode,
    message,
    details: details || [],
    timestamp: new Date().toISOString(),
});

export const isApiError = (error: unknown): error is ApiError => {
    return (
        typeof error === 'object' &&
        error !== null &&
        'statusCode' in error &&
        'message' in error &&
        'timestamp' in error
    );
};

// === ARCHIVO: src/outbound-adapters/TaskApiClient.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Task } from '../models/Task';
import { ApiError } from '../models/ApiError';

const API_BASE_URL = '/api';

export class TaskApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async fetchTasks(): Promise<Task[]> {
    throw new Error('TODO(reto): fetchTasks');
  }

  async createTask(task: Omit<Task, 'id'>): Promise<Task> {
    throw new Error('TODO(reto): createTask');
  }

  async updateTask(task: Task): Promise<Task> {
    throw new Error('TODO(reto): updateTask');
  }

  private isApiError(error: unknown): error is ApiError {
    throw new Error('TODO(reto): isApiError');
  }
}

export const taskApiClient = new TaskApiClient();

// === ARCHIVO: src/core/useTasks.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useEffect, useCallback } from 'react';
import { Task } from '../models/Task';
import { ApiError } from '../models/ApiError';
import { TaskApiClient } from '../outbound-adapters/TaskApiClient';

interface UseTasksResult {
  tasks: Task[];
  loading: boolean;
  error: ApiError | null;
  refetch: () => Promise<void>;
}

export function useTasks(apiClient: TaskApiClient = new TaskApiClient()): UseTasksResult {
  throw new Error('TODO(reto): useTasks');
}

// === ARCHIVO: src/inbound-adapters/TaskForm.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useEffect, FormEvent } from 'react';
import { Task } from '../models/Task';

interface TaskFormProps {
  task?: Task;
  onSubmit: (task: Omit<Task, 'id'> | Task) => void;
}

interface FormErrors {
  title?: string;
  description?: string;
}

export function TaskForm({ task, onSubmit }: TaskFormProps): JSX.Element {
  throw new Error('TODO(reto): anonymous');
}

// === ARCHIVO: src/core/useTaskFilter.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useMemo } from 'react';
import { Task } from '../models/Task';
import { TaskFilter } from '../models/TaskFilter';

interface UseTaskFilterResult {
  filteredTasks: Task[];
  setFilter: (filter: TaskFilter) => void;
  currentFilter: TaskFilter;
}

export function useTaskFilter(tasks: Task[]): UseTaskFilterResult {
  throw new Error('TODO(reto): useTaskFilter');
}

// === ARCHIVO: src/inbound-adapters/TaskList.tsx ===
import { useTasks } from '../core/useTasks';
import { useTaskFilter } from '../core/useTaskFilter';
import { Task } from '../models/Task';
import { TaskFilter } from '../models/TaskFilter';
import { TaskForm } from './TaskForm';

export function TaskList() {
  const { tasks, loading, error, refetch } = useTasks();
  const { filteredTasks, setFilter, currentFilter } = useTaskFilter(tasks);

  const handleFilterChange = (filter: Partial<TaskFilter>) => {
    setFilter({ ...currentFilter, ...filter });
  };

  const handleCreateTask = (taskData: Omit<Task, 'id'>) => {
    console.log('Creating task:', taskData);
    refetch();
  };

  const handleUpdateTask = (taskData: Task | Omit<Task, 'id'>) => {
    console.log('Updating task:', taskData);
    refetch();
  };

  const handleDeleteTask = async (taskId: string) => {
    console.log('Deleting task:', taskId);
    await refetch();
  };

  if (loading) {
    return (
      <div role="status" aria-label="Cargando tareas">
        <p>Cargando tareas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" aria-label="Error al cargar tareas">
        <p>Error: {error.message}</p>
        <button onClick={() => refetch()}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      <h1>Gestión de Tareas</h1>

      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading">Filtrar Tareas</h2>
        <div className="filter-controls">
          <label htmlFor="filter-title">
            Buscar por título:
            <input
              id="filter-title"
              type="text"
              value={currentFilter.title || ''}
              onChange={(e) => handleFilterChange({ title: e.target.value })}
              placeholder="Escribe para buscar..."
            />
          </label>

          <label htmlFor="filter-status">
            Estado:
            <select
              id="filter-status"
              value={currentFilter.status || ''}
              onChange={(e) => handleFilterChange({ status: e.target.value as TaskFilter['status'] || undefined })}
            >
              <option value="">Todos</option>
              <option value="pending">Pendiente</option>
              <option value="in-progress">En progreso</option>
              <option value="completed">Completada</option>
            </select>
          </label>
        </div>
      </section>

      <section aria-labelledby="create-heading">
        <h2 id="create-heading">Crear Nueva Tarea</h2>
        <TaskForm onSubmit={handleCreateTask} />
      </section>

      <section aria-labelledby="list-heading">
        <h2 id="list-heading">Lista de Tareas</h2>
        {filteredTasks.length === 0 ? (
          <p role="status">No hay tareas que coincidan con los filtros aplicados.</p>
        ) : (
          <ul className="task-list" aria-label="Lista de tareas">
            {filteredTasks.map((task) => (
              <li key={task.id} className="task-item" data-status={task.status}>
                <div className="task-content">
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <span className={`task-status status-${task.status}`}>
                    {task.status === 'pending' && 'Pendiente'}
                    {task.status === 'in-progress' && 'En progreso'}
                    {task.status === 'completed' && 'Completada'}
                  </span>
                </div>
                <div className="task-actions">
                  <button onClick={() => handleUpdateTask(task)} aria-label={`Editar tarea ${task.title}`}>
                    Editar
                  </button>
                  <button onClick={() => handleDeleteTask(task.id)} aria-label={`Eliminar tarea ${task.title}`}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

// === ARCHIVO: src/App.tsx ===
import { Routes, Route } from 'react-router-dom';
import { TaskList } from './inbound-adapters/TaskList';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
    </Routes>
  );
}
```
