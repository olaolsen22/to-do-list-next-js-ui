import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import RadioGroup from '@/components/_Common/RadioGroup';

describe('RadioGroup Common Component', () => {
  const mockData = {
    label: 'test radio',
    selectedValue: '1',
    onChange: jest.fn(),
    disabled: false,
    options: [
      { label: 'Normal', value: 1 },
      { label: 'Medium', value: 2 },
      { label: 'High', value: 3 },
    ],
  };

  describe('Rendering', () => {
    it('renders the task title', () => {
      render(<RadioGroup {...mockData} />);
      expect(screen.getByText(mockData.label)).toBeInTheDocument();
    });

    it('renders the correct amount of radio buttons', () => {
      render(<RadioGroup {...mockData} />);
      const radioButtons = screen.getAllByRole('radio');
      expect(radioButtons).toHaveLength(mockData.options.length);
    });

    it('renders the corrent name for each radio button', () => {
      render(<RadioGroup {...mockData} />);
      mockData.options.forEach((option) => {
        expect(screen.getByText(option.label)).toBeInTheDocument();
      });
    });

    it('renders disabled radio buttons', () => {
      render(<RadioGroup {...mockData} disabled />);
      const radioButtons = screen.getAllByRole('radio');
      radioButtons.forEach((radio) => {
        expect(radio).toHaveAttribute('disabled');
      });
    });
  });
});
