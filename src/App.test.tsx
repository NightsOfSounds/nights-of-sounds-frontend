import { render, screen } from '@testing-library/react';
import { afterAll, afterEach, beforeEach, expect, test, vi } from 'vitest';
import App from './App';

window.scrollTo = () => {};

test('renders website', () => {
  const view = render(<App />);
  expect(view.baseElement.childNodes.length).toBeGreaterThan(0)
});

afterEach(() => {
  vi.resetAllMocks();
});
afterAll(() => {
    vi.clearAllMocks();
});