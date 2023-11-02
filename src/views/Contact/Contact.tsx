import { ContactContainer } from "./Contact.style";
import Card from "../../components/Card/Card";
import Field from "../../components/Field/Field";
import Footer from "../../components/Footer/Footer";
import { cardsContact } from "../../utils/datas/contact";

export default function Contact() {
    return (
        <>
            <ContactContainer>
                <h1>Entrons en contact !</h1>
                <p>Contactez-nous par mail, téléphone ou par la poste</p>
                <div className="cards">
                    {
                        cardsContact.map((contact, index) => <Card key={index} src={contact.src} alt={contact.alt} txt={contact.txt} />)
                    }
                </div>
                <form>
                    <p>Parlez-nous de vos envies.</p>
                    <Field type={"text"} id={"firstname"} label={"Votre prénom"} holder={"Votre prénom"} />
                    <Field type={"text"} id={"lastname"} label={"Votre nom"} holder={"Votre nom"} />
                    <Field type={"tel"} id={"phone"} label={"Votre téléphone"} holder={"Votre téléphone"} />
                    <fieldset>
                        <p>Type de bien : </p>
                        <Field type={"checkbox"} id={"rent"} label={"Louer"} />
                        <Field type={"checkbox"} id={"buy"} label={"Acheter"} />
                    </fieldset>
                    <Field type={"area"} id={"message"} label={"Message"} holder={"Votre message"}/>
                    <button>Envoyer</button>
                </form>
            </ContactContainer>
            <Footer />
        </>
    )
}
