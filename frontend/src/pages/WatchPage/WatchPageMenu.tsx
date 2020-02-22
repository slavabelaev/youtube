import React from "react";
import Menu from "../../components/common/Menu";
import FlagIcon from "@material-ui/icons/Flag";
import TranslateIcon from "@material-ui/icons/Translate";

function WatchPageMenu() {
    return (
        <Menu
            items={[
                {title: 'Report', icon: <FlagIcon/>},
                {title: 'Add translations', icon: <TranslateIcon/>},
            ]}
        />
    )
}

export default WatchPageMenu;
