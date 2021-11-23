import Adapter from "enzyme-adapter-react-16";
import Wishlist from "./Wishlist";
import { shallow, configure } from "enzyme";

const props = {
  productDetails: {
    originalItems: [],
  },
  actionAddToCart: jest.fn(), 
  wishlistDetails: {wishlistedItems: []}, 
  actionMoveToCart: jest.fn(), 
  actionRemoveFromWishlist: jest.fn()
};

configure({ adapter: new Adapter() });

it("should display msg when no items found", () => {
  const wrapper = shallow(<Wishlist {...props} />);
  expect(wrapper.text()).toContain("Nothing in wishlist, go explore the amazing styles!");
});

it("should not display msg when items founds", () => {
    const modifiedProps = {
        ...props,
        productDetails: {
            originalItems: [{
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
              }]
        },
        wishlistDetails: {wishlistedItems: ["1"]}
    }
    const wrapper = shallow(<Wishlist {...modifiedProps} />);
    expect(wrapper.text()).not.toContain("Nothing in wishlist, go explore the amazing styles!");
  });
