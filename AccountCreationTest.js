async function CreateAccount(username,mailadress,password,captchasid,captcha) // todo debug the request
{
    console.log(username,mailadress,password,captchasid,captcha);
    console.log("Creating account")
    // moved  get captcha
    const url = 'https://www.digitalcombatsimulator.com/en/auth/?register=yes';

    const headers = {
        'Host': 'www.digitalcombatsimulator.com',
        'Cookie': '_gcl_au=1.1.908428613.1696105221; _gid=GA1.2.1802591656.1696105222; _ym_uid=1696105222389662133; _ym_d=1696105222; BX_USER_ID=616410b48b17033705d714859d247b5d; _ga_0PEB8NMGB5=GS1.1.1696113494.2.0.1696113494.60.0.0; _ga=GA1.2.28649852.1696105222; PHPSESSID=1GlSSfAvafvQC7YQJWD3NJnimPLtHrIA; BITRIX_CONVERSION_CONTEXT_s1=%7B%22ID%22%3A3%2C%22EXPIRE%22%3A1696204740%2C%22UNIQUE%22%3A%5B%22conversion_visit_day%22%5D%7D',
        'Content-Length': '318',
        'Cache-Control': 'max-age=0',
        'Sec-Ch-Ua': '"Chromium";v="117", "Not;A=Brand";v="8"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Linux"',
        'Upgrade-Insecure-Requests': '1',
        'Origin': 'https://www.digitalcombatsimulator.com',
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.132 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Referer': 'https://www.digitalcombatsimulator.com/en/auth/?register=yes',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
    };
    const formData = new FormData();
    formData.append('AUTH_FORM', 'Y');
    formData.append('TYPE', 'REGISTRATION');
    formData.append('USER_NAME', Math.random().toString(36).substring(7)); //make it random 5 letters
    formData.append('USER_LAST_NAME', Math.random().toString(36).substring(7));
    formData.append('USER_EMAIL', mailadress);
    formData.append('USER_LOGIN', username);
    formData.append('USER_PASSWORD', password);
    formData.append('USER_CONFIRM_PASSWORD', password);
    formData.append('captcha_sid', captchasid);
    formData.append('captcha_word', captcha); //put the user entered captha here
    formData.append('UF_SUBSCRIBE_NEWSLETTER', '0');
    formData.append('send_account_info', '');

    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: formData
    });

    console.log('Response:', response);
}