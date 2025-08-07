import {
  ChevronDownIcon,
  PencilIcon,
  //   TrashIcon,
} from '@heroicons/react/24/solid';
import React from 'react';

interface Props {
  isExpanded: boolean;
  isEdit: boolean;
  toggleView: (view: 'add' | 'edit' | 'expanded' | null) => void;
}

const ControlPanel = ({ isExpanded, toggleView }: Props) => (
  <div className="join ml-auto gap-3">
    <button
      className="btn btn-circle btn-xs ml-auto"
      onClick={() => toggleView('edit')}
    >
      <PencilIcon className={`h-4`} />
    </button>
    {/* <button className="btn btn-circle btn-xs ml-auto">
      <TrashIcon className={`h-4`} />
    </button> */}
    <button
      className="btn btn-circle btn-xs ml-auto"
      onClick={() => toggleView('expanded')}
    >
      <ChevronDownIcon className={`h-4 ${isExpanded || 'rotate-180'}`} />
    </button>
  </div>
);

export default ControlPanel;
