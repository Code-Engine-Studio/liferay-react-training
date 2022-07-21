import { useDispatch, useSelector } from "react-redux";
import { chooseForm } from "../../../redux/slices/formStepSlice";
import { steps } from "../../../constants/stepContants";
import { Step, StepContainer } from "./Steps.styled";

export default function Steps() {
    const dispatch = useDispatch();
    const currentIndexForm = useSelector(
        (state) => state.formStep.currentIndexForm
    );
    const renderSteps = steps.map((step, index) => {
        return (
            <Step
                key={step.title}
                isActive={index === currentIndexForm}
                onClick={() => dispatch(chooseForm(index))}
            >
                <p>{index + 1}</p>
                <p>{step.title}</p>
            </Step>
        );
    });
    return <StepContainer>{renderSteps}</StepContainer>;
}
