import type { UserComponent } from "@craftjs/core";
import React from "react";
import { useNode } from "@craftjs/core";
import './InitCanvas.modules.css'

interface InitCanvaProps {
    children?: React.ReactNode
}

export const InitCanva: UserComponent<InitCanvaProps> = ({
    children
}) => {
    const { connectors: { connect, drag }, actions: { setProp }, hasSelectedNode } = useNode((state) => ({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged
    }))
    return (
        <div
            className="initcanva"
            ref={(ref) => {
                if (ref) {
                    connect(drag(ref))
                }
            }}
        >
            {children}
        </div>
    )
}