import { render, screen, fireEvent } from "@testing-library/react";
import ItemCard from "./ItemCard";

const props = {
  cartDetails: { cartItems: [] },
  itemDetails: {
    id: 1,
    brand: "Tokyo Talkies",
    description: "Navy Flower Printed Dress",
    price: 1199,
    discount: 20,
    mrpPrice: 1499,
    gender: "female",
  },
  handleCartData: jest.fn(),
  onItemWishlist: jest.fn(),
  wishlistedDetails: { wishlistedItems: [] },
  actionRemoveFromWishlist: jest.fn(),
  actionMoveToCart: null,
};

it("should render item details", () => {
  render(<ItemCard {...props} />);
  const brand = screen.getByText(/Tokyo Talkies/i);
  expect(brand).toBeInTheDocument();
  const description = screen.getByText(/Navy Flower Printed Dress/i);
  expect(description).toBeInTheDocument();
  const price = screen.getByText(/1199 USD/i);
  expect(price).toBeInTheDocument();
});

it("should render add to cart btn and click it", () => {
  render(<ItemCard {...props} />);
  const addToCartBtn = screen.getByText("Add to Cart");
  expect(addToCartBtn).toBeInTheDocument();
  fireEvent.click(addToCartBtn);
  expect(props.handleCartData).toHaveBeenCalled();
});

it("should render added to cart btn when item is already in cart", () => {
  const modifiedProps = {
    ...props,
    cartDetails: {
      cartItems: [1],
    },
  };
  render(<ItemCard {...modifiedProps} />);
  const addedToCartBtn = screen.getByText("Added to Cart");
  expect(addedToCartBtn).toBeInTheDocument();
  const addToCartBtn = screen.queryByText("Add to Cart");
  expect(addToCartBtn).not.toBeInTheDocument();
});

it("should render wishlist btn and click it", () => {
  render(<ItemCard {...props} />);
  const wishlisttBtn = screen.getByTestId("wishlist-btn");
  expect(wishlisttBtn).toBeInTheDocument();
  fireEvent.click(wishlisttBtn);
  expect(props.onItemWishlist).toHaveBeenCalled();
});

it("should show remove from wishlist button when already wishlisted", () => {
  const modifiedProps = {
    ...props,
    wishlistedDetails: {
      wishlistedItems: [1],
    },
  };
  render(<ItemCard {...modifiedProps} />);
  expect(screen.queryByTestId("wishlist-btn")).not.toBeInTheDocument();
  const wishlisttBtn = screen.getByTestId("remove-from-wishlist");
  expect(wishlisttBtn).toBeInTheDocument();
  fireEvent.click(wishlisttBtn);
  expect(props.actionRemoveFromWishlist).toHaveBeenCalled();
});
