import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
const App = () => {
  // hook states
  const [person, setPerson] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    { name: "zzzzz zzzzzz", number: "39-23-231231", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

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
  const handleFilter = (e) => {
    setFilterName(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter handleFilter={handleFilter}></Filter>

      <h3>Add a new</h3>

      <div>
        <PersonForm
          newName={newName}
          newNumber={newNumber}
          handleChange={handleChange}
          handleChangeNum={handleChangeNum}
          handleClick={handleClick}
        ></PersonForm>
      </div>
      <div>
        <h3>Numbers:</h3>
        <Persons person={person} filterName={filterName}></Persons>
      </div>
    </div>
  );
};

export default App;
