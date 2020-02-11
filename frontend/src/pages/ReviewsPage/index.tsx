import React, {Suspense} from "react";
import {LinearProgress} from "@material-ui/core";
import Layout from "../../components/layouts/Layout";
import RouteItem from "../../interfaces/RouteItem";
import RateReviewIcon from "@material-ui/icons/RateReview";

export const REVIEWS_PAGE_ROUTE = '/reviews';

export const REVIEWS_ROUTE: RouteItem = {
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
