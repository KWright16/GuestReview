
import { IReview } from "src/definitions/app";
import {get} from "../../utils/apiHelper";
import { useQuery } from "react-query";

const baseUrl = './';// import this

const getReviewsRoute = `${baseUrl}/GuestReviewData/GetGuestReview`
export const useGetReviewsQuery = () => {
        // const [, setToast] = useAtom(toast);
        return useQuery('reviews', async () => {
            const res: IReview[] = await get(getReviewsRoute);
            console.log(res)
            return res;
    }, {
        onError: (e) => {
            // setToast({message: 'Could not fetch assets', type: "error"})
        }
    })
}