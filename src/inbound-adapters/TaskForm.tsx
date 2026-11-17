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