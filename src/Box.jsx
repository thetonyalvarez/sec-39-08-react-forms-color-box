import { useState } from 'react'
import './Box.css'
import { Box as BoxUI } from '@mui/material'
import Button from '@mui/material/Button'

const Box = ({ id, bgColor = 'red', width = 100, height = 100, handleRemove }) => {

  const remove = () => handleRemove(id)

  return (
    <BoxUI
      className="Box"
      sx={{
        backgroundColor: bgColor,
        width: width + 'px',
        height: height + 'px'
      }}
    >
      <Button onClick={remove}>X</Button>
    </BoxUI>
  )
}

export default Box;