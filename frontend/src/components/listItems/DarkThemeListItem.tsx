import React, {useContext} from "react";
import MenuListItem, {MenuListItemProps} from "../common/MenuListItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BrightnessIcon from "@material-ui/icons/Brightness4";
import {ThemeContext} from "../../contexts/ThemeContext";

export interface DarkThemeListItemProps {
    onClick: MenuListItemProps['onClick'];
}

function DarkThemeListItem({ onClick }: DarkThemeListItemProps) {
    const themeContext = useContext(ThemeContext);
    const darkThemeEnabled = themeContext?.theme.palette.type === 'dark';
    const statusText = darkThemeEnabled ? 'On' : 'Off';
    return (
        <MenuListItem
            title={`Dark theme: ${statusText}`}
            icon={<BrightnessIcon />}
            endIcon={<ChevronRightIcon />}
            onClick={onClick}
        />
    )
}

export default DarkThemeListItem;
