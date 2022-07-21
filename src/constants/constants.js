import * as yup from "yup";

yup.addMethod(yup.number, "length", function (length, error) {
    return this.test(
        "length",
        error,
        (value) => value && value.toString().length === length
    );
});

yup.addMethod(yup.number, "maxLength", function (length, error) {
    return this.test(
        "maxLength",
        error,
        (value) => value && value.toString().length <= length
    );
});

export const myProfileInputs = [
    {
        title: "First name",
        require: true,
        name: "firstName",
        type: "text",
        validateSchema: yup
            .string()
            .required()
            .matches(/^[a-zA-Z]+$/, {
                message:
                    "First Name can not contain number and special character",
            }),
    },
    {
        title: "Midle name",
        require: false,
        name: "midleName",
        type: "text",
        validateSchema: yup.string().matches(/^[a-zA-Z]*$/, {
            message: "Midle name can not contain number and special character",
        }),
    },
    {
        title: "Last name",
        require: true,
        name: "lastName",
        type: "text",
        validateSchema: yup
            .string()
            .required()
            .matches(/^[a-zA-Z]*$/, {
                message:
                    "Last name can not contain number and special character",
            }),
    },
    {
        title: "Birthday",
        require: true,
        name: "birthday",
        type: "date",
        validateSchema: yup
            .date()
            .required()
            .max(new Date(), "Birthday need to less than  today"),
    },

    {
        title: "ID Card",
        require: true,
        name: "idCard",
        type: "number",
        validateSchema: yup
            .number()
            .required()
            .positive()
            .maxLength(10, "ID Card need to have less than 10 number"),
    },
    {
        title: "Phone",
        require: true,
        name: "phone",
        type: "number",
        validateSchema: yup
            .number()
            .required()
            .positive()
            .length(10, "Phone need to have 10 number"),
    },
    {
        title: "Monthly Savings",
        require: true,
        name: "monthlySavings",
        type: "number",
        validateSchema: yup.number().required(),
    },
];

export const beneficicaryProfileInputs = [
    {
        title: "First name",
        require: true,
        name: "beneficiaryFirstName",
        type: "text",
        validateSchema: yup
            .string()
            .required()
            .matches(/^[a-zA-Z]+$/, {
                message:
                    "First Name can not contain number and special character",
            }),
    },
    {
        title: "Midle name",
        require: false,
        name: "beneficiaryMidleName",
        type: "text",
        validateSchema: yup.string().matches(/^[a-zA-Z]*$/, {
            message: "Midle name can not contain number and special character",
        }),
    },
    {
        title: "Last name",
        require: true,
        name: "beneficiaryLastName",
        type: "text",
        validateSchema: yup
            .string()
            .required()
            .matches(/^[a-zA-Z]*$/, {
                message:
                    "Last name can not contain number and special character",
            }),
    },
    {
        title: "Birthday",
        require: true,
        name: "beneficiaryBirthday",
        type: "date",
        validateSchema: yup
            .date()
            .required()
            .max(new Date(), "Birthday need to less than  today"),
    },

    {
        title: "ID Card",
        require: true,
        name: "beneficiaryIdCard",
        type: "number",
        validateSchema: yup
            .number()
            .required()
            .positive()
            .maxLength(10, "ID Card need to have less than 10 number"),
    },
    {
        title: "Phone",
        require: true,
        name: "beneficiaryPhone",
        type: "number",
        validateSchema: yup
            .number()
            .required()
            .positive()
            .length(10, "Phone need to have 10 number"),
    },
];

export const relationships = [
    { key: "spouse", name: "Spouse" },
    { key: "children", name: "Children" },
    { key: "relatives", name: "Relatives" },
];
