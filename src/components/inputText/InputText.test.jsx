import { InputText } from './InputText';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const placeHolder = 'Name';

test('renders input text', () => {
  render(<InputText placeHolder={ placeHolder } />);

  const inputEl = screen.getByPlaceholderText(placeHolder);

  expect(inputEl).toBeInTheDocument();
})