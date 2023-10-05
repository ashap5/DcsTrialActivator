import { authenticator } from 'otplib';
let secret = 'V2AC YWSQ FF2L BMBG JMUJ MWPL GIXY WNVF';
secret = secret.replace(/ /g, '')
// Alternative:
// const secret = authenticator.generateSecret();
// Note: .generateSecret() is only available for authenticator and not totp/hotp

const token = authenticator.generate(secret);
console.log(token);
let test = authenticator.generateSecret();
console.log(test);
