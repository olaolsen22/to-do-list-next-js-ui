import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ToDoCard from '../components/ToDoCard';

describe('To Do Card', () => {
  const mockData = {
    id: 1,
    title: 'Write test cases for component',
    date: '2025-08-01T12:00:00.000Z',
    isCompleted: false,
    onToggle: jest.fn(),
  };

  describe('Rendering', () => {
    it('renders the task title', () => {
      render(<ToDoCard {...mockData} />);
      expect(screen.getByText(mockData.title)).toBeInTheDocument();
    });

    it('renders the formatted task date from a UTC string', () => {
      render(<ToDoCard {...mockData} />);
      const expectedDate = new Date(mockData.date).toLocaleDateString('nb-NO', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      expect(screen.getByText(expectedDate)).toBeInTheDocument();
    });

    it('renders a checkbox', () => {
      render(<ToDoCard {...mockData} />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('calls the onToggle function when the checkbox is clicked', async () => {
      const mockOnToggle = jest.fn();

      const user = userEvent.setup();

      render(<ToDoCard {...mockData} onToggle={mockOnToggle} />);

      const checkboxElement = screen.getByRole('checkbox');
      await user.click(checkboxElement);

      expect(mockOnToggle).toHaveBeenCalledTimes(1);
    });

    it('renders an unchecked checkbox when isCompleted is false', () => {
      render(<ToDoCard {...mockData} isCompleted={false} />);

      const checkboxElement = screen.getByRole('checkbox');

      expect(checkboxElement).not.toBeChecked();
    });

    it('renders a checked checkbox when isCompleted is true', () => {
      render(<ToDoCard {...mockData} isCompleted={true} />);

      const checkboxElement = screen.getByRole('checkbox');

      expect(checkboxElement).toBeChecked();
    });
  });
});
