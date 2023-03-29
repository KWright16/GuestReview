import { atom } from "jotai";
import { IToast } from "src/definitions/app";

export const toast = atom<IToast>({message: '', type: null});