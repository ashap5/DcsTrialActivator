function generatePassword() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';

    const allChars = uppercaseChars + lowercaseChars + digitChars;

    // Generate a random password with at least 8 characters
    let password = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    // Ensure that the generated password meets the regex requirements
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (regex.test(password)) {
        return password;
    } else {
        return generatePassword();
    }
}

// Example usage:
const newPassword = generatePassword();
console.log(newPassword);