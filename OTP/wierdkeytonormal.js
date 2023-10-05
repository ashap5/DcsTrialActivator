function base32ToHex(base32Key) {
    const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    const hexChars = '0123456789abcdef';
    const base32Lookup = Object.fromEntries([...base32Chars].map((char, index) => [char, index]));

    const bytes = [];
    let buffer = 0;
    let bits = 0;

    for (let i = 0; i < base32Key.length; i++) {
        const charValue = base32Lookup[base32Key.charAt(i)];
        if (charValue === undefined) {
            throw new Error('Invalid base32 character: ' + base32Key.charAt(i));
        }

        buffer = (buffer << 5) | charValue;
        bits += 5;

        if (bits >= 8) {
            bytes.push((buffer >>> (bits - 8)) & 255);
            bits -= 8;
        }
    }

    return bytes.map(byte => hexChars[(byte >> 4) & 0xF] + hexChars[byte & 0xF]).join('');
}

// Example usage:
const base32Key = "BFPDUDOY4HNCIHWFW5G6NQA6GYDJJRSE";
const hexKey = base32ToHex(base32Key);
console.log(hexKey);
