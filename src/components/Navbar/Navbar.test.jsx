import Adapter from "enzyme-adapter-react-16";
import Navbar from "./Navbar";
import { shallow, configure } from "enzyme";

const props = {
  productDetails: {
    products: [
      {
        id: 1,
        brand: "Tokyo Talkies",
        description: "Navy Flower Printed Dress",
        price: 1199,
        discount: 20,
        mrpPrice: 1499,
        gender: "female",
      },
    ],
  },
  cartDetails: {
    cartItems: ["2"],
  },
  wishlistDetails: {
    wishlistedItems: []
  }
};

configure({ adapter: new Adapter() });
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/products",
  }),
}));

it("should render Navbar with links to Filter, Wishlist and Cart", () => {
  const wrapper = shallow(<Navbar {...props} />);
  expect(wrapper.text()).toContain("Filter");
  expect(wrapper.text()).toContain("Wishlist");
  expect(wrapper.text()).toContain("Cart");
});
