import App from "./App";

jest.mock("axios", () => {
    return {
      __esModule: true
    }});
  

it("renders without crashing", () => {
    <App />
});
