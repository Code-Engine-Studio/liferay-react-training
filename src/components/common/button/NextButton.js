import { useSelector } from "react-redux";
import { steps } from "../../../constants/stepContants";
import Button from "./Button";

export default function NextButton({ onClick, validateNext }) {
    const currentFormIndex = useSelector(
        ({ formStep }) => formStep.currentIndexForm
    );

    return (
        <Button
            onClick={onClick}
            type={currentFormIndex + 1 === steps.length ? "submit" : "button"}
            style={{ marginLeft: "10px" }}
            primary
            disabled={!validateNext()}
        >
            {currentFormIndex + 1 === steps.length ? "Submit" : "Next Step"}
        </Button>
    );
}
