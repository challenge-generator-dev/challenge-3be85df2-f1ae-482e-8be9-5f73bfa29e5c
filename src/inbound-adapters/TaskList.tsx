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