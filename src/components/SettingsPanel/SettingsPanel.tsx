import React from "react";
import { useEditor } from "@craftjs/core";
import { Button } from "antd";
import type { UserComponent } from "@craftjs/core";

export const SettingsPanel: UserComponent = () => {
    const { actions, selected } = useEditor((state, query) => {
        const [currentNodeId] = state.events.selected;
        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
                isDeletable: query.node(currentNodeId).isDeletable()
            };
        }

        return {
            selected
        }
    });
    return selected ? (
        <div>
            <div>
                {
                    selected.settings && React.createElement(selected.settings)
                }
            </div>
            <div>
                {
                    selected.isDeletable ? (
                        <Button
                            onClick={() => {
                                actions.delete(selected.id)
                            }}
                        >
                            Delete
                        </Button>
                    ) : null
                }
            </div>
        </div>

    ) : null
}

export default SettingsPanel;