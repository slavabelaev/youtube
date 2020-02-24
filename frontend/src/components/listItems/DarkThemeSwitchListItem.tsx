import React, {useContext} from "react";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import SwitchListItem from "../common/SwitchListItem";
import {ThemeContext} from "../../contexts/ThemeContext";

function DarkThemeSwitchListItem() {
    const themeContext = useContext(ThemeContext);
    const darkThemeEnabled = themeContext?.theme.palette.type === 'dark';
    return (
        <SwitchListItem
            title="Dark Theme"
            icon={<Brightness4Icon />}
            checked={darkThemeEnabled}
            onChange={(event, checked) => {
                themeContext?.switchMode(checked ? 'dark' : 'light');
            }}
        />
    );
}

export default DarkThemeSwitchListItem;
