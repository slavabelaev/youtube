import React from "react";
import {MenuListItemProps} from "../../common/MenuListItem";
import FlagIcon from "@material-ui/icons/Flag";
import Menu from "../../common/Menu";

function CommentMenu() {
    const items: MenuListItemProps[] = [
        { title: 'Report', icon: <FlagIcon />, onClick: () => null }
    ];

    return (
        <Menu items={items} />
    )
}

export default CommentMenu;
