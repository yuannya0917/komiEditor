import React, { useEffect, useState } from "react";
import { useNode } from '@craftjs/core'
import type { UserComponent } from "@craftjs/core";
import ContentEditable from "react-contenteditable";

import { Slider, Input } from "antd";

interface TextProps {
    fontSize?: number;
    text?: string;
}
export const Text: UserComponent<TextProps> = ({
    fontSize = 'inherit',
    text = '',
}) => {
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
            <ContentEditable
                disabled={!editable}
                html={text}
                onChange={e => {
                    setProp((props: TextProps) => {
                        props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                    })
                }}
                tagName="p"
                style={{ fontSize: `${fontSize}px` }}
            >

            </ContentEditable>
        </div>
    )
}

const TextSettings = () => {
    const { actions: { setProp }, fontSize, text } = useNode((node) => ({
        fontSize: node.data.props.fontSize,
        text: node.data.props.text
    }))

    return (
        <div className="text-setting">
            

            <div>
                <span>文本内容</span>
                <Input
                    value={text}
                    onChange={(e) => {
                        const newText = e.target.value
                        setProp((props: TextProps) => {
                            props.text = newText
                            return props
                        })
                    }}>

                </Input>
            </div>
            
            <div>
                <span>字号</span>
                <Slider
                    defaultValue={14}
                    max={50}
                    min={1}
                    onChange={(value) => {
                        setProp((props: TextProps) => props.fontSize = value);
                    }}
                ></Slider>
            </div>
        </div>
    )
}

Text.craft = {
    related: {
        settings: TextSettings
    }
}