async function GetCaptha()
{
    const GetCapthaPage = await fetch("https://www.digitalcombatsimulator.com/en/auth/?register=yes", {
        method: "GET",
        headers: {
            "Content-Type": "text/html",
        }
    });

    let capthawithsid = (await GetCapthaPage.text()).match(/\?captcha_sid=\w+/);


    let captchaid = capthawithsid[0].replace("?captcha_sid=", "");

    const CaptchaImageLink = "https://www.digitalcombatsimulator.com/bitrix/tools/captcha.php?captcha_sid=" + captchaid;

    return {captchaid : captchaid, CaptchaImageLink : CaptchaImageLink};

}
GetCaptha().then(
    (r) => {
        console.log(r.captchaid);
        console.log(r.CaptchaImageLink);
    }
)