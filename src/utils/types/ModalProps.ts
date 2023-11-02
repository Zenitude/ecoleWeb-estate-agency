export type ModalProps = {
    current: number;
    set: React.Dispatch<React.SetStateAction<number>>;
    max: number;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}