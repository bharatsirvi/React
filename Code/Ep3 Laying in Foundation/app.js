import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", {id:"heading1"},"Heading");

// React Element
const bottomElement = (
  <h1 className="head" id="heading">
    bottom Element
  </h1>
);

//React Functional Component
const TitleComponent = () => (
  <div>
    <h1 className="title" id="title">
      Title Component
    </h1>
  </div>
);

const number = 1000;
const HeadingComponent = () => (
  <div>
    <h1>{number * 9}</h1>
    <TitleComponent />
    <h1 className="head" id="heading">
      Heading Component
    </h1>
    {bottomElement}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(<HeadingComponent />);

root.render(<HeadingComponent />);
