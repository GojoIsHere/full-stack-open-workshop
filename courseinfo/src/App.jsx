import { useEffect, useState } from "react";
import axios from "axios";
import Display from "./Display";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("hello");
    //1. get data from backend server
    let fetchingDatabase = axios.get("http://localhost:3001/notes");
    fetchingDatabase.then((database) => {
      console.log("returned promise");
      // Assigning the data to results
      setResults(database.data);
      console.dir(database.data);
    });
    // console.log(fetchingDatabase);
  }, []);

  // console.log("this is : ", results);
  // console.log(Array.isArray(results));

  return (
    <div>
      <Display results={results} />
    </div>
  );
};

export default App;
