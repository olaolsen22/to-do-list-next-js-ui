'use client';

import { PlusIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import { createToDoItemAction } from '@/actions';
import Modal from '@/components/_Common/Modal';
import { useServerAction } from '@/hooks/useServerAction';
import type { ToDoItemRow } from '@/types';

import type { EditableToDoItem } from './ToDoCard/AddEditView';
import AddEditView from './ToDoCard/AddEditView';

interface AddToDoItemProps {
  onAddItem: (data: ToDoItemRow) => void;
}

const AddToDoItem = ({ onAddItem }: AddToDoItemProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  const { run: saveItem, isLoading } = useServerAction(createToDoItemAction);

  const handleSave = async (payload: EditableToDoItem) => {
    const res = await saveItem(payload);
    if (res && typeof res === 'object' && 'error' in res) {
      console.error(res.error);
      return;
    } else {
      onAddItem(res);
      modalRef.current?.close();
      router.refresh();
    }
  };

  return (
    <>
      <Modal
        ref={modalRef}
        title="Add new todo item"
        proceedText="Save"
        isLoading={isLoading}
      >
        <AddEditView onSave={handleSave} saving={isLoading} />
      </Modal>
      <div className="absolute right-4 bottom-4">
        <div className="tooltip tooltip-left" data-tip="Add new todo item">
          <button
            onClick={() => modalRef.current?.showModal()}
            className="btn btn-primary btn-circle btn-xl"
          >
            <PlusIcon className={`h-6`} />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddToDoItem;
