import { unstable_noStore as noStore } from 'next/cache';

import type { Database } from '@/lib/database.types';
import { supabase } from '@/lib/supabase';
import type { ToDoItems } from '@/lib/types';

// ToDo: add sorting and filter options
export async function getToDoItems(): Promise<ToDoItems[]> {
  noStore();

  const { data, error } = await supabase
    .rpc('get_sorted_to_do_items')
    .returns<Database['public']['Tables']['to_do_items']['Row'][]>();

  if (error) {
    console.error('Database Error: ', error);
    throw new Error('Failed to fetch tasks.');
  }

  return data as ToDoItems[];
}

export async function updateToDoItemDoneStatus(id: number, isDone: boolean) {
  if (!id) return { error: 'ID is required.' };

  const { error } = await supabase
    .from('to_do_items')
    .update({ done: isDone })
    .eq('id', id);

  if (error) {
    console.error('Database Error: ', error);
    return { error: 'Failed to update task.' };
  }
}

// ToDo: create function to get item details by id when clicked
