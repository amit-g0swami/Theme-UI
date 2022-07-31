import React from 'react';
import { render } from 'test-utils';
import Footer from '../Footer';

describe('Header', () => {
    it('should render without crashing', () => {
        const { container } = render(<Footer />);
        expect(container).toBeInTheDocument();
    });
});