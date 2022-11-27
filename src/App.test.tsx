import { render } from '@testing-library/react';
import App from './App';

window.scrollTo = jest.fn();

beforeEach(() => {
  fetchMock.mockReject(new Error("Not mocking for App"))
})

test('renders website', () => {
  const view = render(<App />);
  expect(view.baseElement.childNodes.length).toBeGreaterThan(0)
});

afterEach(() => {
  jest.resetAllMocks();
  fetchMock.resetMocks()
});
afterAll(() => {
  jest.clearAllMocks();
});