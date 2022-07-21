export function getCurrentDateFormated() {
    const now = new Date();

    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

export const isValidForm = (inputs, error) => {
    return inputs.every((input) => !error[input.name]);
};
