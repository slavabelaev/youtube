import React from "react";
import LinkListItem from "../common/LinkListItem";
import {SIGN_OUT_PAGE_ROUTE} from "../../pages/SignInPage";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function SignOutListItem() {
    return (
        <LinkListItem
            title="Sign out"
            to={SIGN_OUT_PAGE_ROUTE}
            icon={ExitToAppIcon}
        />
    )
}

export default SignOutListItem;
