import React from "react";
import PopoverAppBar from "../../../core/PopoverAppBar";
import DescriptionBox from "../../../common/DescriptionBox";
import List from "@material-ui/core/List";
import DarkThemeSwitchListItem from "../../../listItems/DarkThemeSwitchListItem";
import {AccountMenuViewProps} from "../AccountMenuViewProps";

export interface DarkThemeViewProps extends AccountMenuViewProps {}

function DarkThemeView({ onBack }: DarkThemeViewProps) {
    return (
        <div>
            <PopoverAppBar
                title="Dark Theme"
                onBack={onBack}
            />
            <DescriptionBox
                paragraphs={[
                    'Dark theme turns the light surfaces of the page dark, creating an experience ideal for night. Try it out!',
                    'Dark theme turns the light surfaces of the page dark, creating an experience ideal for night. Try it out!',
                    'Your Dark theme setting will apply to this browser only.'
                ]}
            />
            <List>
                <DarkThemeSwitchListItem />
            </List>
        </div>
    )
}

export default DarkThemeView;
