import { BrowserRouter } from "react-router";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockAllresData.json";
import { act, render } from "@testing-library/react"; 
import "@testing-library/jest-dom"; 
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should load body component", async () => {
   act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
 
});