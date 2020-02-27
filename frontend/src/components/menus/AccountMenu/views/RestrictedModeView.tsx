import React from "react";
import PopoverAppBar from "../../../core/PopoverAppBar";
import DescriptionBox from "../../../common/DescriptionBox";
import List from "@material-ui/core/List";
import RestrictedModeSwitchListItem from "../../../listItems/RestrictedModeSwitchListItem";
import {AccountMenuViewProps} from "../AccountMenuViewProps";

export interface RestrictedModeViewProps extends AccountMenuViewProps {}

function RestrictedModeView({ onBack }: RestrictedModeViewProps) {
    return (
        <div>
            <PopoverAppBar
                title="Restricted mode"
                onBack={onBack}
            />
            <DescriptionBox
                paragraphs={[
                    'This helps hide potentially mature videos. No filter is 100% accurate.',
                    'This setting only applies to this browser.'
                ]}
            />
            <List>
                <RestrictedModeSwitchListItem/>
            </List>
        </div>
    )
}

export default RestrictedModeView;
