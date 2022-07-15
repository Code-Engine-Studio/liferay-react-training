

export const myProfileInputs = [
    {
        title: "First name",
        require: true,
        name: "firstName",
        type: "text",
    },
    {
        title: "Midle name",
        require: false,
        name: "midleName",
        type: "text",
    },
    {
        title: "Last name",
        require: true,
        name: "lastName",
        type: "text",
    },
    {
        title: "Birthday",
        require: true,
        name: "birthday",
        type: "date",
    },

    {
        title: "ID Card",
        require: true,
        name: "idCard",
        type: "number",
    },
    {
        title: "Phone",
        require: true,
        name: "phone",
        type: "number",
    },
    {
        title: "Monthly Savings",
        require: true,
        name: "monthlySavings",
        type: "number",
    },
];

export const beneficicaryProfileInputs = [
    {
        title: "First name",
        require: true,
        name: "beneficiaryFirstName",
        type: "text",
    },
    {
        title: "Midle name",
        require: false,
        name: "beneficiaryMidleName",
        type: "text",
    },
    {
        title: "Last name",
        require: true,
        name: "beneficiaryLastName",
        type: "text",
    },
    {
        title: "Birthday",
        require: true,
        name: "beneficiaryBirthday",
        type: "date",
    },

    {
        title: "ID Card",
        require: true,
        name: "beneficiaryIdCard",
        type: "number",
    },
    {
        title: "Phone",
        require: true,
        name: "beneficiaryPhone",
        type: "number",
    },
];

export const relationships = [
    { key: "spouse", name: "Spouse" },
    { key: "children", name: "Children" },
    { key: "relatives", name: "Relatives" },
];
