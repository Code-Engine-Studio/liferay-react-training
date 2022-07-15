import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    updateDataField,
    updateErrorDataField,
} from "../../../redux/slices/formStepSlice";
import { InputWrapper } from "../input-wrapper/InputWrapper";

export default function Input({ title, require, name, ...otherPorps }) {
    const id = useId();
    const dispatch = useDispatch();
    const value = useSelector(({ formStep }) => formStep.data[name]);
    const error = useSelector(({ formStep }) => formStep.error[name]);

    const onInputChange = (event) => {
        dispatch(
            updateDataField({
                fieldName: name,
                value: event.target.value,
            })
        );
    };

    const onLeaveFocusInput = (event) => {
        if (require && !event.target.value) {
            dispatch(
                updateErrorDataField({
                    fieldName: name,
                    error: `${title} is require`,
                })
            );
        } else {
            dispatch(
                updateErrorDataField({
                    fieldName: name,
                    error: ``,
                })
            );
        }
    };

    return (
        <InputWrapper
            title={title}
            error={error}
            inputId={id}
            require={require}
        >
            <input
                id={id}
                name={name}
                value={value}
                {...otherPorps}
                onChange={onInputChange}
                onBlur={onLeaveFocusInput}
            />
        </InputWrapper>
    );
}
