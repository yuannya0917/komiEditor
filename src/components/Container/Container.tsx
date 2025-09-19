import React, { useEffect, useState } from "react";
import './Container.modules.css'
import { useEditor, useNode, type UserComponent } from "@craftjs/core";
import ContentEditable from "react-contenteditable";

import { Input } from "antd";

import { Resizable } from 're-resizable';
import { sizeHeight, sizeWidth } from "@mui/system";
interface ContainerProps {
    width?: number | string,
    height?: number | string,
    background?: string,
    margin?: string,
    padding?: string,
    children?: React.ReactNode
}

export const Container: UserComponent<ContainerProps> = ({
    width = 200,
    height = 100,
    background,
    margin = '1',
    padding,
    children
}) => {
    const { connectors: { connect, drag }, actions: { setProp }, hasSelectedNode } = useNode((state) => ({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged
    }))
    const { actions } = useEditor()

    const [size, setSize] = useState({ width: width, height: height })
    const [editable, setEditable] = useState(false)
    const [isResizing, setResizing] = useState(false)

    useEffect(() => {
        if (!isResizing && !hasSelectedNode) {
            setEditable(false)
        }
    }, [hasSelectedNode, isResizing])

    const minWidth = 50
    const minHeight = 50
    const maxWidth = '100%'
    const maxHeight = '100%'

    return (
        <Resizable
            size={size}
            minWidth={minWidth}
            onResizeStart={() => {
                setEditable(true)
            }}
            onResizeStop={() => {
                setProp((props: ContainerProps) => {
                    props.width = size.width;
                    props.height = size.height;
                });
            }}
            onResize={(e, direction, ref) => {
                setSize({
                    width: ref.offsetWidth,
                    height: ref.offsetHeight
                })
            }}
        >
            <div
                className="container"
                ref={(ref) => {
                    if (ref) {
                        connect(drag(ref))
                    }
                }}
                style={{
                    width: `${size.width}px`,
                    height: `${size.height}px`,
                    background: background,
                    margin,
                    padding:'inherit',
                    border:'1px black solid'

                } as React.CSSProperties}
            >
                {children}
            </div>
        </Resizable>
    )
}

const ContainerSettings = () => {
    const {
        actions: { setProp },
        width,
        height,
        background,
        margin,
        padding
    } = useNode((node) => ({
        width: node.data.props.width,
        height: node.data.props.height,
        background: node.data.props.background,
        margin: node.data.props.margin,
        padding: node.data.props.padding,
    }))

    return (
        <div className="container-setting">
            <div>
                <span>宽度</span>
                <Input
                    type="number"
                    suffix='px'
                    value={width}
                    defaultValue={200}
                    onChange={(e) => {
                        setProp((props: ContainerProps) => {
                            props.width = e.target.value
                            return props
                        })

                    }}>
                </Input>
            </div>

            <div>
                <span>高度</span>
                <Input
                    type="number"
                    suffix='px'
                    defaultValue={100}
                    value={height}
                    onChange={(e) => {
                        setProp((props: ContainerProps) => {
                            props.height = e.target.value
                            return props
                        })
                    }}>
                </Input>
            </div>

            <div>
                <span>外边距</span>
                <Input
                    type='number'
                    suffix='px'
                    defaultValue={1}
                    value={margin}
                    onChange={(e) => {
                        setProp((props: ContainerProps) => {
                            props.margin = e.target.value
                            return props
                        })
                    }}>
                </Input>
            </div>

            <div>
                <span>内边距</span>
                <Input
                    type='number'
                    suffix='px'
                    defaultValue={1}
                    value={padding}
                    onChange={(e) => {
                        setProp((props: ContainerProps) => {
                            props.padding = e.target.value
                            return props
                        })
                    }}>
                </Input>
            </div>
        </div>
    )
}

Container.craft = {
    related: {
        settings: ContainerSettings
    }
}
export default Container;