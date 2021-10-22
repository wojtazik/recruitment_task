import React from 'react';
import { render, screen } from '@testing-library/react';
import TestComponent from './index';

describe('Base test', () => {
  test('should return true', () => {
    render(<TestComponent />);

    expect(screen.getByText('aa')).toBeInTheDocument();
  });
});
