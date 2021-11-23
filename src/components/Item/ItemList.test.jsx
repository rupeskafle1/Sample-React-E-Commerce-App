import Adapter from "enzyme-adapter-react-16";
import ItemList from "./ItemList";
import { shallow, configure } from "enzyme";

const props = {
  productDetails: {
    products: [],
  }
};

configure({ adapter: new Adapter() });

it("should display msg when no items found", () => {
  const wrapper = shallow(<ItemList {...props} />);
  expect(wrapper.text()).toContain("No results found");
});

it("should not display msg when items founds", () => {
    const modifiedProps = {
        ...props,
        productDetails: {
            products: [{
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
        }
    }
    const wrapper = shallow(<ItemList {...modifiedProps} />);
    expect(wrapper.text()).not.toContain("No results found");
  });
