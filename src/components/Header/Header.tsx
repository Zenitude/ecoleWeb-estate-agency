import { HeaderContainer, Navigation } from "./Header.style";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <HeaderContainer>
            <p>Menu</p>
            <Navigation>
                <NavLink to={"/"}>Accueil</NavLink>
                <NavLink to={"/services"}>Informations</NavLink>
                <NavLink to={"/gallery"}>Tous nos biens</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
            </Navigation>
        </HeaderContainer>
    )
}
