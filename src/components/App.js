import React, { useState } from "react";
import Axios from "axios";
import "./../styles/App.css";

const App = () => {
  const [apiFetch, setApiFetch] = useState([]);

  Axios.get("https://dummyjson.com/products")
    .then((res) => setApiFetch(res.data))
    .catch((err) => setApiFetch(err));

  return (
    <div>
      <h1>Data Fetched from API</h1>
      {console.log(apiFetch)}
      {(apiFetch && <pre>{JSON.stringify(apiFetch, null, 2)}</pre>) || (
        <pre>Loading...</pre>
      )}
    </div>
  );
};

export default App;
