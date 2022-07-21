import { InputHeader, InputLabel } from "./InputWrapper.styled";

export function InputWrapper({
    title,
    error,
    children,
    inputId,
    touched,
    require,
}) {
    return (
        <InputLabel isValid={!error} touched={touched}>
            <InputHeader>
                <label htmlFor={inputId}>
                    {title}
                    {require ? <span>*</span> : ""}
                </label>
                {error && touched ? <p>{error}</p> : ""}
            </InputHeader>
            {children}
        </InputLabel>
    );
}
