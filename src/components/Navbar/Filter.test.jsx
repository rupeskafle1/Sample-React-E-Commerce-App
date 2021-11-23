import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter';

const props = {
    productDetails: {
        products: [{
            id: '1',
            brand: 'Tokyo Talkies',
            description: 'Navy Flower Printed Dress',
            price: 452,
            discount: 20,
            mrpPrice: 1499,
            gender: 'female'
        },
        {
            id: '2',
            brand: 'Belle Fille',
            description: 'Knee Length Gown',
            price: 1121,
            discount: 30,
            mrpPrice: 1699,
            gender: 'female'
        }]
    },
    handleFilterApply: jest.fn()
}

it('should render Filter button', () => {
    render(<Filter {...props}/>);
    expect(screen.getByText(/Filter/i)).toBeInTheDocument();
});

it('should open filter popop when clicked on filter btn', ()=> {
    render(<Filter {...props}/>);
    const filterBtn = screen.getByText(/Filter/i);
    fireEvent.click(filterBtn);
    expect(screen.getByText(/Custom Filter/i)).toBeInTheDocument();
});

it('should filter items', ()=> {
    render(<Filter {...props}/>);
    fireEvent.click(screen.getByText(/Filter/i));
    const femaleCheckbox = screen.getByText('Female');
    fireEvent.click(femaleCheckbox);
    const applyBtn = screen.getByText('Apply');
    fireEvent.click(applyBtn);
    expect(props.handleFilterApply).toHaveBeenCalled();
})