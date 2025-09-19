import React from "react";
import { Text } from "../Text/Text";
import { Button, Menu } from "kohmin-ui";
import MenuItem from "kohmin-ui/dist/components/Menu/menuItem";
import './ComponentsBox.modules.css'
import { ComponentCard } from "../ComponentCard/ComponentCard";
import { useEditor } from "@craftjs/core";
import { Container } from "../Container/Container";
import { EdiButton } from "../EdiButton/EdiButton";


export const ComponentsBox = () => {
    const { connectors, query } = useEditor()
    return (
        <div className="components-box">
            <ComponentCard name="Button" ref={(ref: any) => connectors.create(ref,
                <EdiButton></EdiButton>
            )}
            ></ComponentCard>
            <ComponentCard name="Text" ref={(ref: any) => connectors.create(ref,
                <Text text='text'></Text>
            )}></ComponentCard>
            <ComponentCard name="Container" ref={(ref: any) => connectors.create(ref,
                <Container ></Container>
            )}></ComponentCard>
        </div>
    )
}