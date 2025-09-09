import React from "react";

interface TextProps{
    fontSize?: number;
    text?: string;
}
export const Text: React.FC<TextProps> = ({
    fontSize,
    text
})=>{
    return(
        <div>
            <p style={{fontSize: fontSize}}>{text}</p>
        </div>
    )
}