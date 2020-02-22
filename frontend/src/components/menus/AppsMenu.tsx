import React from "react";
import Divider from "@material-ui/core/Divider";
import TvIcon from "@material-ui/icons/Tv";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PersonIcon from "@material-ui/icons/Person";
import LinksMenu from "../common/LinksMenu";

function AppsMenu() {
	return (
    <div>
        <LinksMenu items={[
            {
                title: 'YonTube TV',
                to: '/apps/tv',
                icon: () => <TvIcon color="primary" />
            }
        ]} />
        <Divider />
        <LinksMenu items={[
            {
                title: 'YonTube Music',
                to: '/apps/music',
                icon: () => <MusicVideoIcon color="primary" />
            },
            {
                title: 'YonTube Детям',
                to: '/apps/kids',
                icon: () => <ChildCareIcon color="primary" />
            }
        ]} />
        <Divider />
        <LinksMenu items={[
            {
                title: 'Академия для авторов',
                to: '/apps/authors',
                icon: () => <PersonIcon color="primary" />
            },
            {
                title: 'YonTube для музыкантов',
                to: '/apps/artists',
                icon: () => <MusicNoteIcon color="primary" />
            }
        ]} />
    </div>
)
}

export default AppsMenu;
