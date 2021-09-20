import React, { useEffect, useState, Fragment } from "react";
import { Button, ButtonGroup, Jumbotron } from "reactstrap";
import axios from "axios";

import { FormPage } from "./FormPage.jsx";
import { useForm } from "../hooks/index.js";

export const Options = ({ options, setOptions, setSelection, selection }) => {
  const [selected, setSelected] = useState(false);
  const [formFields, setFormFields] = useState([]);

  const updateSelection = (e) => {
    setSelection(e.target.value);
    setOptions([e.target.value]);
    axios
      .get("/form", {
        params: {
          body: selection,
        },
      })
      .then((response) => {
        setFormFields(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <div className={selection ? "button-container" : "button-container-lg"}>
        <ButtonGroup size="lg">
          {options ? (
            options.map((option) => {
              return (
                <Button
                  outline
                  key={`${option}`}
                  color="dark"
                  value={option}
                  onClick={(e) => {
                    updateSelection(e);
                  }}
                >
                  {option}
                </Button>
              );
            })
          ) : (
            <h4>Error retreiving form options</h4>
          )}
        </ButtonGroup>
      </div>
      {formFields.length > 0 ? (
        <FormPage formFields={formFields} formOption={selection} />
      ) : null}
    </Fragment>
  );
};
