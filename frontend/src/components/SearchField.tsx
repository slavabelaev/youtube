import React, {ChangeEvent} from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import {createStyles, IconButton, Theme} from "@material-ui/core";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import {Autocomplete} from "@material-ui/lab";
import {RenderInputParams} from "@material-ui/lab/Autocomplete/Autocomplete";

const useStyles = makeStyles((theme: Theme) => createStyles({
    autocomplete: {
        width: '100%',
        maxWidth: 600
    },
    input: {},
    link: {
        display: 'block',
        color: 'inherit',
        textDecoration: 'none'
    }
}));

interface Option {
    label: string;
}

const options: Option[] = [
    { label: 'Элемент 1' },
    { label: 'Элемент 2' },
    { label: 'Элемент 3' },
    { label: 'Элемент 4' },
];

interface SearchFieldProps {
    renderInput?: (params: RenderInputParams) => React.ReactNode
}

function SearchField(props: SearchFieldProps) {
    const classes = useStyles();
    const history = useHistory();

    const inputEndAdornment = (
        <Box display="flex">
            <IconButton size="small">
                <KeyboardIcon />
            </IconButton>
            <IconButton size="small">
                <SearchIcon />
            </IconButton>
        </Box>
    );

    const getOptionLabel = (item: Option) => item.label;

    const renderInput = (params: RenderInputParams) => {
        return (
            <TextField
                {...params}
                color="secondary"
                variant="outlined"
                margin="dense"
                fullWidth
                placeholder="Введите запрос"
                InputProps={{
                    ...params.InputProps,
                    className: classes.input,
                    endAdornment: inputEndAdornment
                }}
            />
        )
    };

    const handleChange = (e: ChangeEvent<{}>, option: Option | null) => {
        const path = option ? `/search?q=${option?.label}` : '/search';
        history.push(path);
    };

    return (
        <Autocomplete
            className={classes.autocomplete}
            options={options}
            renderInput={props.renderInput || renderInput}
            getOptionLabel={getOptionLabel}
            onChange={handleChange}
        />
    );
};

export default SearchField;
