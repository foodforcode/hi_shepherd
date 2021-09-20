import React, { Fragment } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export const InputField = ({
  field,
  handleInputChange,
  handleSubmit,
  formStatus,
  inputs,
}) => {
  return (
    <FormGroup>
      <Label key={field.name + " label"}>{field.name}</Label>
      <Input
        type={field.type}
        required={field.required ? true : null}
        name={field.label}
        key={field.name}
        onChange={handleInputChange}
        disabled={formStatus === "success"}
        value={inputs[field.name]}
      />
      <br />
    </FormGroup>
  );
};
