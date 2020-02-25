import React from "react";
import MenuListItem, {MenuListItemProps} from "../common/MenuListItem";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

export interface AddToQueueListItemProps {
    onClick?: MenuListItemProps['onClick'];
}

function AddToQueueListItem(props: AddToQueueListItemProps) {
    return (
        <MenuListItem
            title="Add to queue"
            icon={<PlaylistPlayIcon />}
            onClick={props.onClick}
        />
    )
}

export default AddToQueueListItem;
