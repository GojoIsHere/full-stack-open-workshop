import { useState } from "react";
import App from "./App";

const Display = ({ results }) => {
  return results.map((val) => <h1 key={val.id}>{val.content}</h1>);
};

export default Display;
