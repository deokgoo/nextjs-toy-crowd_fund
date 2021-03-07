import { shallow } from "enzyme";
import App from "./index";

describe("App", () => {
  it("renders without crashing", () => {
    const wrapped = shallow(<App/>);
    expect(wrapped.find('h1').text()).toEqual(expect.stringContaining('Welcome'));
  });
});
