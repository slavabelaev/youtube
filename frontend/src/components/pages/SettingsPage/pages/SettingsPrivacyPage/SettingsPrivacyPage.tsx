import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxWidth: theme.breakpoints.width('md'),
        padding: theme.spacing(3, 2),
        margin: '0 auto'
    }
}));

const SettingsPrivacyPage: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <header>
                <Typography
                    variant="h5"
                    gutterBottom
                >
                    Настройте доступ к своему контенту
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    gutterBottom
                >
                    В этом разделе можно выбрать, кто сможет видеть ваши подписки и сохраненные плейлисты.
                    Здесь же вы можете ознакомиться с Условиями использования и Политикой конфиденциальности.
                </Typography>
            </header>
        </div>
    )
};

export default SettingsPrivacyPage;
