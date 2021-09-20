import React, { Fragment, useState, useEffect } from "react";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import axios from "axios";

import { useForm } from "../hooks/index.js";
import { InputField } from "./InputField.jsx";
import { SubmitMessage } from "./SubmitMessage.jsx";

export const FormPage = ({ formFields, formOption }) => {
  const [formInputs, setFormInputs] = useState([]);
  const [formStatus, setFormStatus] = useState("false");
  const submitForm = () => {
    axios
      .post("/form", {
        params: {
          inputs: inputs,
          formOption: formOption,
        },
      })
      .then((response) => {
        setFormStatus("success");
      })
      .catch((error) => {
        setFormStatus("error");
      });
  };
  const { inputs, handleInputChange, handleSubmit } = useForm(submitForm);

  useEffect(() => {
    setFormInputs(formFields);
    window.scrollTo(0, 0);
  }, [formFields, formStatus]);

  return (
    <Fragment>
      <Button
        color="warning"
        outline
        onClick={() => location.reload()}
        value="Back"
      >
        {formStatus === "success" ? "Submit Another" : "Start Over"}
      </Button>
      <SubmitMessage message={formStatus} />
      {formInputs.length > 0 ? (
        <Form className="form-container" onSubmit={handleSubmit}>
          {formInputs.map((field) => {
            return (
              <InputField
                key={field.name + "input"}
                field={field}
                handleInputChange={handleInputChange}
                formStatus={formStatus}
                inputs={inputs}
                name={field.label}
              />
            );
          })}
          <Button
            type="submit"
            value="Submit"
            disabled={formStatus === "success"}
            color="warning"
          >
            Submit
          </Button>
        </Form>
      ) : null}
    </Fragment>
  );
};
