import React, {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {toast} from "../../stateManagement/atoms/toastAtoms";
import {IToast} from "../../definitions/app";
import "./styles/toast.css";

export const Toast = () => {
    const [newToast,] = useAtom(toast);
    const [queue, setQueue] = useState<IToast[]|[]>([]);
    const [popupVisible, setPopupVisible] = useState<boolean>(false);

    useEffect(() => {
        if(!!newToast.message) {
            const updatedQueue = [...queue, ...[newToast]]; // should not mutate state
            setQueue(updatedQueue);
            setPopupVisible(true);
        }        
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
        <section aria-label="feedback popup" className={`popup ${popupVisible ? "popupVisible" : "closed"}`}>
            <article className={`${queue[0]?.type} popup-content`}>
                <button 
                    aria-label="close modal" 
                    className={`modal-button ${popupVisible ? "popupVisible" : "closed"} ${queue[0]?.type}-button`} 
                    onClick={() => closeModal()}>X
                </button>
                <p>{queue[0]?.message}</p>
            </article>
        </section>
    )
}