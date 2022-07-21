import { useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDataField } from "../../../redux/slices/formStepSlice";
import { InputWrapper } from "../input-wrapper/InputWrapper";

export default function Input({
    title,
    require,
    name,
    validateSchema,
    ...otherPorps
}) {
    const id = useId();
    const dispatch = useDispatch();
    const value = useSelector(({ formStep }) => formStep.data[name]);
    const error = useSelector(({ formStep }) => formStep.error[name]);
    const [touched, setTouched] = useState(false);

    const onInputChange = async (value) => {
        let errorMessage = "";
        try {
            await validateSchema.validate(value);
        } catch (error) {
            errorMessage = error.message;
        }
        dispatch(
            updateDataField({
                fieldName: name,
                value,
                error: errorMessage,
            })
        );
    };

    const onLeaveFocusInput = () => {
        setTouched(true);
    };

    return (
        <InputWrapper
            title={title}
            error={error}
            inputId={id}
            require={require}
            touched={touched}
        >
            <input
                id={id}
                name={name}
                value={value}
                {...otherPorps}
                onChange={(event) => onInputChange(event.target.value)}
                onBlur={onLeaveFocusInput}
            />
        </InputWrapper>
    );
}
