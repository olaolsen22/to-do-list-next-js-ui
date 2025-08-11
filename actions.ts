'use server';

import { createToDoItem, updateToDoItemDoneStatus } from '@/lib/data/todo';

export async function updateToDoItemDoneStatusAction(
  ...args: Parameters<typeof updateToDoItemDoneStatus>
) {
  await updateToDoItemDoneStatus(...args);
}

export async function createToDoItemAction(
  ...args: Parameters<typeof createToDoItem>
) {
  return await createToDoItem(...args);
}
