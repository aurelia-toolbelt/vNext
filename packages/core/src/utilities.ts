export function truthyDetector(value: unknown) {
    const isBoolean =
        value === true ||
        value === false ||
        Object.prototype.toString.call(value) === "[object Boolean]";
    const isString = Object.prototype.toString.call(value) === "[object String]";
    if (!isBoolean && !isString) {
        throw "The custom attribute's type must be 'boolean' or 'string'.";
    } else {
        return value === '' || value === true || value === "true";
    }
}
