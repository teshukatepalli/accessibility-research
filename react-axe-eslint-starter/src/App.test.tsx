import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('App Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText(/your app content/i)).toBeInTheDocument();
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});