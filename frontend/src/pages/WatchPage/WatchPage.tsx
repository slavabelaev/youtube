import React from "react";
import faker from "faker/locale/en";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";
import VideoPlayer from "../../components/VideoPlayer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Switch from "@material-ui/core/Switch";
import CollapseText from "../../components/common/CollapseText";
import Comments from "../../components/Comments";
import LikeDislikeButton from "../../components/buttons/LikeDislikeButton";
import ChannelToolbar from "../../components/ChannelToolbar";
import {generateListVideos} from "../../services/videosService";
import Videos from "../../components/Videos";
import PopoverButton from "../../components/buttons/PopoverButton";
import WatchPageMenu from "./WatchPageMenu";
import SaveToPlaylistButton from "../../components/buttons/SaveToPlaylistButton";
import {generateComments} from "../../services/commentsService";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        marginTop: theme.spacing(2),
        lineHeight: 1.25
    },
    main: {
        flex: 1,
        padding: theme.spacing(3, 2),
        maxWidth: 992
    },
    aside: {
        flex: 1,
        maxWidth: 425,
        padding: theme.spacing(2)
    },
    toolbar: {},
    toolbarViews: {
        marginRight: theme.spacing(2)
    },
    toolbarCreatedAt: {},
    toolbarAside: {
        marginLeft: 'auto',
    },
    autoplayToolbar: {
        minHeight: 'initial',
        marginBottom: theme.spacing(2)
    },
    collapseText: {
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(7)
        }
    }
}));

function WatchPage() {
    const classes = useStyles();

    const toolbar = (
      <Toolbar disableGutters className={classes.toolbar}>
          <Typography className={classes.toolbarViews}>
              {Math.round(Math.random() * 9999999).toLocaleString()} views
          </Typography>
          <Typography className={classes.toolbarCreatedAt}>
              {faker.date.past().toLocaleDateString()}
          </Typography>
          <aside className={classes.toolbarAside}>
              <LikeDislikeButton
                  initialLikes={Math.round(Math.random() * 999999)}
                  initialDislikes={Math.round(Math.random() * 99999)}
              />
              <Button
                  variant="text"
                  startIcon={<ShareIcon />}
              >
                  Share
              </Button>
              <SaveToPlaylistButton />
              <PopoverButton
                  content={<WatchPageMenu />}
              >
                  <MoreHorizIcon />
              </PopoverButton>
          </aside>
      </Toolbar>
    );

    const main = (
        <main className={classes.main}>
            <VideoPlayer
                height={538}
            />
            <Typography variant="h6" className={classes.title}>
                {faker.lorem.sentence(20)}
            </Typography>
            {toolbar}
            <Divider />
            <ChannelToolbar disableGutters />
            <CollapseText
                className={classes.collapseText}
                initialText={faker.lorem.sentences(5)}
                additionalText={faker.lorem.sentences(20)}
            />
            <Divider />
            <Comments onLoad={generateComments} />
        </main>
    );

    const renderAutoplayListItem = () => {
        const id = (+new Date()).toString(16);
        return (
            <Toolbar
                className={classes.autoplayToolbar}
                disableGutters
            >
                <Typography>
                    Up next
                </Typography>
                <aside className={classes.toolbarAside}>
                    <Typography
                        variant="button"
                        component="label"
                        htmlFor={id}
                    >
                        Autoplay
                    </Typography>
                    <Switch
                        inputProps={{
                            id: id
                        }}
                        defaultChecked={true}
                    />
                </aside>
            </Toolbar>
        )
    };

    const aside = (
        <aside className={classes.aside}>
            {renderAutoplayListItem()}
            <Videos
                onLoad={generateListVideos}
            />
        </aside>
    );

    return (
        <div className={classes.root}>
            {main}
            {aside}
        </div>
    )
}

export default WatchPage;
