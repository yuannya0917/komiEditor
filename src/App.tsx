import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'kohmin-ui/dist/index.css'
import { Button, AutoComplete, Menu, Tabs, Upload, Icon } from 'kohmin-ui';

import { ComponentsBox } from './components/ComponentsBox/ComponentsBox'
import { Container } from './components/Container/Container'
import { Text } from './components/Text/Text'
import { SettingsPanel } from './components/SettingsPanel/SettingsPanel'
import { EdiButton } from './components/EdiButton/EdiButton'

import { Editor, Frame, Element, useEditor } from '@craftjs/core'
import { Layers } from '@craftjs/layers'

import MenuItem from 'kohmin-ui/dist/components/Menu/menuItem'
import TabItem from 'kohmin-ui/dist/components/Tabs/tabsItem'
import { InitCanva } from './components/InitCanva/InitCanva'

function App() {
  return (
    <div className="App">
      <Editor resolver={{
        Button, Container,InitCanva,
        Upload, Icon, Menu, Tabs, MenuItem, TabItem,
        Text, ComponentsBox, EdiButton
      }}>
        <div className='components-bar'>
          <ComponentsBox></ComponentsBox>

        </div>


        <div className='canvas'>
          <Frame>
            <Element is={InitCanva} canvas>

            </Element>
          </Frame>
        </div>
        <div className='setting'>
          <div className='editor'>
            <SettingsPanel></SettingsPanel>
          </div>

          <div className='layers'>
            <Layers></Layers>
          </div>

        </div>
      </Editor>
    </div>
  )
}

export default App
