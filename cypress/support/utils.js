export function generateRandomEmail() {
    const username = generateRandomString(8); // Generate a random string for the username part
    const domain = 'example.com'; // Your desired domain

    return `${username}@${domain}`;
}

export function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}