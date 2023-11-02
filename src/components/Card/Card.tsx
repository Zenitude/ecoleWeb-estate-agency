import { CardContainer, CardImage, CardDescription, CardTitle, CardText } from "./Card.style"
import { CardProps } from "../../utils/types/CardProps";

export default function Card({src, alt, title, txt}: CardProps) {
    return (
        <CardContainer>
            <CardImage src={src} alt={alt} />
            <CardDescription>
                { title && <CardTitle>{title}</CardTitle>}
                <CardText>{txt}</CardText>
            </CardDescription>
        </CardContainer>
    )
}
