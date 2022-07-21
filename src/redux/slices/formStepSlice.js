import { createSlice } from "@reduxjs/toolkit";
import { relationships } from "../../constants/constants";
import { steps } from "../../constants/stepContants";

const initState = {
    data: {
        firstName: "",
        midleName: "",
        lastName: "",
        birthday: "",
        idCard: "",
        phone: "",
        monthlySavings: "",
        beneficiaryFirstName: "",
        beneficiaryMidleName: "",
        beneficiaryLastName: "",
        beneficiaryBirthday: "",
        beneficiaryIdCard: "",
        beneficiaryPhone: "",
        beneficiaryRelationship: relationships[0],
        agreeSubmit: false,
    },
    error: {
        firstName: "",
        midleName: "",
        lastName: "",
        birthday: "",
        idCard: "",
        phone: "",
        monthlySavings: "",
        beneficiaryFirstName: "",
        beneficiaryMidleName: "",
        beneficiaryLastName: "",
        beneficiaryBirthday: "",
        beneficiaryIdCard: "",
        beneficiaryPhone: "",
        beneficiaryRelationship: "",
        agreeSubmit: "",
    },
    currentIndexForm: 0,
};

const formStepSlice = createSlice({
    name: "formStep",
    initialState: initState,
    reducers: {
        choosePreForm(state) {
            if (state.currentIndexForm > 0) {
                state.currentIndexForm--;
            }
        },
        chooseNextForm(state) {
            if (state.currentIndexForm < steps.length - 1) {
                state.currentIndexForm++;
            }
        },
        chooseForm(state, { payload: index }) {
            if (state.currentIndexForm !== index) {
                state.currentIndexForm = index;
            }
        },
        updateDataField(state, { payload: { fieldName, value, error } }) {
            state.data[fieldName] = value;
            state.error[fieldName] = error;
        },

        updateBeneficiaryRelationship(state, { payload }) {
            state.data.beneficiaryRelationship = payload;
        },
    },
});

export default formStepSlice.reducer;
export const {
    chooseNextForm,
    choosePreForm,
    chooseForm,
    updateDataField,
    updateBeneficiaryRelationship,
} = formStepSlice.actions;
