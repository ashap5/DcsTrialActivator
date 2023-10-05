let request = await fetch("https://www.digitalcombatsimulator.com/en/", {
    "headers": {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Content-Type": "application/x-www-form-urlencoded",
    },
    "body": "AUTH_FORM=Y&TYPE=AUTH&backurl=%2Fen%2F&USER_LOGIN=pasha100&USER_PASSWORD=hZM33G2p_2w_M%7Dc&USER_REMEMBER=Y&Login=Authorize",
    "method": "POST",
});
console.log(request );