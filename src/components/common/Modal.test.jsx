import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

const props = {
    open: true,
    handleClose: jest.fn()
}

it('should render Filter button', () => {
    render(<Modal {...props}/>);
    expect(screen.getByText(/Checkout/i)).toBeInTheDocument();
    expect(screen.getByText(/Congratulations, your order has been placed./g)).toBeInTheDocument();
    fireEvent.click(screen.getByText('OK'));
    expect(props.handleClose).toHaveBeenCalled();
});