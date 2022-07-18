import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import { Box as BoxUI } from '@mui/material'
import Container from '@mui/material/Container'
import './BoxList.css'



const BoxList = () => {
  const [boxes, setBoxes] = useState([])
  
  // add new box
  const addBox = (box) => {
    let newBox = {...box, id: uuid()}
    setBoxes(boxes => [...boxes, newBox])
  }
  // end addBox

  // remove box
  const removeBox = (id) => {
    setBoxes(boxes => boxes.filter(box => box.id !== id))
  }
  // end box

  // render all boxes
  const renderBoxes = () => {
    return (
      <BoxUI>
        {boxes.map(box => (
          <Box
            key={box.id}
            id={box.id}
            bgColor={box.bgColor}
            width={box.width}
            height={box.height}
            handleRemove={removeBox}
          />
        ))}
      </BoxUI>
    )
  }

  return (
    <Container className="BoxList">
      <NewBoxForm addBox={addBox}/>
      {renderBoxes()}
    </Container>
  )
}

export default BoxList;