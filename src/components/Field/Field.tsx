import { FieldContainer, Label, Input, Area } from "./Field.style";
import { FieldProps } from "../../utils/types/FieldProps";


export default function Field({type, id, label, holder}: FieldProps) {
  return (
    <FieldContainer>
      <Label htmlFor={id}>{label}</Label>
      {
        type === 'area'
        ? (<Area placeholder={holder ? holder : ''}></Area>)
        : (<Input type={type} id={id} name={id} placeholder={holder ? holder : ''}/>)
      }
    </FieldContainer>
  )
}
