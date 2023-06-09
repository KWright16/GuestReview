import React from "react";
import { Rating } from "@mui/material";

interface IReviewCardProps {
    title: string|null;
    rating: number;
    summary: string|null;
}

export const ReviewCard = (props: IReviewCardProps) => {
    return (
        <><article className='guestReviewDiv'>
            <h5>{props.title}</h5>  
            <Rating 
                disabled
                aria-label="rating"
                name="simple-controlled"
                value={props.rating}
            />        
        </article>

        
        <p><i>"{props.summary}"</i></p>
    </>
    )
}