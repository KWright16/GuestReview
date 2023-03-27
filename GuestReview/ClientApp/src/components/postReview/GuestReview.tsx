import React, {ChangeEvent, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Fab} from "@mui/material";
import {ArrowUpward} from "@mui/icons-material";
import {StarRatings} from "./StarRatings";
import {useUpdateUserRoleMutation} from '../../stateManagement/mutations/usePostReviewMutation';
import "./styles/guestReview.css";

export const GuestReview = () => {
    const [rating, setRating] = useState<number>(0);
    const [title, setTitle] = useState<string|undefined>();
    const [summary, setSummary] = useState<string|undefined>();
    const mobile:boolean = window.screen.width < 500;
    const postReview = useUpdateUserRoleMutation();

    const validateFields = () => {
        //////////// display error and validation fields
    }

    return (
        <div className='guestReviewDiv'>
            <h1>Leave a Review</h1>
    
            <div className='guestReviewDiv'>
                <TextField 
                    aria-label="title" 
                    label="Title"
                    required
                    fullWidth
                    value={title}
                    onChange={(e:ChangeEvent) => console.log(e)} //setTitle(e)}////////////////////check this
                />
            </div>
            <p>How was your stay?</p>
            
            <StarRatings rating={rating} setRating={setRating}/>
            <TextField
                aria-label="review"
                label="Summary"
                multiline
                fullWidth
                maxRows={7}
                minRows={mobile? 2 : 4}
            />
            <div className='guestReviewDiv'>                
                <Fab id="buttonSubmit" variant="extended" color="secondary" onClick={() => {
                        validateFields();
                        postReview.mutate({title, rating, summary})
                    }}>
                    <ArrowUpward sx={{ mr: 1 }} />
                    Submit
                </Fab>
            </div>
        </div>
    );
}
