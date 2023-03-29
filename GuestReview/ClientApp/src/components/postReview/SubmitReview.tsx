import React, {ChangeEvent, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Fab} from "@mui/material";
import {ArrowUpward} from "@mui/icons-material";
import {StarRatings} from "./StarRatings";
import {useUpdateUserRoleMutation} from '../../stateManagement/mutations/usePostReviewMutation';
import { IValidated } from 'src/definitions/app';
import "./styles/guestReview.css";

export const SubmitReview = () => {
    const [rating, setRating] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [summary, setSummary] = useState<string>("");
    const mobile:boolean = window.screen.width < 500;
    const postReview = useUpdateUserRoleMutation();
    const [valid, setValid] = useState<IValidated>({} as IValidated)

    const validateFields = () => {
        setValid({title: !!title, rating: !!rating, summary: !!summary});        
        return !!title && !!rating && !!summary;
    }

    return (
        <div className='guestReviewDiv'>
            <h1>Leave a Review</h1>
    
            <div className='guestReviewDiv'>
                <TextField 
                    error={valid.title === false}
                    helperText={valid.title === false ? "Please enter a title" : ""}
                    aria-label="title" 
                    label="Title"
                    required
                    fullWidth
                    value={title}
                    onChange={({target}) => {
                        setTitle(target.value);
                        setValid({...valid, title: true});
                    }}
                />
            </div>
            <p>How was your stay?</p>
            
            <StarRatings rating={rating} setRating={setRating} valid={valid.rating} resetValidation={() => setValid({...valid, rating: true})} />
            <TextField
                error={valid.summary === false}                
                helperText={valid.summary === false ? "Please could you provide some more detail?" : ""}
                aria-label="review"
                label="Summary"
                multiline
                fullWidth
                maxRows={7}
                minRows={mobile? 2 : 4}
                onChange={({target}) => {
                    setSummary(target.value);
                    setValid({...valid, summary: true});
                }}
            />
            <div className='guestReviewDiv'>                
                <Fab id="buttonSubmit" variant="extended" color="secondary" onClick={() => {
                        if(validateFields()) {
                            postReview.mutate({title, rating, summary})
                        }
                    }}>
                    <ArrowUpward sx={{ mr: 1 }} />
                    Submit
                </Fab>
            </div>
        </div>
    );
}
