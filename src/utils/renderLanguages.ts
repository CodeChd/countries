type Languages = {
    [key: string]: string;
};
export const renderLanguages = (languages: Languages) => {
    return Object.values(languages).map((val, index) => (
        `${val}${index !== Object.keys(languages).length - 1 ? ", " : ""}`
    ))
}