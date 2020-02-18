import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";
import VideoPlayer from "../../components/VideoPlayer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
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

const WatchPage: React.FC = () => {
    const classes = useStyles();

    const toolbar = (
      <Toolbar disableGutters className={classes.toolbar}>
          <Typography className={classes.toolbarViews}>
              625 538 просмотров
          </Typography>
          <Typography className={classes.toolbarCreatedAt}>
              1 февр. 2020 г.
          </Typography>
          <aside className={classes.toolbarAside}>
              <LikeDislikeButton
                  initialLikes={998788}
                  initialDislikes={87654}
                  initialChecked="like"
              />
              <Button
                  variant="text"
                  startIcon={<ShareIcon />}
              >
                  Поделиться
              </Button>
              <Button
                  variant="text"
                  startIcon={<PlaylistAddIcon />}
              >
                Сохранить
              </Button>
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
                Очень длинное название видеоролика с кратким описанием, которое должно заинтересовать зрителей / дополнительная информация
            </Typography>
            {toolbar}
            <Divider />
            <ChannelToolbar disableGutters />
            <CollapseText
                className={classes.collapseText}
                initialText={`Подробное описание видеоролика, предназначенное для продвижения в поиске, а также прочие детали которые могут быть полезны пользователям после просмотра видеоролика.`}
                additionalText={`Дополнительный текст, который изначально скрыт и доступен при нажатии на кнопку "ещё". Например здесь можно поместить ссылки на источники информации, прдестваленной в видеоролике.`}
            />
            <Divider />
            <Comments />
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
                    Следующее
                </Typography>
                <aside className={classes.toolbarAside}>
                    <Typography
                        variant="button"
                        component="label"
                        htmlFor={id}
                    >
                        Автовоспроизведение
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
};

export default WatchPage;
