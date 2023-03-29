import {post} from '../../utils/apiHelper';
import {useMutation, useQueryClient} from 'react-query';
import { IReview } from "src/definitions/app";
import {useAtom} from "jotai";

const baseUrl = './';// import this


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
                console.log(data);
                // setToast({message: `Role ${data.name} updated`, type: 'success'});
            },
            onError: async (e: string) => {
                // setToast({message: e.message, type: 'error'})
            }
        })
}