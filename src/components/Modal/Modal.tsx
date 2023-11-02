import { useEffect } from "react";
import { ModalConstainer, Previous, Next, CloseModal } from "./Modal.style";
import { left, right } from "../../assets";
import { datasGallery } from "../../utils/datas/gallery";
import { ModalProps } from "../../utils/types/ModalProps";
import { switchImage } from "../../utils/functions/switchImage";

export default function Modal({current, set, max, show, setShow}: ModalProps) {
    useEffect(() => {
        const dialog = document.querySelector('dialog');
        if(show) { dialog?.showModal() }
        else { dialog?.close() }
    }, [show]);

    return (
        <ModalConstainer>
            <CloseModal className="closeModal" onClick={() => setShow(false)}>X</CloseModal>
            <img src={datasGallery[current].src} alt={datasGallery[current].alt} />
            <div className="buttons">
                <Previous className="previous" onClick={(e) => switchImage(e, current, set, max)}><img src={left} alt="previous image" /></Previous>
                <Next className="next" onClick={(e) => switchImage(e, current, set, max)}><img src={right} alt="next image"/></Next>
            </div>
        </ModalConstainer>
    )
}
