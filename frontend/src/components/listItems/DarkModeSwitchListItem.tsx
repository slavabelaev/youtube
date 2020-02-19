import React, {useContext} from "react";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import SwitchListItem from "../common/SwitchListItem";
import {ThemeContext} from "../../contexts/ThemeContext/ThemeContext";

const DarkModeSwitchListItem: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    const darkThemeEnabled = themeContext?.theme.palette.type === 'dark';
    return (
        <SwitchListItem
            title="Темная тема"
            icon={<Brightness4Icon />}
            checked={darkThemeEnabled}
            onChange={(event, checked) => {
                themeContext?.switchMode(checked ? 'dark' : 'light');
            }}
        />
    );
};

export default DarkModeSwitchListItem;
