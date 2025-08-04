import {
  ChevronDownIcon,
  //   PencilIcon,
  //   TrashIcon,
} from '@heroicons/react/24/solid';
import React from 'react';

interface Props {
  isExpanded: boolean;
  //   isEdit: boolean;
  toggleExpand: (isExpanded: boolean) => void;
}

const ControlPanel = ({ isExpanded, toggleExpand }: Props) => (
  <div className="join ml-auto gap-3">
    <button
      className="btn btn-circle btn-xs ml-auto"
      onClick={() => toggleExpand(!isExpanded)}
    >
      <ChevronDownIcon className={`h-4 ${isExpanded || 'rotate-180'}`} />
    </button>
    {/* <button className="btn btn-circle btn-xs ml-auto">
      <PencilIcon className={`h-4`} />
    </button>
    <button className="btn btn-circle btn-xs ml-auto">
      <TrashIcon className={`h-4`} />
    </button> */}
  </div>
);

export default ControlPanel;
