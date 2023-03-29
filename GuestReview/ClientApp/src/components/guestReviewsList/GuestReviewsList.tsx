import React from "react";
import { useGetReviewsQuery } from "src/stateManagement/queries/useReviewQuery";
import {ReviewCard} from "../core/reviewCard";

export const GuestReviewsList = () => {
    const {data:reviewsList, isLoading} = useGetReviewsQuery();
    const positiveReviews = reviewsList?.filter((review) => review.rating > 3);
    ///////////////////////loading spinner
    return <div>
        {reviewsList?.map((review, i) => 
            <ReviewCard
                key={'review_' + i}
                title={review.title}
                rating={review.rating}
                summary={review.summary}    
            />
        )}
    </div>
}