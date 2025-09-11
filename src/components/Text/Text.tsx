import React ,{useEffect, useState}from "react";
import { useNode} from '@craftjs/core'
import type { UserComponent } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { FormControl ,FormLabel,Slider} from "@mui/material";

interface TextProps{
    fontSize?: number;
    text?: string;
}
export const Text: UserComponent<TextProps> = ({
    fontSize='inherit',
    text='',
})=>{
    const { connectors: { connect, drag },actions:{setProp},hasSelectedNode } = useNode((state)=>({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged
    }))

    const [editable,setEditable]=useState(false)

    useEffect(()=>{!hasSelectedNode && setEditable(false)},[hasSelectedNode])
    return(
        <div ref={(ref)=>{
            if(ref){
                connect(drag(ref))
            }
        }}
            onClick={() => setEditable(true)}
        >
            <ContentEditable
                disabled={!editable}
                html={text}
                onChange={e=>{
                    setProp((props: TextProps) => {
                        props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                    })
                }}
                tagName="p"
                style={{fontSize:`${fontSize}px`}}    
            >

            </ContentEditable>
        </div>
    )
}

const TextSettings=()=>{
    const {actions:{setProp},fontSize}=useNode((node)=>({
        fontSize: node.data.props.fontSize
    }))

    return(
        <div>
            <FormControl size='small' component='fieldset'>
                <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props: TextProps) => props.fontSize = value);
          }}
        />
            </FormControl>
        </div>
    )
}

Text.craft={
    related:{
        settings: TextSettings  
    }
}