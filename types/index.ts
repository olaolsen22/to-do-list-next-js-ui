import type { Tables } from '@/lib/database.types';

type ToDoItemRow = Tables<'to_do_items'>;

export interface ToDoDataProps
  extends Omit<ToDoItemRow, 'id' | 'completed_on'> {
  completed_on?: string | null;
}

export interface ToDoCardProps extends ToDoDataProps {
  id: number;
  onToggle: (id: number, done: boolean) => void;
}
