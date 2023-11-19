type Currency = {
    [x: string]: string
}

export const renderCurrency = (currency: Currency) => {
    return Object.keys(currency)
}