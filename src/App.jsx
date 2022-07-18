import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import BoxList from './BoxList'
import './App.css'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={darkTheme}>
      <header>
        <Typography variant="h1" component="h1">
          Color Box
        </Typography>
        <Typography variant="p" component="subtitle">
          Pick a color, width, and height, and add a new box!
        </Typography>
      </header>
      <main>
        <BoxList></BoxList>
      </main>
    </ThemeProvider>
  )
}

export default App
