import React from "react";
import './ComponentCard.modules.css'

interface ComponentCardProps{
    name:string,
    icon?:any
}
export const ComponentCard : React.FC<ComponentCardProps> = ({
    name,
    icon
}) => {
    return(
        <div className="component-card">
            <span>{name}</span>
            <div>{icon}</div>
        </div>
    )
}
