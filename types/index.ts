export interface ToDoCardProps {
  id: number;
  title: string;
  date: string;
  isCompleted: boolean;
  description?: string | null;
  priority: 1 | 2 | 3;
  tags?: Array<string> | null;
  onToggle: () => void;
}
