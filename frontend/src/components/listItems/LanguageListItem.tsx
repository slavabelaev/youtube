import React, {useContext} from "react";
import MenuListItem, {MenuListItemProps} from "../common/MenuListItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TranslateIcon from "@material-ui/icons/Translate";
import {LanguageContext} from "../../contexts/LanguageContext";

export interface LanguageListItemProps {
    onClick: MenuListItemProps['onClick'];
}

function LanguageListItem({ onClick }: LanguageListItemProps) {
    const context = useContext(LanguageContext);
    const languageName = context?.language?.label;
    return (
        <MenuListItem
            title={`Language: ${languageName}`}
            icon={<TranslateIcon />}
            endIcon={<ChevronRightIcon />}
            onClick={onClick}
        />
    )
}

export default LanguageListItem;
