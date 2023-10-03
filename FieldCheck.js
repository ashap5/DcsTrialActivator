async function CheckEmailValidity(email) {
    const res = await fetch("https://www.digitalcombatsimulator.com/local/templates/dcs/components/bitrix/system.auth.registration/.default/check_fields.php", {
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        "body": `email=${email}&type=email`,
        "method": "POST",
    });
    const json = await res.json();
    console.log(json);
}
async function CheckUserNameValidity(username) {
    const res = await fetch("https://www.digitalcombatsimulator.com/local/templates/dcs/components/bitrix/system.auth.registration/.default/check_fields.php", {
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        "body": `login=${username}&type=login`,
        "method": "POST",
    });
    const json = await res.json();
    console.log(json);
}
function CheckPasswordValidity(password) {
    return !!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/);
}
function CheckPasswordMatch(password, password2) {
    return password === password2;

}