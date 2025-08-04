'use client';
import React, { useState } from 'react';

import { formatDate } from '@/lib/date';
import type { ToDoCardProps } from '@/types';

import ControlPanel from './ControlPanel';
import Tags from './Tags';

const ToDoCard = ({
  id,
  title,
  date,
  isCompleted,
  description,
  priority,
  tags,
  onToggle,
}: ToDoCardProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const renderPriority = () => {
    if (priority === 3) {
      return <span className="bold text-error text-sm">!!!</span>;
    } else if (priority === 2) {
      return <span className="bold text-warning text-sm">!!</span>;
    }
    return null;
  };

  return (
    <div className="card min-w-full bg-white shadow-sm">
      <div className="card-body">
        <div className="flex w-full items-center gap-3">
          <input
            type="checkbox"
            onChange={onToggle}
            checked={isCompleted}
            className="checkbox checkbox-primary checkbox-md self-center rounded-full"
            data-testid={`todo-list-checkbox-${id}`}
          />
          <div className="flex flex-col">
            <p
              className={`text-sm font-bold ${isCompleted ? 'text-base-content/50 line-through' : ''}`}
            >
              {title} {renderPriority()}
            </p>
            <p className="text-base-content/50 text-[10px] italic">
              {formatDate(date)}
            </p>
          </div>
          <ControlPanel
            isExpanded={showDetails}
            toggleExpand={(e) => setShowDetails(e)}
          />
        </div>
        <div
          className={`flex flex-col overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            showDetails ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <p>{description}</p>
          {tags && <Tags tags={tags} />}
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
