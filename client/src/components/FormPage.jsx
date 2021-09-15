import React, { Fragment } from 'react';
import { Form, Label } from 'reactstrap';

export const FormPage = ({ formData }) => {
  // const [fieldId, setfieldId] = setState(0);

  return (
    <Fragment>
      {formData.length > 0 ? (
        <Form>
        {formData.map(field => {
          return (
            <Fragment key={field.name + " fragment"}>
            <Label key={field.name + " label"}>
              {field.name}
            </Label>
            <input type={field.type} required={field.required ? "true" : (null)} name={field.name} key={field.name} />
            <br />
          </Fragment>
        );
      })
    }
      <input type="submit" onClick={e => {e.preventDefault()}}/>
      </Form>
      ) : (null)}
      </Fragment>
  )
}