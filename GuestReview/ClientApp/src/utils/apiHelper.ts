import { IReview } from 'src/definitions/app';

const withHeaders = (headers: {}) => {}////// add headers here

export const post = async <T = unknown>(
    url: string,
    body: any,
    consumerConfig?: {}
) =>
    "Thank you for your feedback"
    // axios.post<T>(url, body, { ...consumerConfig, ...headers })
    //     .then((response) => { return response; })
    //     .catch((error) => {
    //         throw error;
    //     });


export const get = async <T>(
    url: string,
    params?: {},
    headers = {}, 
    config = {}
) => [
    {
        title: "Beautiful Resort",
        rating: 5,
        summary: "We had a fantastic time at the resort"
    },
    {
        title: "We will definately be back",
        rating: 5,
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        title: "My family loved it",
        rating: 4,
        summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
]

//     return axios.get(url, {
//         params: params ?? {},
//         ...axiosConfig, ...config,
//         headers: withHeaders(headers)
//     })
//         .then((response) => {
//             return response;
//         })
//         .catch(async e => {
//             throw e;
//         });
// }