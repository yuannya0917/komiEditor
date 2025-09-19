import React,{useState,useEffect} from "react";
import { Button } from "kohmin-ui";
import type{ ButtonProps } from "kohmin-ui/dist/components/Button/button";
import type { UserComponent } from "@craftjs/core";
import { useNode } from "@craftjs/core";

import { Switch ,Radio,Input} from "antd";
import type { RadioChangeEvent } from "antd";

interface EdiButtonProps extends ButtonProps{
    disabled?:boolean
}

export const EdiButton:UserComponent<EdiButtonProps>=({
    children='button',
    ...props
})=>{
    const { connectors: { connect, drag }, actions: { setProp }, hasSelectedNode } = useNode((state) => ({
            hasSelectedNode: state.events.selected,
            hasDraggedNode: state.events.dragged
        }))
    
        const [editable, setEditable] = useState(false)
    
        useEffect(() => { !hasSelectedNode && setEditable(false) }, [hasSelectedNode])

    return (
        <div ref={(ref) => {
            if (ref) {
                connect(drag(ref))
            }
        }}
            onClick={() => setEditable(true)}
        >
            <Button {...props}>
                {children}
            </Button>
        </div>
    )
}

const EdiButtonSettings=()=>{
    const {actions:{setProp},size,btnType,href}=useNode((node)=>({
        disabled:node.data.props.disabled,
        size:node.data.props.size,
        btnType:node.data.props.btnType,
        href:node.data.props.href
    }))

    return (
        <div className="edibutton-setting">
            <div>
                <span>是否禁用</span>
                <Switch 
                    onChange={(checked:boolean)=>{
                        setProp((props:EdiButtonProps)=>props.disabled=checked)
                    }}>
                </Switch>
            </div>

            <div>
                <span>尺寸</span>
                <Radio.Group 
                    value={size}
                    onChange={(e:RadioChangeEvent)=>{
                        setProp((props:EdiButtonProps)=>{
                            props.size=e.target.value
                            return props
                        })
                    }}
                >
                    <Radio.Button value='lg'>large</Radio.Button>
                    <Radio.Button value='sm'>small</Radio.Button>
                </Radio.Group>
            </div>

            <div>
                <span>按钮类型</span>
                <Radio.Group 
                    value={btnType}
                    onChange={(e:RadioChangeEvent)=>{
                        setProp((props:EdiButtonProps)=>{
                            props.btnType=e.target.value
                            return props
                        })
                    }}
                >
                    <Radio.Button value='default'>default</Radio.Button>
                    <Radio.Button value='primary'>primary</Radio.Button>
                    <Radio.Button value='danger'>danger</Radio.Button>
                    <Radio.Button value='link'>link</Radio.Button>
                </Radio.Group>
            </div>

            <div>
                <span>跳转地址</span>
                <Input
                    value={href}
                    onChange={(e)=>{
                        setProp((props:EdiButtonProps)=>{
                            props.href=e.target.value
                            return props
                        })
                    }}
                >
                </Input>
            </div>
        </div>
    )
}

EdiButton.craft={
    related:{
        settings:EdiButtonSettings
    }
}