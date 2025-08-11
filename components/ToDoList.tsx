'use client';
import { useState } from 'react';

import { updateToDoItemDoneStatusAction } from '@/actions';
import AddToDoItem from '@/components/AddToDoItem';
import { sortToDoListByDate } from '@/lib/sort';
import type { ToDoItemRow } from '@/types/index.ts';

import ToDoCard from './ToDoCard/ToDoCard';

interface ToDoListProps {
  items: ToDoItemRow[];
}

const ToDoList = ({ items }: ToDoListProps) => {
  const [itemsState, setItemsState] = useState<ToDoItemRow[]>(items);

  // ToDo: use css/js magic instead of actually modifying state. Use nextjs to its full advantage
  const toggleToDoItem = (id: number) => {
    const currentTodo = itemsState.find((item) => item.id === id);
    if (!currentTodo) {
      return;
    }
    updateToDoItemDoneStatusAction(id, !currentTodo.done);
    setItemsState((prevState) =>
      sortToDoListByDate(
        prevState.map((todo) => {
          if (todo.id === id) {
            const newDoneStatus = !todo.done;
            const newCompletedOn = newDoneStatus
              ? new Date().toISOString()
              : null;

            return {
              ...todo,
              done: newDoneStatus,
              completed_on: newCompletedOn,
            };
          }
          return todo;
        }),
      ),
    );
  };

  const addItem = (item: ToDoItemRow) => {
    setItemsState((prevItems) => [item, ...prevItems]);
  };

  return (
    <>
      <ul className="to-do-list flex flex-col gap-4">
        {itemsState.map((item, index) => (
          <li key={`todo-item-${index}`}>
            <ToDoCard {...item} onToggle={toggleToDoItem} />
          </li>
        ))}
      </ul>
      <AddToDoItem onAddItem={addItem} />
    </>
  );
};
export default ToDoList;
