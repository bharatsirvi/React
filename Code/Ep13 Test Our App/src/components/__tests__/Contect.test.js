import { render, screen } from "@testing-library/react";
import Contact from "../Contect";
import "@testing-library/jest-dom";


describe("should all working ",()=>{
    test("should load contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
      });
      
      test("should load buttom inside contact us component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
      });
      
      test("should load input name inside contact us component", () => {
        render(<Contact />);
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
      });
      
      test("should load all input inside contact us component", () => {
        render(<Contact />);
        const inputs = screen.getAllByRole("textbox");
        inputs.map((input)=>{ 
          expect(input).toBeInTheDocument();
        })
      });
})

