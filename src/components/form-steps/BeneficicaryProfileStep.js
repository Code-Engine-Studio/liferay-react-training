import { useDispatch, useSelector } from "react-redux";
import { updateBeneficiaryRelationship } from "../../redux/slices/formStepSlice";
import {
    beneficicaryProfileInputs,
    relationships,
} from "../../constants/constants";
import { isValidForm } from "../../helpers/utils";
import FormWrapper from "../common/form-wrapper/FormWrapper";
import Input from "../common/input/Input";
import Select from "../common/select/Select";

export default function BeneficicaryProfileStep() {
    const formData = useSelector((state) => state.formStep.data);
    const errors = useSelector((state) => state.formStep.error);
    const dispatch = useDispatch();

    const renderedInput = beneficicaryProfileInputs.map((input) => (
        <Input key={input.name} {...input} />
    ));

    return (
        <FormWrapper
            validateNext={() => isValidForm(beneficicaryProfileInputs, errors)}
        >
            {renderedInput}
            <Select
                options={relationships}
                require
                title="Relationship"
                selectedOption={formData.beneficiaryRelationship}
                setSelectedOption={(relationship) =>
                    dispatch(updateBeneficiaryRelationship(relationship))
                }
            />
        </FormWrapper>
    );
}
