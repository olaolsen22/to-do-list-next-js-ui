import React, { forwardRef, useEffect, type ReactNode } from 'react';

interface ModalProps {
  title: string;
  proceedAction?: () => void;
  cancelAction?: () => void;
  proceedText?: string;
  cancelText?: string;
  children: ReactNode;
  isLoading?: boolean;
  onCloseComplete?: () => void;
}
// ToDo: Fix vertical invisible scrollbar showing when modal opens
const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      title,
      proceedText = 'Ok',
      cancelText = 'Cancel',
      children,
      isLoading = false,
      proceedAction,
      cancelAction,
      onCloseComplete,
    },
    ref,
  ) => {
    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if (isLoading && e.key === 'Escape') {
          e.preventDefault();
          e.stopPropagation();
        }
      };
      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);
    }, [isLoading]);

    useEffect(() => {
      const dialog = ref && 'current' in ref ? ref.current : null;

      if (dialog && onCloseComplete) {
        const handleClose = () => {
          setTimeout(() => {
            onCloseComplete();
          }, 300);
        };

        dialog.addEventListener('close', handleClose);
        return () => dialog.removeEventListener('close', handleClose);
      }
    }, [ref, onCloseComplete]);

    return (
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <h3 className="mb-1 text-lg font-bold">{title}</h3>
          {children}
          <div
            className={`modal-action ${!cancelAction && !proceedAction ? 'mt-0' : ''}`}
          >
            <form method="dialog">
              {cancelAction && (
                <button onClick={cancelAction} className="btn">
                  {cancelText}
                </button>
              )}
              {proceedAction && (
                <button onClick={proceedAction} className="btn">
                  {proceedText}
                </button>
              )}
            </form>
          </div>
        </div>
      </dialog>
    );
  },
);

Modal.displayName = 'Modal';
export default Modal;
