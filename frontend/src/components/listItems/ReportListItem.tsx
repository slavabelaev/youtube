import React from "react";
import MenuListItem from "../common/MenuListItem";
import FlagIcon from "@material-ui/icons/Flag";
import DialogButton, {DialogButtonProps} from "../buttons/DialogButton";
import SingleChoiceList from "../common/SingleChoice";
import {Button} from "@material-ui/core";

function ReportListItem() {
    const title = 'Report';
    const renderAction: DialogButtonProps['renderAction'] = (onClick) => (
        <MenuListItem
            title={title}
            icon={<FlagIcon />}
            onClick={onClick}
        />
    );

    const content = (
        <SingleChoiceList
            onLoad={async () => [
                'Sexual content',
                'Violent or repulsive content',
                'Hateful or abusive content',
                'Harmful or dangerous acts',
                'Spam or misleading'
            ]}
            fromModelToProps={(reason: string) => ({
                label: reason,
                value: reason
            })}
        />
    );

    const renderActions: DialogButtonProps['renderActions'] = onClose => (
        <>
            <Button onClick={onClose}>
                Cancel
            </Button>
            <Button
                color="secondary"
                onClick={onClose}
            >
                Report
            </Button>
        </>
    );

    return (
        <DialogButton
            title={title}
            content={content}
            renderAction={renderAction}
            renderActions={renderActions}
        />
    )
}

export default ReportListItem;
