import BeneficicaryProfileStep from "../components/form-steps/BeneficicaryProfileStep";
import ContactStep from "../components/form-steps/ContactStep";
import MyProfileStep from "../components/form-steps/MyProfileStep";

export const steps = [
    {
        title: "My Profile",
        component: <MyProfileStep />,
    },
    {
        title: "Beneficicary Profile",
        component: <BeneficicaryProfileStep />,
    },
    {
        title: "Contact",
        component: <ContactStep />,
    },
];
