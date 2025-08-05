import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Field from '@/components/_Common/Field';

describe('Field Common Component', () => {
  const mockData = {
    label: 'test field',
    value: 'test value',
    placeholder: 'sample placeholder',
    onChange: jest.fn(),
  };

  describe('Rendering', () => {
    it('renders the field title', () => {
      render(<Field {...mockData} />);
      expect(screen.getByText(mockData.label)).toBeInTheDocument();
    });

    it('renders the placeholder', () => {
      render(<Field {...mockData} />);
      expect(
        screen.getByPlaceholderText(mockData.placeholder),
      ).toBeInTheDocument();
    });

    it('renders the correct value', () => {
      render(<Field {...mockData} />);
      expect(screen.getByDisplayValue(mockData.value)).toBeInTheDocument();
    });

    it('renders disabled field', () => {
      render(<Field {...mockData} disabled />);
      expect(screen.getByDisplayValue(mockData.value)).toHaveAttribute(
        'disabled',
      );
    });
  });

  describe('Functionality', () => {
    it('passes the value to the onChange handler', () => {
      render(<Field {...mockData} />);
      const input = screen.getByDisplayValue(mockData.value);
      fireEvent.change(input, { target: { value: 'new value' } });
      expect(mockData.onChange).toHaveBeenCalledWith('new value');
    });
  });
});
