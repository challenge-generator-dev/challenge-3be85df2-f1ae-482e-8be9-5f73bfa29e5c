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