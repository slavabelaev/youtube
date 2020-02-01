import React from "react";
import Box from "@material-ui/core/Box";
import {createStyles, IconButton, Theme} from "@material-ui/core";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    search: {
        maxWidth: 600
    }
}));

const SearchField: React.FC = () => {
    const classes = useStyles();

    return (
        <TextField
            className={classes.search}
            color="secondary"
            variant="outlined"
            margin="dense"
            fullWidth
            placeholder="Введите запрос"
            InputProps={{
                endAdornment: (
                    <Box display="flex">
                        <IconButton size="small">
                            <KeyboardIcon />
                        </IconButton>
                        <IconButton size="small">
                            <SearchIcon />
                        </IconButton>
                    </Box>
                ),
            }}
        />
    )
};

export default SearchField;
