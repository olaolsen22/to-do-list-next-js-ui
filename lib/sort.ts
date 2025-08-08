import type { ToDoCardProps } from '@/types';

export function sortToDoListByDate(
  items: Array<ToDoCardProps>,
): Array<ToDoCardProps> {
  return items.toSorted((a, b) => {
    if (a.done !== b.done) {
      return Number(a.done) - Number(b.done);
    }

    if (a.done === false) {
      const dateA = new Date(a.created_at ?? 0).getTime();
      const dateB = new Date(b.created_at ?? 0).getTime();
      return dateB - dateA;
    } else {
      const dateA = new Date(a.completed_on ?? 0).getTime();
      const dateB = new Date(b.completed_on ?? 0).getTime();
      return dateB - dateA;
    }
  });
}
