export interface IReview {
    title: string|null;
    rating: number;
    summary: string|null;
}

export interface IMessageTypes {
    error: "error",
    warning: "warning",
    success: "success"
}

export interface IToast {
    message: string;
    type: IMessageTypes
}

export interface IValidated {
    title: boolean;
    rating: boolean;
    summary: boolean;
}