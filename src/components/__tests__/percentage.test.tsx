import React from 'react';
import { render } from 'test-utils';
import Percentage from '../Percentage';

describe('Percentage', () => {
    it('should render without crashing', () => {
        const { container } = render(<Percentage hour={0} />);
        expect(container).toBeInTheDocument();
    });
});
