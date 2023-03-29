import {post} from '../../utils/apiHelper';
import {useMutation, useQueryClient} from 'react-query';
import { IReview } from "src/definitions/app";
import {useAtom} from "jotai";
import {toast} from "../atoms/toastAtoms";

const baseUrl = './';// import this


const postReviewRoute = `${baseUrl}/GuestReviewData/CreateGuestReview`;

export const useUpdateUserRoleMutation = () => {
    const [,setToast] = useAtom(toast);
    const queryClient = useQueryClient();
    return useMutation(async (review: IReview) => {
            const res:string = await post(postReviewRoute, review);
            return res;
        },
        {
            onSuccess: async (data, params) => {
                await queryClient.invalidateQueries('reviews');
                console.log(data);
                setToast({message: "Thank you for your review", type: 'success'});
            },
            onError: async (e: string) => {
                setToast({message: "Something went wrong while submitting your review. " +
                "Your feedback is important to us. You can try again or contact us to get this resolved.", type: 'error'})
            }
        })
}