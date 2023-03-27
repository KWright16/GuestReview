///////////////////////// import react query and initial setup
import {post} from '../../utils/apiHelper';
import {useMutation, useQueryClient} from 'react-query';

const baseUrl = './';// import this

import { IReview } from "src/definitions/app";

const postReviewRoute = `${baseUrl}/GuestReviewData/CreateGuestReview`;

export const useUpdateUserRoleMutation = () => {
    // const [,setToast] = useAtom(toast);
    const queryClient = useQueryClient();
    return useMutation(async (review: IReview) => {
            const res:string = await post(postReviewRoute, review);
            return res;
        },
        {
            onSuccess: async (data, params) => {
                await queryClient.invalidateQueries('reviews');
                // setToast({message: `Role ${data.name} updated`, type: 'success'});
            },
            onError: async (e: string) => {
                // setToast({message: e.message, type: 'error'})
            }
        })
}