import SayHello from "./SayHello";

let App = () => {
  let peopleArray = [
    // { firstName: "Akash", lastName: "Sunar", id: 201 },
    // { firstName: "Sushil", lastName: "Thanet", id: 301 },
    // { firstName: "Hemlal", lastName: "Dulal", id: 401 },
  ];
  return (
    <div>
      {peopleArray.length > 0 ? (
        peopleArray
          .filter((person) => person.id > 250)
          .map((value) => <SayHello person={value} key={value.id} />)
      ) : (
        <h1>No records found</h1>
      )}
    </div>
  );
};

export default App;
