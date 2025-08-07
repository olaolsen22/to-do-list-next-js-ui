export interface ToDoDataProps {
  title: string;
  date: string;
  isCompleted: boolean;
  description?: string | null;
  priority: 1 | 2 | 3;
}

export interface ToDoCardProps extends ToDoDataProps {
  id: number;
  onToggle: () => void;
}
