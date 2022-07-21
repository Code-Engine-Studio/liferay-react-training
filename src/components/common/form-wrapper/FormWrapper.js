import { useDispatch } from "react-redux";
import {
    chooseNextForm,
    choosePreForm,
} from "../../../redux/slices/formStepSlice";

import { ButtonWrapper, FormContainer } from "./FormWrapper.styled";
import BackButton from "../button/BackButton";
import NextButton from "../button/NextButton";

export default function FormWrapper({ validateNext, children }) {
    const dispatch = useDispatch();

    const onPreStepClick = () => {
        dispatch(choosePreForm());
    };

    const onNexStepClick = () => {
        dispatch(chooseNextForm());
    };

    return (
        <FormContainer>
            {children}
            <ButtonWrapper>
                <BackButton onClick={onPreStepClick} />
                <NextButton
                    onClick={onNexStepClick}
                    validateNext={validateNext}
                />
            </ButtonWrapper>
        </FormContainer>
    );
}
