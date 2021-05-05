import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DisplayComponent from '../Components/DisplayComponent';

afterEach(cleanup);
test('display render Enter Number initially', () => {
  const component = render(<DisplayComponent />);
  const displayEl = component.getByTestId('display');
  expect(displayEl.textContent).toBe('Enter Number');
});
