import { useSelector } from "react-redux";
import { myProfileInputs } from "../../constants/constants";
import { isValidForm } from "../../helpers/utils";
import FormWrapper from "../common/form-wrapper/FormWrapper";
import Input from "../common/input/Input";

export default function MyProfileStep() {
    const erorrs = useSelector((state) => state.formStep.error);

    return (
        <FormWrapper validateNext={() => isValidForm(myProfileInputs, erorrs)}>
            {myProfileInputs.map((input) => (
                <Input key={input.name} {...input} />
            ))}
        </FormWrapper>
    );
}
