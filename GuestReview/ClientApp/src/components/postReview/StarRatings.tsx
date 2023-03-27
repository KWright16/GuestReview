import React from "react";
import {Paper, Rating} from "@mui/material";

interface IStarRatingsProps {
    rating: number|null;
    setRating: (e:number) => void
}

export const StarRatings: React.FC<IStarRatingsProps> = (props) => {
    return (<div className="guestReviewDiv">
        <Paper id="ratingsBox" elevation={4} className="guestReviewDiv" color="primary">
            <Rating
                aria-label="rating"
                name="simple-controlled"
                value={props.rating}
                onChange={(event, newValue) => {
                    props.setRating(newValue ?? 0);
                }}
            />
        </Paper>
    </div>)
}