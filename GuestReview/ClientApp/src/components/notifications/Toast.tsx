import React, {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {toast} from "../../stateManagement/atoms/toastAtoms";
import {IToast} from "../../definitions/app";
import "./styles/toast.css";

export const Toast = () => {
    const [newToast,] = useAtom(toast);
    const [queue, setQueue] = useState<IToast[]|[]>([]);
    const [popupVisibleClass, setPopupVisibleClass] = useState<string>("closed");
    const messageType = queue[0]?.type;

    useEffect(() => {
        if(!!newToast.message) {
            const updatedQueue = [...queue, ...[newToast]]; // should not mutate state
            setQueue(updatedQueue);
            setPopupVisibleClass("popupOpen");
        }        
    }, [newToast.message]);// listens for message changes

    const closeModal = () => {
        if (queue.length === 1) {
            setQueue([]);
            setPopupVisibleClass("closed");
        }
        else {
            const newQueue = [...queue.slice(1)];
            setQueue(newQueue);
        }
    }

    return (
        <section aria-label="feedback popup" className={`popup ${popupVisibleClass}`}>
            <article className={`${messageType} popup-content`}>
                <button 
                    aria-label="close modal" 
                    className={`modal-button ${popupVisibleClass} ${messageType}-button`} 
                    onClick={() => closeModal()}>X
                </button>
                <p>{queue[0]?.message}</p>
            </article>
        </section>
    )
}