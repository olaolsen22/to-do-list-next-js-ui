import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { ToDoCardProps } from '@/types';

import ToDoList from '../components/ToDoList';

describe('ToDoList', () => {
  const mockData: Array<ToDoCardProps & { id: number }> = [
    {
      id: 1,
      title: 'To Do Item 1',
      date: '2025-08-01T12:00:00.000Z',
      isCompleted: false,
      priority: 1,
      onToggle: jest.fn(),
    },
    {
      id: 2,
      title: 'To Do Item 2',
      date: '2025-07-30T12:00:00.000Z',
      isCompleted: true,
      priority: 1,
      onToggle: jest.fn(),
    },
    {
      id: 3,
      title: 'To Do Item 3',
      date: '2025-07-20T12:00:00.000Z',
      isCompleted: true,
      priority: 1,
      onToggle: jest.fn(),
    },
  ];

  describe('Rendering', () => {
    it('renders all task titles from the items prop', () => {
      render(<ToDoList items={mockData} onToggle={jest.fn()} />);

      mockData.forEach((item) => {
        expect(screen.getByText(item.title)).toBeInTheDocument();
      });
    });

    it('renders the correct number of to-do cards', () => {
      render(<ToDoList items={mockData} onToggle={jest.fn()} />);
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(mockData.length);
    });
  });

  describe('Interaction', () => {
    it('calls the onToggle function with the correct id when a checkbox is clicked', async () => {
      const user = userEvent.setup();
      const mockOnToggle = jest.fn();
      render(<ToDoList items={mockData} onToggle={mockOnToggle} />);

      const checkboxElement = screen.getByTestId('todo-list-checkbox-1');
      await user.click(checkboxElement);

      expect(mockOnToggle).toHaveBeenCalledTimes(1);
    });
  });
});
