import { useState } from "react";
const App = () => {
  // hook states
  const [person, setPerson] = useState([
    { name: "Arto Hellas", number: 9800000000 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFileter] = useState("");

  // function for name input field
  const handleChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  // function for number input field
  const handleChangeNum = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  };

  // function for add buttion
  const handleClick = (e) => {
    e.preventDefault();
    let a = {};
    a.name = newName;
    a.number = newNumber;
    let exists;
    person.map((val) => {
      if (val.name === a.name || val.number === a.number) {
        return (exists = true);
      }
    });
    if (exists) {
      alert(`${a.name} or ${a.number}is already added to phonebook `);
    } else setPerson(person.concat(a));
  };

  // Number component
  const Numbers = ({ names, number }) => {
    return (
      <div>
        {names} {number}
      </div>
    );
  };

  // function for filter
  const handleFilter = (e) => {
    setFileter(e.target.value);
    person.name.toLowerCase().includes(filter.toLowerCase());
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <span>Filter showen with :</span>
        <input type="text" value={filter} onChange={handleFilter} />
      </div>
      <div>
        <form>
          <span>Name</span>
          <input type="text" value={newName} onChange={handleChange} />
          <span>Number</span>
          <input
            type="number"
            value={newNumber}
            onChange={handleChangeNum}
          ></input>
          <button onClick={handleClick}>Add new</button>
        </form>
      </div>
      <div>
        <h3>Numbers:</h3>
        <span>
          {person.map((val, index) => {
            return (
              <Numbers
                key={index}
                names={val.name}
                number={val.number}
              ></Numbers>
            );
          })}
        </span>
      </div>
    </div>
  );
};
export default App;
