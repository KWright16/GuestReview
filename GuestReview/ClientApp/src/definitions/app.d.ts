export interface IReview {
    title: string|null;
    rating: number;
    summary: string|null;
}

export interface IToastTypes {
    error: "error",
    warning: "warning",
    success: "success"
}

interface IToast {
    message: string;
    type: keyof IToastTypes | null;
}

export interface IValidated {
    title: boolean;
    rating: boolean;
    summary: boolean;
}