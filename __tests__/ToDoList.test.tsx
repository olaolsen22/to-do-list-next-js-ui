import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { ToDoCardProps } from '@/components/ToDoCard/ToDoCard';

import * as ToDoActions from '../actions';
import ToDoList from '../components/ToDoList';

jest.mock('../actions', () => ({
  ...jest.requireActual('../actions'),
  updateToDoItemDoneStatusAction: jest.fn(),
}));

describe('ToDoList', () => {
  const mockData: Array<ToDoCardProps & { id: number }> = [
    {
      id: 1,
      title: 'To Do Item 1',
      description: '',
      created_at: '2025-08-01T12:00:00.000Z',
      completed_on: null,
      done: false,
      priority: 1,
      onToggle: jest.fn(),
    },
    {
      id: 2,
      title: 'To Do Item 2',
      description: '',
      created_at: '2025-07-30T12:00:00.000Z',
      completed_on: null,
      done: true,
      priority: 1,
      onToggle: jest.fn(),
    },
    {
      id: 3,
      title: 'To Do Item 3',
      description: '',
      created_at: '2025-07-20T12:00:00.000Z',
      completed_on: null,
      done: true,
      priority: 1,
      onToggle: jest.fn(),
    },
  ];

  describe('Rendering', () => {
    it('renders all task titles from the items prop', () => {
      render(<ToDoList items={mockData} />);

      mockData.forEach((item) => {
        expect(screen.getByText(item.title)).toBeInTheDocument();
      });
    });

    it('renders the correct number of to-do cards', () => {
      render(<ToDoList items={mockData} />);
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(mockData.length);
    });
  });

  describe('Interaction', () => {
    it('calls the updateToDoItemDoneStatusAction with the correct id and status when a checkbox is clicked', async () => {
      const user = userEvent.setup();
      render(<ToDoList items={mockData} />);

      const checkboxElement = screen.getByTestId('todo-list-checkbox-1');
      await user.click(checkboxElement);

      // We expect the updateToDoItemDoneStatusAction to be called once with the correct arguments.
      expect(ToDoActions.updateToDoItemDoneStatusAction).toHaveBeenCalledTimes(
        1,
      );
      expect(ToDoActions.updateToDoItemDoneStatusAction).toHaveBeenCalledWith(
        1,
        true,
      );
    });
  });
});
