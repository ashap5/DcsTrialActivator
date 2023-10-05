async function LoginIntoAccount(username,password) {
    let request = await fetch("https://www.digitalcombatsimulator.com/en/", {
        "headers": {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "body": `AUTH_FORM=Y&TYPE=AUTH&backurl=%2Fen%2F&USER_LOGIN=${username}&USER_PASSWORD=${password}&USER_REMEMBER=Y&Login=Authorize`,
        "method": "POST",
    });
    console.log(request);
}