
export const usePriceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency', 
    currency: 'USD',
    minimumIntegerDigits: 2,
});