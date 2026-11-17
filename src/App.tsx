import { Routes, Route } from 'react-router-dom';
import { TaskList } from './inbound-adapters/TaskList';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
    </Routes>
  );
}