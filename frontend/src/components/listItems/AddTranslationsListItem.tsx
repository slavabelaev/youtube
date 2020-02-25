import React from "react";
import TranslateIcon from "@material-ui/icons/Translate";
import LinkListItem from "../common/LinkListItem";

function AddTranslationsListItem() {
    return (
        <LinkListItem
            title="Add translations"
            to="/video/translations"
            icon={TranslateIcon}
        />
    )
}

export default AddTranslationsListItem;
