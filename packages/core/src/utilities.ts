export function truthyDetector(value: unknown) {
    return value === '' || value === true || value === "true";
}
