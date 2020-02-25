import React from "react";
import Divider from "@material-ui/core/Divider";
import AppsTvListItem from "./items/AppsTvListItem";
import List from "@material-ui/core/List";
import AppsMusicListItem from "./items/AppsMusicListItem";
import AppsKidsListItem from "./items/AppsKidsListItem";
import AppsAcademyListItem from "./items/AppsAcademyListItem";
import AppsArtistsListItem from "./items/AppsArtistsListItem";

function AppsMenu() {
    return (
        <div>
            <List>
                <AppsTvListItem/>
            </List>
            <Divider />
            <List>
                <AppsMusicListItem/>
                <AppsKidsListItem/>
            </List>
            <Divider />
            <List>
                <AppsAcademyListItem/>
                <AppsArtistsListItem/>
            </List>
        </div>
    )
}

export default AppsMenu;
