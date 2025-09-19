import React from "react";
import './ComponentCard.modules.css'
import { Button } from "kohmin-ui";

interface ComponentCardProps{
    name:string,
}
export const ComponentCard =React.forwardRef<any,ComponentCardProps> (({name
},ref) => {
    return(
        <button className="component-card" ref={ref}>
            {name}
        </button>
    )
})
