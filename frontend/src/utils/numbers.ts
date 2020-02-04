export function toShortString(number: number) {
    return (
        (number >= 1000000000) ? `${(number / 1000000000).toFixed(1)} млрд.` :
        (number >= 1000000) ? `${(number / 1000000).toFixed(1)} млн.` :
        (number >= 1000) ? `${(number / 1000).toFixed(1)} тыс.` :
        number
    );
}
