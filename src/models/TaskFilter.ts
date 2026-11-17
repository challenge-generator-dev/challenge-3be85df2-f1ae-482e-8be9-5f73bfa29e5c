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