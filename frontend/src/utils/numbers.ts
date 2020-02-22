export function toStringNumber(number: number, fractionDigits = 1) {
    return (
        (number >= 1000000000) ? `${(number / 1000000000).toFixed(fractionDigits)}B` :
        (number >= 1000000) ? `${(number / 1000000).toFixed(fractionDigits)}M` :
        (number >= 1000) ? `${(number / 1000).toFixed(fractionDigits)}K` :
        number
    );
}
