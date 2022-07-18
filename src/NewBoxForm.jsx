import { useState } from 'react'
import { useFormik } from 'formik'
import { Box as BoxUI } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import './NewBoxForm.css'

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { bgColor: "", width: "", height: "" }
  const [formData, setFormData] = useState(INITIAL_STATE)

  // send bgColor, width, and height to parent form and clear form

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(fData => ({
      ...fData,
      [id]: value
    })) 
  }

  return (
    <BoxUI 
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="bgColor"
        label="Color"
        variant="outlined"
        value={formData.bgColor}
        onChange={handleChange}
      />
      <TextField
        id="width"
        label="Width"
        variant="outlined"
        value={formData.width}
        onChange={handleChange}
      />
      <TextField
        id="height"
        label="Height"
        variant="outlined"
        value={formData.height}
        onChange={handleChange}
      />

      <Button type="submit">Add new box</Button>
    </BoxUI>
  )
}

export default NewBoxForm;