import * as mockData from '../mockData/reviews.json'

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
) => mockData

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