import { authenticator } from 'otplib';
const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';
// Alternative:
// const secret = authenticator.generateSecret();
// Note: .generateSecret() is only available for authenticator and not totp/hotp

const token = authenticator.generate(secret);
console.log(token);