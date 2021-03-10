export function truthyRecognizer(htmlElement: HTMLElement, prop: object): boolean {
    const [k, v] = Object.entries(prop)[0];
    const isBoolean =
        v === true ||
        v === false ||
        Object.prototype.toString.call(v) === "[object Boolean]";
    const isString = Object.prototype.toString.call(v) === "[object String]";
    if (!isBoolean && !isString) {
        throw "Custom attribute's type must be 'boolean' or 'string'.";
    } else {
        return (v === "" && htmlElement.hasAttribute(k)) || v.toString() === "true";
    }
}

export function truthyDetector(value: unknown) {
    console.log(value); // HERE
    const isBoolean =
        value === true ||
        value === false ||
        Object.prototype.toString.call(value) === "[object Boolean]";
    const isString = Object.prototype.toString.call(value) === "[object String]";
    if (!isBoolean && !isString) {
        throw "The custom attribute's type must be 'boolean' or 'string'.";
    } else {
        switch (value) {            
            case '': return true;
            case 'true': return true;
            case 'false': return false;
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            default: return !!value;
        }
    }
}
