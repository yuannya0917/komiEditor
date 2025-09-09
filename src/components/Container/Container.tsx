import React from "react";
import './Container.modules.css'

interface ContainerProps{
    width:string,
    height:string,
    background?:string,
    margin?:string
}

export const Container:React.FC<ContainerProps>=({
    width,
    height,
    background,
    margin
})=>{
    return(
        <div 
            className="container"
            style={{
                '--width':`${width}px`,
                '--height':`${height}px`,
                '--background':background,
                '--margin':margin
            }as React.CSSProperties}
        >

        </div>
    )
}

export default Container;