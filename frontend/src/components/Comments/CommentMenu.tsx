import React from "react";
import {MenuListItemProps} from "../MenuListItem";
import FlagIcon from "@material-ui/icons/Flag";
import Menu from "../Menu";

const CommentMenu: React.FC = () => {
    const items: MenuListItemProps[] = [
        { title: 'Пожаловаться', icon: <FlagIcon />, onClick: () => null }
    ];

    return (
        <Menu items={items} />
    )
};

export default CommentMenu;
