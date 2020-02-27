import React from "react";
import MenuListItem from "../common/MenuListItem";
import FlagIcon from "@material-ui/icons/Flag";
import DialogTrigger, {DialogTriggerProps} from "../triggers/DialogTrigger";
import SingleChoiceList from "../common/SingleChoice";
import {Button} from "@material-ui/core";

function ReportListItem() {
    const title = 'Report';
    const renderTrigger: DialogTriggerProps['renderTrigger'] = (onClick) => (
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
            itemToProps={(reason: string) => ({
                label: reason,
                value: reason
            })}
        />
    );

    const renderActions: DialogTriggerProps['renderActions'] = onClose => (
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
        <DialogTrigger
            title={title}
            content={content}
            renderTrigger={renderTrigger}
            renderActions={renderActions}
        />
    )
}

export default ReportListItem;
