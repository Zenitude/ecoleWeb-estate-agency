export const switchImage = (
    e: React.MouseEvent, 
    current: number, 
    set: React.Dispatch<React.SetStateAction<number>>, 
    max: number
) => {
    const target = e.currentTarget;
    if(target.classList.contains('previous')) {
        let newIndex = current - 1;
        if(newIndex < 0) { newIndex = max-1}
        set(newIndex);
    } else if(target.classList.contains('next')) {
        let newIndex = current + 1;
        if(newIndex > max-1) { newIndex = 0}
        set(newIndex);
    }
}