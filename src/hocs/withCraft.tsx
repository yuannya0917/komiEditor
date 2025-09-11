import { useNode } from '@craftjs/core'
import React from 'react'


export function CraftWrapper({ children }: { children: React.ReactNode }) {
    const { connectors: { connect, drag } } = useNode()
    return (
        <div ref={(ref)=>{
            if(ref){
                connect(drag(ref))
            }
        }}>
            {children}
        </div>
    )
}