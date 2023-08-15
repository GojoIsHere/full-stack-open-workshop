import { useState } from "react";
const App = () => {
  const [person, setPerson] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  return (
    <div>
      <div>
        <form>
          <h1>Phonebook</h1>
          <span>Name</span>
          <input type="text" value={newName} onChange={handleChange} />
          <span>Number</span>
          <input type="number"></input>
          <button onClick={handleClick}>Add new</button>
        </form>
      </div>
      <div>
        <h3>Numbers:</h3>
        <span>
          {person.map((val, index) => {
            return <Numbers key={index} names={val.name}></Numbers>;
          })}
        </span>
      </div>
    </div>
  );
};
export default App;
