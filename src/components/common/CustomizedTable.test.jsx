import { render, screen } from '@testing-library/react';
import Cart from './CustomizedTable';

it('should render table woth rows', () => {
    const rows = [{
        name: 'Total Price',
        value: '1001'
    }]
    render(<Cart rows={rows}/>);
    expect(screen.getByText('Total Price')).toBeInTheDocument();
    expect(screen.getByText('1001')).toBeInTheDocument();
});
