import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import axios from 'axios';
import { FormPage } from './FormPage.jsx';

export const Options = () => {
  const [options, setOptions] = useState([]);
  const [selection, setSelection] = useState('');
  const [formData, setFormData] = useState([])

  const updateSelection = (e) => {
    setSelection(e.target.value);
    axios.get('form', {
      params: {
        body: e.target.value
      }
    })
    .then(response => {
      setFormData(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const getOptions = () => {
    axios.get('options')
      .then(response => {
        setOptions(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(
    getOptions
    , [])

  return (
    <div className="options">
      <ButtonGroup size="lg">
      {options ? (options.map(option => {
        return (
          <Button outline key={`${option}`} color="primary" value={option} onClick={(e) => {updateSelection(e)}}>{option}</Button>
        )
      })
      ) : (null)}
      </ButtonGroup>
      {formData ? (
        <FormPage formData={formData}/>
        ) : (null)
      }
    </div>
  )
}