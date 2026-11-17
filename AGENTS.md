# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Desarrollo de un panel de gestión de tareas en React**.

| | |
|---|---|
| Tema | Panel de gestion de tareas |
| Nivel | advanced-l2 |
| Chapter | Frontend |
| Especialidad | React |
| Stack | TypeScript / React 19 |
| Patron arquitectonico | capas estándar (presentación, lógica, datos) |
| Tiempo estimado | 10 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, vite.config.ts y tsconfig.json en la raiz`
- `src/main.tsx como entry point`
- `src/app con el arbol de rutas`
- `src/features con componentes contenedores y sus hooks`
- `src/shared con componentes presentacionales`
- `src/services con los clientes HTTP`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET. `@types/react-router-dom` ya no se publica para v6+, React Router trae sus tipos.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.

Dependencias:

- eslint 8.57.1
- jest 29.7.0
- prettier 3.10.1
- react 18.3.1
- react-dom 18.3.1
- @types/react 18.3.31
- @types/react-dom 18.3.7
- @vitejs/plugin-react 4.7.0
- typescript 5.7.3
- vite 5.4.21

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install --no-audit --no-fund && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Configuración del entorno y listado de tareas**: Proyecto React configurado con un componente que muestra el listado de tareas.
- **Fase 2 — Creación y edición de tareas**: Componentes para crear y editar tareas, con funcionalidad para enviar los cambios a la API REST.
- **Fase 3 — Filtrado de tareas**: Componente de filtro que permite buscar tareas por diferentes criterios y muestra los resultados en tiempo real.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/outbound-adapters/TaskApiClient.ts` — La pieza p1 (Consumo de API REST con manejo de errores, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/core/useTasks.ts` — La pieza p2 (Gestión de estado y efectos secundarios con React Hooks, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/inbound-adapters/TaskForm.tsx` — La pieza p4 (Validación de formularios y manejo de estado en componentes React, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/core/useTaskFilter.ts` — La pieza p5 (Filtrado de datos con React Hooks y estado derivado, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Configuración del entorno y listado de tareas | Consumo de API REST con manejo de errores | `src/outbound-adapters/TaskApiClient.ts:TaskApiClient` | El proyecto React está configurado con las dependencias necesarias para consumir una API REST.; Se muestra un listado de tareas obtenidas desde la API REST en un componente React.; El listado maneja errores de conexión o respuesta inválida de la API. | — | — |
| f1 — Configuración del entorno y listado de tareas | Gestión de estado y efectos secundarios con React Hooks | `src/core/useTasks.ts:useTasks` | El proyecto React está configurado con las dependencias necesarias para consumir una API REST.; Se muestra un listado de tareas obtenidas desde la API REST en un componente React.; El listado maneja errores de conexión o respuesta inválida de la API. | — | — |
| f2 — Creación y edición de tareas | Envío de datos a API REST con manejo de errores | `src/outbound-adapters/TaskApiClient.ts:TaskApiClient` | Existen componentes React para crear y editar tareas.; Los cambios se envían correctamente a la API REST.; El listado de tareas se actualiza tras crear o editar una tarea.; Se manejan errores de validación o fallos en la API durante la creación/edición. | — | — |
| f2 — Creación y edición de tareas | Validación de formularios y manejo de estado en componentes React | `src/inbound-adapters/TaskForm.tsx:TaskForm` | Existen componentes React para crear y editar tareas.; Los cambios se envían correctamente a la API REST.; El listado de tareas se actualiza tras crear o editar una tarea.; Se manejan errores de validación o fallos en la API durante la creación/edición. | — | — |
| f3 — Filtrado de tareas | Filtrado de datos con React Hooks y estado derivado | `src/core/useTaskFilter.ts:useTaskFilter` | Existe un componente de filtro que permite buscar tareas por título o estado.; El listado de tareas se actualiza en tiempo real según los criterios de filtrado.; Se manejan casos donde no hay resultados para el filtro aplicado. | — | — |

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (15)

- `src/main.tsx`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `index.html`
- `src/vite-env.d.ts`
- `src/models/Task.ts`
- `src/models/TaskFilter.ts`
- `src/models/ApiError.ts`
- `src/outbound-adapters/TaskApiClient.ts`
- `src/core/useTasks.ts`
- `src/inbound-adapters/TaskForm.tsx`
- `src/core/useTaskFilter.ts`
- `src/inbound-adapters/TaskList.tsx`
- `src/App.tsx`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/core` (presente)
- `src/inbound-adapters` (presente)
- `src/outbound-adapters` (presente)
- `src/models` (presente)
- `src/utils` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar (presentación, lógica, datos)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología React, Advanced L2
- Brecha que el reto ataca: Aplicacion React con listado, creacion, edicion y filtrado de tareas consumiendo una API REST

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
