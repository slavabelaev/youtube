import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../layouts/Layout";
import RateReviewIcon from "@material-ui/icons/RateReview";
import {RouteLink} from "../../common/LinkListItem";

export const REVIEWS_PAGE_ROUTE = '/reviews';

export const REVIEWS_MENU_ITEM: RouteLink = {
    title: 'Отправить отзыв',
    to: REVIEWS_PAGE_ROUTE,
    icon: RateReviewIcon
};

const Page = React.lazy(() => import('./ReviewsPage'));

const ReviewsPage: React.FC = () => (
    <Layout>
        <Suspense fallback={<LinearProgress />}>
            <Page />
        </Suspense>
    </Layout>
);

export default ReviewsPage;
