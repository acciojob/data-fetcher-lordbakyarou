import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./../styles/App.css";

const App = () => {
  const [apiFetch, setApiFetch] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/products")
      .then((res) => setApiFetch(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Data Fetched from API</h1>
      {console.log(apiFetch[0] === undefined, apiFetch)}
      {(apiFetch[0] != undefined && (
        <pre>{JSON.stringify(apiFetch, null, 2)}</pre>
      )) ||
        "An error occurred: "}
    </div>
  );
};

export default App;
