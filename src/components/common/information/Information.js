import { useSelector } from "react-redux";
import { DetailInfor, InfoWrapper } from "./Information.styled";

export default function Information(title, inputs) {
    const data = useSelector(({ formStep }) => formStep.data);
    return (
        <InfoWrapper>
            <p>{title} </p>
            <div>
                {inputs.map((input) => (
                    <DetailInfor key={input.name}>
                        <span>{input.title}:</span>
                        <span>{data[input.name]}</span>
                    </DetailInfor>
                ))}
            </div>
        </InfoWrapper>
    );
}
