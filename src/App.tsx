import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'kohmin-ui/dist/index.css'
import { Button, AutoComplete, Menu, Tabs,Upload,Icon } from 'kohmin-ui';

import { ComponentCard } from './components/ComponentCard/ComponentCard'
import { Container } from './components/Container/Container'
import { Text } from './components/Text/Text'
import { SettingsPanel } from './components/SettingsPanel/SettingsPanel'
import { Editor, Frame, Element ,useEditor} from '@craftjs/core'

import { CraftWrapper } from './hocs/withCraft'
import TabItem from 'kohmin-ui/dist/components/Tabs/tabsItem'
import MenuItem from 'kohmin-ui/dist/components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <div className='components-box'>
        <ComponentCard name="Button"></ComponentCard>
        <ComponentCard name="Tab"></ComponentCard>
        <ComponentCard name="Tab"></ComponentCard>
        <ComponentCard name="Tab"></ComponentCard>
        <ComponentCard name="Tab"></ComponentCard>
        <ComponentCard name="Tab"></ComponentCard>
        <ComponentCard name="Tab"></ComponentCard>
        <ComponentCard name="Tab"></ComponentCard>
        <ComponentCard name="Tab"></ComponentCard>
        <ComponentCard name="Tab"></ComponentCard>
        <ComponentCard name="Tab"></ComponentCard>
        <ComponentCard name="Tab"></ComponentCard>
      </div>
      
        <Editor resolver={{ Button, Container, CraftWrapper, Upload,Icon,Menu,MenuItem,Tabs,TabItem ,Text}}>
          <div className='canvas'>
          <Frame>
            
            <Element is={Container} width="100%" background="#fff" padding='10px' canvas>
              <Text  text="nihao"></Text>
              <Element is={Container} width='70%' canvas>
                <Element is={CraftWrapper}>
                  <Button>按钮1</Button>
                </Element>

                <Element is={CraftWrapper}>
                  <Button>按钮2</Button>
                </Element>
              </Element>
              <Element is={CraftWrapper}>
                <Button>按钮</Button>
              </Element>

              <Element is={Container}  canvas>
                <Element is={CraftWrapper}>
                  <Upload action=''>
                    <Button size="lg" btnType="primary">
                      <Icon icon="upload"></Icon>
                      <span>点击上传</span>
                    </Button>
                  </Upload>
                </Element>
              </Element>

              <Element is={CraftWrapper}>
                <Menu>
                  <MenuItem>
                    hello
                  </MenuItem>
                </Menu>
              </Element>

            </Element>
          </Frame>
</div>
      <div className='setting'>
        <div className='editor'>
            <SettingsPanel></SettingsPanel>
          
        </div>

         <div className='layers'>
          图层区
        </div>

</div>
        </Editor>
      


      
       
      </div>
    
  )
}

export default App
