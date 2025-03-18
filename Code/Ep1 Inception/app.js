const root = ReactDOM.createRoot(document.getElementById("root"));

const heading1 = React.createElement("h1", {id:"heading1"},"Hello bhai kese ho");
const heading2 = React.createElement("h2", {id:"heading2"},"Main thik hu");
const heading3 = React.createElement("h3", {id:"heading3"},"tu kesa hai");

const child1 = React.createElement("div",{id:"child1"},[heading1,heading2,heading3]);
const child2 = React.createElement("div",{id:"child2"},[heading1,heading2,heading3]);

const parent  = React.createElement("div",{id:"parent"},[child1,child2]);

console.log(parent);
root.render(parent);
