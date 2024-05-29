import { useController } from "react-hook-form";
import InputMask from 'react-input-mask';

export default function Input(props){
    const { field, fieldState } = useController(props);

    const cleanPhoneNumber = (phoneNumber) => {
        // Remove todos os caracteres não numéricos e o caractere '_'
        return phoneNumber.replace(/[_\D]/g, '');
    };

    const handleChange = (event) => {
        const inputPhoneNumber = event.target.value;
        const cleanedPhoneNumber = cleanPhoneNumber(inputPhoneNumber);
        field.onChange(cleanedPhoneNumber);
    };

    return(
        <div className="flex flex-col gap-1">
            <span className="font-medium text-sm text-white">{props.inputTitle}</span>
            {props.mask ? (
                <InputMask
                    {...field}
                    mask={props.mask}
                    onChange={handleChange} // Use handleChange para remover o caractere '_' antes de passar o valor para o campo do formulário
                    className="w-[320px] border rounded-sm p-3"
                />
            ) : (
                <input 
                    {...field}
                    type={props.name == "password" ? "password" :""}
                    className="w-full bg-transparent border border-gray-100/20  rounded-sm p-3"
                    style={fieldState.error && {border: '1px solid #F00'}}
                />
            )}
            {fieldState.error && <span className="text-xs text-red-600">{fieldState.error.message}</span>}
        </div>
    ) 
}
