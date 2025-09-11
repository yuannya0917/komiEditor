import React from "react";
import './Container.modules.css'
import { useNode } from "@craftjs/core";

interface ContainerProps {
    width?: string,
    height?: string,
    background?: string,
    margin?: string,
    padding?: string,
    children?: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
    width,
    height,
    background,
    margin,
    padding,
    children
}) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <div
            className="container"
            ref={(ref) => {
                if (ref) {
                    connect(drag(ref))
                }
            }}
            style={{
                '--width': width,
                '--height': height,
                '--background': background,
                '--margin': margin,
                '--padding': padding
            } as React.CSSProperties}
        >
            {children}
        </div>
    )
}

export default Container;