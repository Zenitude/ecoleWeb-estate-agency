import { useState } from "react";
import { GalleryContainer } from "./Gallery.style";
import Footer from "../../components/Footer/Footer";
import { datasGallery } from "../../utils/datas/gallery";
import Modal from "../../components/Modal/Modal";

export default function Gallery() {
    const [ index, setIndex ] = useState(0);
    const [ showModal, setShowModal ] = useState(false);

    return (
        <>
            <GalleryContainer>
                <h1>Galerie Héraclès</h1>
                <Modal current={index} set={setIndex} max={datasGallery.length} show={showModal} setShow={setShowModal} />
                <div className="images">
                    {
                        datasGallery.map((image, index) => (
                            <article key={`${index}-${image.name}`}>
                                <button onClick={() => setShowModal(true)}>
                                    <p>
                                        <span>{image.name}</span>
                                        <span>{image.value.toLocaleString('it-CH')}</span>
                                    </p>
                                    <img src={image.src} alt={image.alt} />
                                </button>
                            </article>
                        ))
                    }
                </div>
            </GalleryContainer>
            <Footer />
        </>
    )
}
