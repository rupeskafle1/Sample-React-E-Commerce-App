import Adapter from "enzyme-adapter-react-16";
import Cart from "./Cart";
import { shallow, configure } from "enzyme";

const props = {
  productDetails: {
    originalItems: [
      {
        id: "1",
        brand: "Tokyo Talkies",
        description: "Navy Flower Printed Dress",
        price: 1199,
        discount: 20,
        mrpPrice: 1499,
        gender: "female",
      },
      {
        id: "2",
        brand: "Belle Fille",
        description: "Knee Length Gown",
        price: 1121,
        discount: 30,
        mrpPrice: 1699,
        gender: "female",
      },
    ],
  },
  cartDetails: {
    cartItems: ['2'],
  },
  handleRemoveFromCart: jest.fn(),
};

configure({ adapter: new Adapter() });

it("should render cart", () => {
  const wrapper = shallow(<Cart {...props} />);
  expect(wrapper.text()).toContain("Cart Items");
});

it('should render summary of cart', ()=>{
  const wrapper = shallow(<Cart {...props} />);
  expect(wrapper.text()).toContain("Summary");
  expect(wrapper.text()).toContain("Checkout");
});

it('should display msg when no items in cart', ()=> {
    const modifiedProps = {
        ...props,
        cartDetails: {
            cartItems: []
        }
    }
  const wrapper = shallow(<Cart {...modifiedProps} />);
  expect(wrapper.text()).toContain("No items in cart, start shopping now!");
  expect(wrapper.text()).not.toContain("Summary");
})
