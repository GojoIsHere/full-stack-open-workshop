import React from "react";

const Myh1 = ({ name, lastName, count }) => {
  const newName = `new Name is ${name}`;

  console.log(name);
  return (
    <h1>
      Hi to TEJ Fellow {newName} {lastName} {count}
    </h1>
  );
  // React.createElement("h1", {}, "This is from REACT H1 Component")
};

export default Myh1;
