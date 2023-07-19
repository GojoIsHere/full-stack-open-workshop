let SayHello = (props) => {
  console.log(props);
  //   return React.createElement("h1", { id: "myId" }, `Hello ${props.firstName}`);
  return <h1 id="myID">Hello {props.firstName}</h1>;
};

let App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement(SayHello, { firstName: "Rushil" }),
  //     React.createElement(SayHello, { firstName: "Sushil" }),
  //     React.createElement(SayHello, { firstName: "Liza" }),
  //   ]);
  return (
    <div>
      <SayHello firstName="Rushil" />
      <SayHello firstName="Sushil" />
      <SayHello firstName="Liza" />
    </div>
  );
};

export default App;
