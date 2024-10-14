
async function permittedCharacters() {
    let permitted = [];

    if (process.env.PPERCASE_LETTERS === "true") {
        permitted.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (process.env.LOWERCASE_LETTERS === "true") {
        permitted.push(... "abcdefghijklmnopqrstuvwxyz");
    }
    if (process.env.NUMBERS === "true") {
        permitted.push(... "0123456789");
    }
    if (process.env.SPECIAL_CHARACTERES === "true") {
        permitted.push(... "!@#$%&()");
    }

    return permitted;
}

export default permittedCharacters;
