import React, {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {toast} from "../../stateManagement/atoms/toastAtoms";
import {IToast} from "../../definitions/app"

export const Toast = () => {
    const [newToast,] = useAtom(toast);
    const [queue, setQueue] = useState<IToast[]>([]);
    const [popupVisible, setPopupVisible] = useState<boolean>(false);

    useEffect(() => {
        const updatedQueue = [...queue, newToast]; // should not mutate state
        setQueue(updatedQueue);
        setPopupVisible(true);
    }, [newToast.message]);// listens for message changes

    const closeModal = () => {
        if (queue.length === 1) {
            setQueue([]);
            setPopupVisible(false);
        }
        else {
            const newQueue = [...queue.slice(1)];
            setQueue(newQueue);
        }
    }

    return (
        <section className={popupVisible ? "popupVisible" : ""}>
            <button aria-label="close modal" onClick={() => closeModal()}>X</button>
            <p>{}</p>
            <button></button>
        </section>
    )
}