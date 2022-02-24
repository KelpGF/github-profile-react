import { Button } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const textButton = "Search";
const callback = jest.fn();

test('renders a button and click the button', () => {
  render(<Button onClick={ callback }>{ textButton }</Button>);

  const buttonEl = screen.getByRole('button');
  const textEl = screen.getByText(textButton);

  fireEvent.click(buttonEl);

  expect(buttonEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
  expect(callback).toHaveBeenCalledTimes(1);
})
