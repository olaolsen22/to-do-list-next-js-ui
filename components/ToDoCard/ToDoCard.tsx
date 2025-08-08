'use client';
import React, { useState } from 'react';

import { formatDate } from '@/lib/date';
import type { ToDoCardProps } from '@/types';

import AddEditView from './AddEditView';
import ControlPanel from './ControlPanel';

const ToDoCard = ({
  id,
  title,
  created_at,
  done,
  description,
  priority,
  onToggle,
}: ToDoCardProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'add' | 'edit' | 'expanded' | null>(
    null,
  );

  const renderPriority = () => {
    if (priority === 3) {
      return <span className="bold text-error text-sm">!!!</span>;
    } else if (priority === 2) {
      return <span className="bold text-warning text-sm">!!</span>;
    }
    return null;
  };

  const viewHandler = (view: 'add' | 'edit' | 'expanded' | null) => {
    setViewMode(view);
    if (view !== viewMode && view !== null && showDetails) {
      setShowDetails(true);
    } else {
      setShowDetails(!showDetails);
    }
  };

  return (
    <div className="card min-w-full bg-white shadow-sm">
      <div className="card-body">
        <div className="flex w-full items-center gap-3">
          <input
            type="checkbox"
            onChange={() => onToggle(id, !done)}
            checked={done ?? false}
            className="checkbox checkbox-primary checkbox-md self-center rounded-full"
            data-testid={`todo-list-checkbox-${id}`}
          />
          <div className="flex flex-col">
            <p
              className={`text-sm font-bold ${done ? 'text-base-content/50 line-through' : ''}`}
            >
              {title} {renderPriority()}
            </p>
            <p className="text-base-content/50 text-[10px] italic">
              {formatDate(created_at)}
            </p>
          </div>
          <ControlPanel
            isExpanded={showDetails}
            isEdit={viewMode === 'edit'}
            toggleView={(view) => viewHandler(view)}
          />
        </div>
        <div
          className={`flex flex-col overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            showDetails ? 'max-h-96' : 'max-h-0'
          }`}
        >
          {viewMode === 'edit' ? (
            <AddEditView
              data={{
                id,
                title,
                created_at,
                done,
                description,
                priority,
              }}
              // eslint-disable-next-line no-console
              onSave={() => console.log('save')}
              saving={false}
            />
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
