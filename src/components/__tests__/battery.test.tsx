import React from 'react';
import { render } from 'test-utils';
import Battery from '../Battery';

describe('Header', () => {
  it('should render without crashing', () => {
    const { container } = render(<Battery />);
    expect(container).toBeInTheDocument();
  });
});
