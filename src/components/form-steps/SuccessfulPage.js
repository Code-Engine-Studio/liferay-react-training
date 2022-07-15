import { useSelector } from "react-redux";
import styled from "styled-components";
import {
    beneficicaryProfileInputs,
    myProfileInputs,
} from "../../utils/constants";

const SuccessfulPageWrapper = styled.div`
    max-width: 450px;
    margin: 0 auto;
`;

const InfoWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid var(--color-dark-2);
    > p {
        font-weight: 700;
        font-size: 25px;
        color: var(--color-dark-1);
        width: 50%;
    }

    > div {
        margin-top: 5px;
    }
`;
const DetailInfor = styled.div`
    margin-bottom: 10px;
    span:nth-of-type(1) {
        font-weight: 600;
        margin-right: 5px;
        font-size: 17px;
        color: var(--color-dark-1);
    }
    span:last-of-type {
        font-weight: 600;
        margin-right: 5px;
        font-size: 15px;
        color: var(--color-dark-1);
    }
`;

export default function SuccessfulPage() {
    const data = useSelector(({ formStep }) => formStep.data);
    const renderMyProfileInfor = (
        <InfoWrapper>
            <p>My Profile</p>
            <div>
                {myProfileInputs.map((input) => (
                    <DetailInfor key={input.name}>
                        <span>{input.title}:</span>
                        <span>{data[input.name]}</span>
                    </DetailInfor>
                ))}
            </div>
        </InfoWrapper>
    );
    const renderBeneficiaryProfileInfor = (
        <InfoWrapper>
            <p>Beneficicary Profile</p>
            <div>
                {beneficicaryProfileInputs.map((input) => (
                    <DetailInfor key={input.name}>
                        <span>{input.title}:</span>
                        <span>{data[input.name]}</span>
                    </DetailInfor>
                ))}
            </div>
        </InfoWrapper>
    );
    return (
        <SuccessfulPageWrapper>
            {renderMyProfileInfor}
            {renderBeneficiaryProfileInfor}
        </SuccessfulPageWrapper>
    );
}
