'use server';

import { updateToDoItemDoneStatus } from '@/lib/data/todo';

export async function updateToDoItemDoneStatusAction(
  id: number,
  done: boolean,
) {
  await updateToDoItemDoneStatus(id, done);
}
