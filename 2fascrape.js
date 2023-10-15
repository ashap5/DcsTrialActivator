const tfajson = await fetch("https://www.digitalcombatsimulator.com/en/", {
    "method": "POST",
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
    },
});
console.log(await tfajson.text())
