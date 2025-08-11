import ToDoList from '@/components/ToDoList';
import { getToDoItems } from '@/lib/data/todo';

export default async function Home() {
  const itemList = await getToDoItems();

  return (
    <div className="@container p-6">
      <div className="mt-8">
        <ToDoList items={itemList} />
      </div>
    </div>
  );
}
