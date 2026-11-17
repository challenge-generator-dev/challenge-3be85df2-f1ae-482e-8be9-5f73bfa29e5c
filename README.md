# Desarrollo de un panel de gestión de tareas en React

El sistema debe permitir a los usuarios listar, crear, editar y filtrar tareas. Las tareas se gestionan a través de una API REST que proporciona los servicios necesarios. El panel de tareas debe ser intuitivo y eficiente, asegurando una buena experiencia de usuario.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Panel de gestion de tareas |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 10 horas |

## Stack

- **Lenguaje:** TypeScript
- **Framework:** React 19
- **Version:** Node 20

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Configuración del entorno y listado de tareas

**Objetivo:** Configurar el entorno de desarrollo y mostrar un listado de tareas obtenidas de la API REST.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Configurar el proyecto React.
- Consumir la API REST para obtener y mostrar un listado de tareas.

**Entregable:** Proyecto React configurado con un componente que muestra el listado de tareas.

<details>
<summary>Pistas de conocimiento</summary>

- Uso de fetch o axios para consumir APIs en React.
- Manejo de estados en React para almacenar y mostrar datos.

</details>

### Fase 2: Creación y edición de tareas

**Objetivo:** Implementar funcionalidades para crear y editar tareas, enviando los cambios a la API REST.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Crear un formulario para añadir nuevas tareas.
- Implementar la funcionalidad para editar tareas existentes.

**Entregable:** Componentes para crear y editar tareas, con funcionalidad para enviar los cambios a la API REST.

<details>
<summary>Pistas de conocimiento</summary>

- Uso de formularios controlados en React.
- Manejo de eventos y estados para la creación y edición de tareas.

</details>

### Fase 3: Filtrado de tareas

**Objetivo:** Añadir funcionalidad de filtrado para las tareas, permitiendo a los usuarios buscar tareas por diferentes criterios.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar un componente de filtro que permita buscar tareas por título, descripción o estado.
- Asegurar que el filtrado se realice en el cliente y que los resultados se actualicen en tiempo real.

**Entregable:** Componente de filtro que permite buscar tareas por diferentes criterios y muestra los resultados en tiempo real.

<details>
<summary>Pistas de conocimiento</summary>

- Uso de hooks de React para manejar el estado del filtro.
- Técnicas de filtrado y búsqueda en arrays de JavaScript.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un componente en React y cómo se utiliza para mostrar datos?
- **paraQueSirve**: ¿Para qué sirve el filtrado de tareas y cómo mejora la experiencia del usuario?
- **comoSeUsa**: ¿Cómo se usa fetch o axios para consumir una API REST en React?
- **erroresComunes**: ¿Cuáles son los errores comunes al manejar estados y eventos en React y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación del filtrado de tareas y cómo afectan al rendimiento y la usabilidad?

## Criterios de Evaluacion

- Configuración correcta del entorno de desarrollo y consumo de la API REST.
- Implementación de la funcionalidad para crear y editar tareas.
- Implementación de la funcionalidad de filtrado de tareas.

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Configuración del entorno y listado de tareas | Consumo de API REST con manejo de errores | `src/outbound-adapters/TaskApiClient.ts:TaskApiClient` | El proyecto React está configurado con las dependencias necesarias para consumir una API REST.; Se muestra un listado de tareas obtenidas desde la API REST en un componente React.; El listado maneja errores de conexión o respuesta inválida de la API. | — | — |
| f1 — Configuración del entorno y listado de tareas | Gestión de estado y efectos secundarios con React Hooks | `src/core/useTasks.ts:useTasks` | El proyecto React está configurado con las dependencias necesarias para consumir una API REST.; Se muestra un listado de tareas obtenidas desde la API REST en un componente React.; El listado maneja errores de conexión o respuesta inválida de la API. | — | — |
| f2 — Creación y edición de tareas | Envío de datos a API REST con manejo de errores | `src/outbound-adapters/TaskApiClient.ts:TaskApiClient` | Existen componentes React para crear y editar tareas.; Los cambios se envían correctamente a la API REST.; El listado de tareas se actualiza tras crear o editar una tarea.; Se manejan errores de validación o fallos en la API durante la creación/edición. | — | — |
| f2 — Creación y edición de tareas | Validación de formularios y manejo de estado en componentes React | `src/inbound-adapters/TaskForm.tsx:TaskForm` | Existen componentes React para crear y editar tareas.; Los cambios se envían correctamente a la API REST.; El listado de tareas se actualiza tras crear o editar una tarea.; Se manejan errores de validación o fallos en la API durante la creación/edición. | — | — |
| f3 — Filtrado de tareas | Filtrado de datos con React Hooks y estado derivado | `src/core/useTaskFilter.ts:useTaskFilter` | Existe un componente de filtro que permite buscar tareas por título o estado.; El listado de tareas se actualiza en tiempo real según los criterios de filtrado.; Se manejan casos donde no hay resultados para el filtro aplicado. | — | — |

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
