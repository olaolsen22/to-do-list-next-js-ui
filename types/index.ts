export interface ToDoCardProps {
  id: number;
  title: string;
  date: string;
  isCompleted: boolean;
  onToggle: () => void;
}
