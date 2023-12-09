let SayHello = (props) => {
  return React.createElement("h1", { id: "myId" }, `Hello ${props.firstName}`);
};
let App = () => {
  return React.createElement("div", {}, [
    React.createElement(SayHello, { firstName: "Rushil" }),
    React.createElement(SayHello, { firstName: "Sushil" }),
    React.createElement(SayHello, { firstName: "Liza" }),
  ]);
};

let container = document.getElementById("root");
let root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
