import { useSelector } from "react-redux";
import Button from "./Button";

export default function BackButton({ onClick }) {
    const currentFormIndex = useSelector(
        ({ formStep }) => formStep.currentIndexForm
    );

    if (currentFormIndex === 0) {
        return null;
    }

    return (
        <Button onClick={onClick} type="button">
            Back
        </Button>
    );
}
