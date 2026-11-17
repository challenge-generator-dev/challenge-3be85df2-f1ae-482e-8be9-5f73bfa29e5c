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