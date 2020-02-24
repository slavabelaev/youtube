import React from "react";
import LinkListItem from "../common/LinkListItem";
import {REVIEWS_PAGE_ROUTE} from "../../pages/ReviewsPage";
import RateReviewIcon from "@material-ui/icons/RateReview";

function SendFeedbackListItem() {
    return (
        <LinkListItem
            title="Send feedback"
            to={REVIEWS_PAGE_ROUTE}
            icon={RateReviewIcon}
        />
    )
}

export default SendFeedbackListItem;
