import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'kohmin-ui/dist/index.css'
import { Button } from 'kohmin-ui';

import { ComponentCard } from './components/ComponentCard/ComponentCard'
import { Container } from './components/Container/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='components-box'>
        组件区
        <ComponentCard name="Button"></ComponentCard>
        <ComponentCard name="Tab"></ComponentCard>
      </div>

      <div className='canvas'>
        画布区
        <Container width="360" height="200" background="#fff">

        </Container>
      </div>

      <div className='setting'>
        <div className='editor'>
          编辑区
        </div>

        <div className='layers'>
          图层区
        </div>
      </div>
    </div>
  )
}

export default App
