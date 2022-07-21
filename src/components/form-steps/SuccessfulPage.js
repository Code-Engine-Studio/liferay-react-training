import styled from "styled-components";
import {
    beneficicaryProfileInputs,
    myProfileInputs,
} from "../../constants/constants";
import Information from "../common/information/Information";

const SuccessfulPageWrapper = styled.div`
    max-width: 450px;
    margin: 0 auto;
`;

export default function SuccessfulPage() {
    return (
        <SuccessfulPageWrapper>
            <Information title="My Profile" inputs={myProfileInputs} />
            <Information
                title="Beneficicary Profile"
                inputs={beneficicaryProfileInputs}
            />
        </SuccessfulPageWrapper>
    );
}
