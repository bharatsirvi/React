import React from 'react';
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading1 = React.createElement("h1", {id:"heading1"},"Hello nam kese ");


const child1 = React.createElement("div",{id:"child1"},heading1);

const parent  = React.createElement("div",{id:"parent"},child1);

console.log(parent);
root.render(parent);
