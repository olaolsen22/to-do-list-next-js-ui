import type { ToDoCardProps } from '@/types';

export function sortToDoListByDate(
  items: Array<ToDoCardProps>,
): Array<ToDoCardProps> {
  const uncompletedItems = items
    .filter((item) => !item.isCompleted)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const completedItems = items
    .filter((item) => item.isCompleted)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return [...uncompletedItems, ...completedItems];
}
