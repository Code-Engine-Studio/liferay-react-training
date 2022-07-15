import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import FormWrapper from "../common/form-wrapper/FormWrapper";
import { updateDataField } from "../../redux/slices/formStepSlice";

const ContactStepWrapper = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 600;

    color: var(--color-dark-1);
    a {
        margin-left: 3px;
        display: inline-block;
        margin-bottom: 20px;
    }
`;

const AgreeInputWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    cursor: pointer;
    label {
        cursor: pointer;
    }
    input {
        font-size: 20px;
        width: 20px;
        height: 20px;
    }
`;

export default function ContactStep() {
    const argeeInputId = useId();
    const dispatch = useDispatch();
    const agreeSubmit = useSelector(
        ({ formStep }) => formStep.data.agreeSubmit
    );

    const onCheckboxChange = () => {
        dispatch(
            updateDataField({
                fieldName: "agreeSubmit",
                value: !agreeSubmit,
            })
        );
    };

    const validateForm = () => {
        return agreeSubmit;
    };
    return (
        <FormWrapper validateNext={validateForm}>
            <ContactStepWrapper>
                Please see the detailed contract
                <a href="https://www.chubb.com/content/dam/chubb-sites/chubb-com/personal/future-asset-management-universal-life/documents/pdf/easset_upload_file46289_1304437_e.pdf">
                    here
                </a>
                <AgreeInputWrapper>
                    <label htmlFor={argeeInputId}>
                        I agree to submit my information to the Insurance
                        Company after checking the online contract
                    </label>
                    <input
                        id={argeeInputId}
                        type="checkbox"
                        name="agreeSubmit"
                        checked={agreeSubmit}
                        onChange={onCheckboxChange}
                    />
                </AgreeInputWrapper>
            </ContactStepWrapper>
        </FormWrapper>
    );
}
