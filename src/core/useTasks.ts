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