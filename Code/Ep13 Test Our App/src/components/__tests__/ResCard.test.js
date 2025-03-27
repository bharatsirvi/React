import { render, screen } from "@testing-library/react"
import RestaurentCard, { withVegLabel } from "../RestaurentCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";
test("should load restaurent card with props",()=>{
    render(<RestaurentCard resData={MOCK_DATA}/>)
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
})

it("should load restaurent card with vegLabel ",()=>{
    const RestaurentCardWithLabel = withVegLabel(RestaurentCard);
    render(<RestaurentCardWithLabel resData={MOCK_DATA}/>)
    const label = screen.getByText('Veg');
    expect(label).toBeInTheDocument();
})