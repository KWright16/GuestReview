import React from "react";
import {Paper, Rating} from "@mui/material";

interface IStarRatingsProps {
    rating: number|null;
    setRating: (e:number) => void;
    valid: boolean|undefined;
    resetValidation: () => void;
    disabled?: boolean; 
}

export const StarRatings: React.FC<IStarRatingsProps> = (props) => {
    return (<div className="guestReviewDiv">
        <Paper 
        id="ratingsBox" 
        elevation={4} 
        className={`guestReviewDiv ${props.valid === false ? "invalidRating" : ""}`} 
        color="primary">
            <Rating
                disabled={props.disabled}
                aria-label="rating"
                name="simple-controlled"
                value={props.rating}
                onChange={(event, newValue) => {
                    props.setRating(newValue ?? 0);
                    props.resetValidation();
                }}
            />
        </Paper>
    </div>)
}