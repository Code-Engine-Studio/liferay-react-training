import React, { useState } from "react";
import styled from "styled-components";
import Steps from "../common/steps/Steps";
import { useSelector } from "react-redux";
import { steps } from "../../constants/stepContants";
import SuccessfulPage from "./SuccessfulPage";
import { createInsuranceProfile } from "../../service/insuranceProfilesService";

const FormStepWrapper = styled.div`
    background-color: var(--white-color);
    border-radius: 20px;

    > p {
        color: var(--dark-color);
        text-align: center;
        font-size: 25px;
        font-weight: 700;
    }
`;

export default function FormStep() {
    const [success, setSuccess] = useState(false);
    const data = useSelector((state) => state.formStep);
    const currentIndexForm = useSelector(
        (state) => state.formStep.currentIndexForm
    );

    const submitForm = async () => {
        await createInsuranceProfile(data.data);
        setSuccess(true);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        submitForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <FormStepWrapper>
                <p>Insurance Profile Submission</p>
            </FormStepWrapper>
            {success ? (
                <SuccessfulPage />
            ) : (
                <>
                    <Steps />
                    {
                        steps.find((step, index) => index === currentIndexForm)
                            .component
                    }
                </>
            )}
        </form>
    );
}
