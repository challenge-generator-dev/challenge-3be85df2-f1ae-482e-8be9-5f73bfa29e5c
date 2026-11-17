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