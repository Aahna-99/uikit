export const debounce = (fn: any, time: number) => {
    let timeout: NodeJS.Timeout;

    return function () {
        const functionCall = () => fn.apply(this, arguments);

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    };
};
