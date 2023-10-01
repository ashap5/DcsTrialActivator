Totp = class Totp {
    // pass in the secret, code dom element, ticker dom element
    constructor(expiry = 30, length = 6) {
        this.expiry = expiry;
        this.length = length;
        // validate input
        if (this.length > 8 || this.length < 6) {
            throw "Error: invalid code length";
        }
    }

    dec2hex(s) {
        return (s < 15.5 ? "0" : "") + Math.round(s).toString(16);
    }

    hex2dec(s) {
        return parseInt(s, 16);
    }

    base32tohex(base32) {
        var base32chars, bits, chunk, hex, i, val;
        base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        bits = "";
        hex = "";
        i = 0;
        while (i < base32.length) {
            val = base32chars.indexOf(base32.charAt(i).toUpperCase());
            bits += this.leftpad(val.toString(2), 5, "0");
            i++;
        }
        i = 0;
        while (i + 4 <= bits.length) {
            chunk = bits.substr(i, 4);
            hex = hex + parseInt(chunk, 2).toString(16);
            i += 4;
        }
        return hex;
    }

    leftpad(str, len, pad) {
        if (len + 1 >= str.length) {
            str = Array(len + 1 - str.length).join(pad) + str;
        }
        return str;
    }

    getOtp(secret, now = new Date().getTime()) {
        var epoch, hmac, key, offset, otp, shaObj, time;
        key = this.base32tohex(secret);
        epoch = Math.round(now / 1000.0);
        time = this.leftpad(this.dec2hex(Math.floor(epoch / this.expiry)), 16, "0");
        shaObj = new jsSHA("SHA-1", "HEX");
        shaObj.setHMACKey(key, "HEX");
        shaObj.update(time);
        hmac = shaObj.getHMAC("HEX");
        // hmacObj = new jsSHA(time, "HEX")  # Dependency on sha.js
        // hmac = hmacObj.getHMAC(key, "HEX", "SHA-1", "HEX")
        if (hmac === "KEY MUST BE IN BYTE INCREMENTS") {
            throw "Error: hex key must be in byte increments";
        } else {
            // return null
            offset = this.hex2dec(hmac.substring(hmac.length - 1));
        }
        otp = (this.hex2dec(hmac.substr(offset * 2, 8)) & this.hex2dec("7fffffff")) + "";
        if (otp.length > this.length) {
            otp = otp.substr(otp.length - this.length, this.length);
        } else {
            otp = this.leftpad(otp, this.length, "0");
        }
        return otp;
    }

};
MyTotp = new Totp(30,6);
console.log(MyTotp.getOtp("6XWA C677 R6HL SQLW TJEA W2U7 QYZL W6ZV"));

