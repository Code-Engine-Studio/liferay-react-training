

export function getCurrentDateFormated() {
    const now = new Date();

    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

export const validRequireInput = (inputs, data) => {
    return inputs.every((input) => {
        if (!input.require) {
            return true;
        }
        return input.require && data[input.name];
    });
};
