import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import TextArea from '@/components/_Common/TextArea';

describe('Field Common Component', () => {
  const mockData = {
    label: 'text area field',
    value: 'text area value',
    placeholder: 'sample placeholder',
    onChange: jest.fn(),
  };

  describe('Rendering', () => {
    it('renders the text area title', () => {
      render(<TextArea {...mockData} />);
      expect(screen.getByText(mockData.label)).toBeInTheDocument();
    });

    it('renders the placeholder', () => {
      render(<TextArea {...mockData} />);
      expect(
        screen.getByPlaceholderText(mockData.placeholder),
      ).toBeInTheDocument();
    });

    it('renders the correct value', () => {
      render(<TextArea {...mockData} />);
      expect(screen.getByDisplayValue(mockData.value)).toBeInTheDocument();
    });

    it('renders disabled field', () => {
      render(<TextArea {...mockData} disabled />);
      expect(screen.getByDisplayValue(mockData.value)).toHaveAttribute(
        'disabled',
      );
    });
  });

  describe('Functionality', () => {
    it('passes the value to the onChange handler', () => {
      render(<TextArea {...mockData} />);
      const input = screen.getByDisplayValue(mockData.value);
      fireEvent.change(input, { target: { value: 'new value' } });
      expect(mockData.onChange).toHaveBeenCalledWith('new value');
    });
  });
});
