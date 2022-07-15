import { useDispatch, useSelector } from "react-redux";
import {
    chooseNextForm,
    choosePreForm,
} from "../../../redux/slices/formStepSlice";
import { steps } from "../../../utils/stepContants";
import Button from "../button/Button";
import { ButtonWrapper, FormContainer } from "./FormWrapper.styled";

export default function FormWrapper({ validateNext, validatePre, children }) {
    const dispatch = useDispatch();

    const currentFormIndex = useSelector(
        ({ formStep }) => formStep.currentIndexForm
    );

    const onPreStepClick = () => {
        if (!validatePre || validatePre()) {
            dispatch(choosePreForm());
        }
    };

    const onNexStepClick = () => {
        if (!validateNext || validateNext()) {
            dispatch(chooseNextForm());
        }
    };

    return (
        <FormContainer>
            {children}
            <ButtonWrapper>
                {currentFormIndex !== 0 ? (
                    <Button onClick={onPreStepClick} type="button">
                        Back
                    </Button>
                ) : (
                    ""
                )}

                <Button
                    onClick={onNexStepClick}
                    type={
                        currentFormIndex + 1 === steps.length
                            ? "submit"
                            : "button"
                    }
                    style={{ marginLeft: "10px" }}
                    primary
                    disabled={!validateNext()}
                >
                    {currentFormIndex + 1 === steps.length
                        ? "Submit"
                        : "Next Step"}
                </Button>
            </ButtonWrapper>
        </FormContainer>
    );
}
