import Adapter from "enzyme-adapter-react-16";
import Header from './header';
import { shallow, configure } from "enzyme";

const props = {
    open: true,
    handleClose: jest.fn()
}

configure({ adapter: new Adapter() });

it("should display msg when no items found", () => {
  const wrapper = shallow(<Header {...props} />);
  expect(wrapper.text()).toContain("E-kart");
  expect(wrapper.text()).toContain("Welcome Guest");
});