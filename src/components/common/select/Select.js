import { useEffect, useRef, useState } from "react";
import { DropdownList, DropdownItem, DropdownWrapper } from "./Select.styled";
import { InputWrapper } from "../input-wrapper/InputWrapper";

export default function Select({
    title,
    options,
    selectedOption,
    setSelectedOption,
    require,
}) {
    const [showOption, setShowOption] = useState(false);
    const dropdownRef = useRef();

    const onSelectedOption = (option) => {
        setSelectedOption(option);
        setShowOption(false);
    };

    useEffect(() => {
        const closeDropdown = (event) => {
            if (!dropdownRef.current.contains(event.target)) {
                setShowOption(false);
            }
        };
        document.addEventListener("click", closeDropdown);
        return () => {
            document.removeEventListener("click", closeDropdown);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        return (
            <DropdownItem
                key={option.key}
                onClick={() => onSelectedOption(option)}
            >
                {option.name}
            </DropdownItem>
        );
    });

    return (
        <InputWrapper title={title} require={require}>
            <DropdownWrapper ref={dropdownRef}>
                <p onClick={() => setShowOption(!showOption)}>
                    {selectedOption?.name}
                </p>
                <DropdownList show={showOption}>{renderedOptions}</DropdownList>
            </DropdownWrapper>
        </InputWrapper>
    );
}
