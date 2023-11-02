export type CarouselProps = {
    src: string;
    alt: string;
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>
    indexMin: number;
    indexMax: number;
}