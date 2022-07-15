import { InputHeader, InputLabel } from "./InputWrapper.styled";

export function InputWrapper({ title, error, children, inputId, require }) {
    return (
        <InputLabel isValid={!error}>
            <InputHeader>
                <label htmlFor={inputId}>
                    {title}
                    {require ? <span>*</span> : ""}
                </label>
                {error ? <p>{error}</p> : ""}
            </InputHeader>
            {children}
        </InputLabel>
    );
}
