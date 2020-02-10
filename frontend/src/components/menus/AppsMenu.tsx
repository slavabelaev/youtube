import React from "react";
import List from "@material-ui/core/List";
import RouteListItem from "../RouteListItem";
import Divider from "@material-ui/core/Divider";
import TvIcon from "@material-ui/icons/Tv";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PersonIcon from "@material-ui/icons/Person";
import {IconProps} from "@material-ui/core";

const AppsMenu: React.FC = () => {
    const renderIcon = (Icon: React.FC<IconProps>) => (
        <Icon color="primary" />
    );

    return (
        <>
            <List>
                <RouteListItem
                    title={'YonTube TV'}
                    to={'/apps/tv'}
                    icon={() => renderIcon(TvIcon)}
                />
            </List>
            <Divider />
            <List>
                <RouteListItem
                    title={'YonTube Music'}
                    to={'/apps/music'}
                    icon={() => renderIcon(MusicVideoIcon)}
                />
                <RouteListItem
                    title={'YonTube Детям'}
                    to={'/apps/kids'}
                    icon={() => renderIcon(ChildCareIcon)}
                />
            </List>
            <Divider />
            <List>
                <RouteListItem
                    title={'Академия для авторов'}
                    to={'/apps/authors'}
                    icon={() => renderIcon(PersonIcon)}
                />
                <RouteListItem
                    title={'YonTube для музыкантов'}
                    to={'/apps/artists'}
                    icon={() => renderIcon(MusicNoteIcon)}
                />
            </List>
        </>
    )
};

export default AppsMenu;
