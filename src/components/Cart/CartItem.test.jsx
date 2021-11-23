import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './CartItem';

const props = {
    productDetails: {
        products: [{
            id: '1',
            brand: 'Tokyo Talkies',
            description: 'Navy Flower Printed Dress',
            price: 1199,
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
    cartDetails: {cartItems: []},
    itemDetails: {
        id: '1',
        brand: 'Tokyo Talkies',
        description: 'Navy Flower Printed Dress',
        price: 1199,
        discount: 20,
        mrpPrice: 1499,
        gender: 'female'
    },
    handleRemoveFromCart: jest.fn()
}

it('should render item details in cart', () => {
    render(<Cart {...props}/>);
    const brand = screen.getByText(/Tokyo Talkies/i);
    expect(brand).toBeInTheDocument();
    const description = screen.getByText(/Navy Flower Printed Dress/i);
    expect(description).toBeInTheDocument();
    const price = screen.getByText(/1199 USD/i);
    expect(price).toBeInTheDocument();
});

it('should render delete icon', ()=> {
    render(<Cart {...props}/>);
    const deleteIcon = screen.getByTestId("delete");
    expect(deleteIcon).toBeInTheDocument();
});

it('should be able to delete the icon from cart', ()=> {
    render(<Cart {...props}/>);
    const deleteIcon = screen.getByTestId("delete");
    expect(deleteIcon).toBeInTheDocument();
    fireEvent.click(deleteIcon);
    expect(props.handleRemoveFromCart).toHaveBeenCalled();
});