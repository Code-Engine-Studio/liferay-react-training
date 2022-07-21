import headlessAPI from "./headlessAPIConfig";

export const createInsuranceProfile = async (input) => {
    const { data } = await headlessAPI.post("/o/c/insuranceprofiles/", {
        ...input,
    });
    return data;
};
