import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ToDoCard from '@/components/ToDoCard/ToDoCard';

describe('To Do Card', () => {
  const mockData = {
    id: 1,
    title: 'Write test cases for component',
    date: '2025-08-01T12:00:00.000Z',
    priority: 1 as 1 | 2 | 3,
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

    it('renders description', () => {
      render(<ToDoCard {...mockData} description="description sample" />);
      expect(screen.getByText('description sample')).toBeInTheDocument();
    });

    it('renders high priority', () => {
      render(<ToDoCard {...mockData} priority={3} />);
      expect(screen.getByText('!!!')).toBeInTheDocument();
    });

    it('renders normal priority', () => {
      render(<ToDoCard {...mockData} priority={2} />);
      expect(screen.getByText('!!')).toBeInTheDocument();
    });

    it('renders low priority properly', () => {
      render(<ToDoCard {...mockData} priority={1} />);
      expect(screen.queryByText('!!')).not.toBeInTheDocument();
      expect(screen.queryByText('!!!')).not.toBeInTheDocument();
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

    it('switches to edit mode and shows the correct input fields', async () => {
      const user = userEvent.setup();
      render(<ToDoCard {...mockData} />);

      const editButton = screen.getAllByRole('button')[0];
      await user.click(editButton);

      expect(
        screen.getByRole('textbox', { name: 'Title' }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole('textbox', { name: 'Description' }),
      ).toBeInTheDocument();

      expect(screen.getByRole('radio', { name: 'Normal' })).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: 'Medium' })).toBeInTheDocument();
      expect(screen.getByRole('radio', { name: 'High' })).toBeInTheDocument();
    });
  });
});
