export function toStringNumber(number: number, fractionDigits = 1) {
    return (
        (number >= 1000000000) ? `${(number / 1000000000).toFixed(fractionDigits)} млрд.` :
        (number >= 1000000) ? `${(number / 1000000).toFixed(fractionDigits)} млн.` :
        (number >= 1000) ? `${(number / 1000).toFixed(fractionDigits)} тыс.` :
        number
    );
}
