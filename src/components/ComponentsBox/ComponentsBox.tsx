import React from "react";
import { Text } from "../Text/Text";
import { Button } from "kohmin-ui";
import './ComponentsBox.modules.css'

export const ComponentsBox = () => {
    return (
        <div className="components-box">
            <Text text="Toolbox" fontSize={24}></Text>
            <div className="components-area">
                <Button size="lg">Button</Button>
                <Button size="lg">Text</Button>
                <Button size="lg">Card</Button>
            </div>

        </div>
    )
}