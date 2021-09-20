import React, { useState, useEffect } from "react";
import axios from "axios";

import { Options } from "./Options.jsx";

export const App = () => {
  const [options, setOptions] = useState([]);
  const [selection, setSelection] = useState("");

  useEffect(() => {
    axios
      .get("/options")
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <Options
        options={options}
        setOptions={setOptions}
        selection={selection}
        setSelection={setSelection}
      />
    </div>
  );
};
