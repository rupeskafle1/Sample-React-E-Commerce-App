import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Products from "./Products";

configure({ adapter: new Adapter() });
it("should render Products", () => {
    shallow(<Products />)
});
