import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { Box as BoxUI } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import './NewBoxForm.css'
import colors from './assets/colors.json'

// set up form validation
const validationSchema = yup.object({
  bgColor: yup
    .string('Choose a color.')
    .required('Required'),
  width: yup
    .number('Width')
    .min(1, 'Box must be at least 1px wide.')
    .max(1000, 'Box must be smaller than 1000px.')
    .required('Width required'),
  height: yup
    .number('Height')
    .min(1, 'Box must be at least 1px tall.')
    .max(1000, 'Box must be smaller than 1000px.')
    .required('Height required'),
});
// end form validation


const NewBoxForm = ({ addBox }) => {

  const [color, setColor] = useState(null)

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

  const formik = useFormik({
    initialValues: {
      bgColor: "", 
      width: "",
      height: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addBox(values);
      setFormData(INITIAL_STATE);
    }
  })


  return (
    <BoxUI 
      component="form"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Autocomplete
        options={colors}
        id="bgColor"
        onChange={formik.handleChange}
        onInputChange={(event, newColor) => {
          formik.values.bgColor = newColor
        }}
        value={formik.values.bgColor}
        renderInput={(params) => 
          <TextField
            {...params}
            label="Color"
            variant="outlined"

            helperText={formik.touched.bgColor && formik.errors.bgColor}
            error={formik.touched.bgColor && Boolean(formik.errors.bgColor)}
          />}
      />
      <TextField
        id="width"
        label="Width"
        variant="outlined"
        value={formik.values.width}
        onChange={formik.handleChange}
        error={formik.touched.width && Boolean(formik.errors.width)}
        helperText={formik.touched.width && formik.errors.width}
      />
      <TextField
        id="height"
        label="Height"
        variant="outlined"
        value={formik.values.height}
        onChange={formik.handleChange}
        error={formik.touched.height && Boolean(formik.errors.height)}
        helperText={formik.touched.height && formik.errors.height}
      />

      <Button type="submit">Add new box</Button>
    </BoxUI>
  )
}

export default NewBoxForm;