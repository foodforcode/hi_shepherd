import React, { Fragment, useState } from "react";
import { Alert } from "reactstrap";

export const SubmitMessage = ({ message }) => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  return (
    <div className="message">
      {message === "success" ? (
        <Alert color="success">
          Your form has been successfully submitted!
        </Alert>
      ) : message === "error" ? (
        <Alert color="danger">There was an error submitting your form</Alert>
      ) : null}
    </div>
  );
};
