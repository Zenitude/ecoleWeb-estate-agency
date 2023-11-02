import { Link } from "react-router-dom";
import { ServicesContainer } from "./Services.style";
import { cardsServices } from "../../utils/datas/services";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

export default function Services() {
    
    return (
        <>
            <ServicesContainer>
                <h1>Voici ce que nous proposons</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam atque quos obcaecati esse aspernatur ea praesentium non quaerat, iure rerum, consectetur, magni nulla totam enim est inventore eligendi repellat dignissimos repudiandae maiores quas.
                </p>
                <p>
                    Dolores, neque at dolor tempore, voluptate similique inventore magnam omnis illo repellat perspiciatis doloremque atque maxime odio.<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nihil, iure sit qui soluta obcaecati assumenda consequatur illum praesentium aspernatur ducimus, odio voluptates quae deleniti beatae sint minima libero eveniet.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi fuga itaque ipsam ea, qui obcaecati laboriosam quasi doloremque doloribus est, possimus ducimus commodi quam voluptatum velit excepturi dolor modi, placeat nemo. Voluptatem corporis, natus dolore ab qui ipsa totam consectetur.
                </p>
                <div className="cards">
                    {
                        cardsServices.map((service, index) => <Card key={`${index}-${service.title}`} src={service.src} alt={service.alt} title={service.title} txt={service.txt}/>)
                    }
                </div>
                <Link to={"/contact"}>Rentrons en contact</Link>
            </ServicesContainer>
            <Footer />
        </>
    )
}
