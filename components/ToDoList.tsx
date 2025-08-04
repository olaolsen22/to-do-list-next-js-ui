'use client';
import React, { useState } from 'react';

import { sortToDoListByDate } from '@/lib/sort';
import type { ToDoCardProps } from '@/types';

import ToDoCard from './ToDoCard/ToDoCard';

interface ToDoListProps {
  items: Array<ToDoCardProps>;
  onToggle: (id: number) => void;
}

const ToDoList = ({ items, onToggle }: ToDoListProps) => {
  const [itemList, setItemList] = useState(items);

  const toggleToDoItem = (index: number, id: number) => {
    onToggle(id);
    setItemList(
      sortToDoListByDate(
        itemList.map((todo, i) => {
          if (i === index) {
            return { ...todo, isCompleted: !todo.isCompleted };
          }
          return todo;
        }),
      ),
    );
  };

  return (
    <ul className="to-do-list flex flex-col gap-4">
      {itemList.map((item, index) => (
        <li key={`todo-item-${item}`}>
          <ToDoCard {...item} onToggle={() => toggleToDoItem(index, item.id)} />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
