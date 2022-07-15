import { useSelector } from "react-redux";
import { myProfileInputs } from "../../utils/constants";
import { validRequireInput } from "../../utils/utils";
import FormWrapper from "../common/form-wrapper/FormWrapper";
import Input from "../common/input/Input";

export default function MyProfileStep() {
    const formData = useSelector((state) => state.formStep.data);

    const renderedInput = myProfileInputs.map((input) => (
        <Input key={input.name} {...input} />
    ));

    return (
        <FormWrapper
            validateNext={() => validRequireInput(myProfileInputs, formData)}
        >
            {renderedInput}
        </FormWrapper>
    );
}
