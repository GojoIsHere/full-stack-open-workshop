import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("hello");
    //1. get data from backend server
    let fetchingDatabase = axios.get("http://localhost:3001/notes");
    fetchingDatabase.then((database) => {
      console.log("returned promise");
      setResults(database.data);
      console.dir(database.data);
    });

    // console.log(fetchingDatabase);
  }, []);
  console.log("this is : ", results);
  console.log(Array.isArray(results));
  return (
    <div>
      {results.map((val) => (
        <h1 key={val.id}>{val.content}</h1>
      ))}
    </div>
  );
};

export default App;
