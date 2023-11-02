export const switchSlide = (
    e: React.MouseEvent, 
    current: number, 
    min: number, 
    max: number,
    set: React.Dispatch<React.SetStateAction<number>>
) => {
    const target = e.currentTarget;
    if(target.classList.contains('previous')) {
        let newIndex = current - 1;
        if(newIndex < min) { newIndex = max-1}
        set(newIndex);
    } else if(target.classList.contains('next')) {
        let newIndex = current + 1;
        newIndex = newIndex > max-1 ? min : newIndex;
        set(newIndex);
    }
}