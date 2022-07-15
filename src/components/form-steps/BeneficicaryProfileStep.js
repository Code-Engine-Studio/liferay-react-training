import { useDispatch, useSelector } from "react-redux";
import { updateBeneficiaryRelationship } from "../../redux/slices/formStepSlice";
import {
    beneficicaryProfileInputs,
    relationships,
} from "../../utils/constants";
import { validRequireInput } from "../../utils/utils";
import FormWrapper from "../common/form-wrapper/FormWrapper";
import Input from "../common/input/Input";
import Select from "../common/select/Select";

export default function BeneficicaryProfileStep() {
    const formData = useSelector((state) => state.formStep.data);
    const dispatch = useDispatch();

    const renderedInput = beneficicaryProfileInputs.map((input) => (
        <Input key={input.name} {...input} />
    ));

    return (
        <FormWrapper
            validateNext={() =>
                validRequireInput(beneficicaryProfileInputs, formData)
            }
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
