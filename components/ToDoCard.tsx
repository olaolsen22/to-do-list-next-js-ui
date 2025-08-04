'use client';
import React from 'react';

import { formatDate } from '@/lib/date';
import type { ToDoCardProps } from '@/types';

const ToDoCard = ({
  id,
  title,
  date,
  isCompleted,
  onToggle,
}: ToDoCardProps) => (
  <div className="card w-96 bg-white shadow-sm">
    <div className="card-body flex flex-row gap-3">
      <input
        type="checkbox"
        onChange={onToggle}
        checked={isCompleted}
        className="checkbox checkbox-primary checkbox-md self-center rounded-full"
        data-testid={`todo-list-checkbox-${id}`}
      />
      <div className="align-center flex flex-col">
        <p
          className={`text-sm font-bold ${isCompleted ? 'text-base-content/50 line-through' : ''}`}
        >
          {title}
        </p>
        <p className="text-base-content/50 text-[10px] italic">
          {formatDate(date)}
        </p>
      </div>
    </div>
  </div>
);

export default ToDoCard;
