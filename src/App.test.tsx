import { render } from '@testing-library/react';
import App from './App';

window.scrollTo = jest.fn();

test('renders learn react link', () => {
  const app = render(<App />);
  expect(app.baseElement.childNodes.length).toBeGreaterThan(0)
});

afterEach(() => {
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});