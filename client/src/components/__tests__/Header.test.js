import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the header component', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header-1');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the initial text', () => {
    render(<Header />);
    const initialTextElement = screen.getByTestId('header-2');
    expect(initialTextElement).toHaveTextContent('');
  });


});