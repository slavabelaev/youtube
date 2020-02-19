import React from "react";
import Menu from "../../common/Menu";
import FlagIcon from "@material-ui/icons/Flag";
import TranslateIcon from "@material-ui/icons/Translate";

const WatchPageMenu: React.FC = () => (
    <Menu
        items={[
            { title: 'Пожаловаться', icon: <FlagIcon /> },
            { title: 'Поработать над переводом', icon: <TranslateIcon /> },
        ]}
    />
);

export default WatchPageMenu;
