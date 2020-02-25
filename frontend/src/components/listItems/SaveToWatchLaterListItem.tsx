import React from "react";
import MenuListItem, {MenuListItemProps} from "../common/MenuListItem";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SnackbarTrigger, {SnackbarTriggerProps} from "../triggers/SnackbarTrigger";

export interface SaveToWatchLaterListItemProps {
    onClick?: MenuListItemProps['onClick'];
}

function SaveToWatchLaterListItem({ onClick }: SaveToWatchLaterListItemProps) {
    const renderTrigger: SnackbarTriggerProps['renderTrigger'] = showSnackbar => (
        <MenuListItem
            title={'Save to "Watch later"'}
            icon={<WatchLaterIcon />}
            onClick={() => {
                if (onClick) onClick();
                showSnackbar();
            }}
        />
    );

    return (
        <SnackbarTrigger
            message={'Saved to "Watch later"'}
            renderTrigger={renderTrigger}
        />
    )
}

export default SaveToWatchLaterListItem;
