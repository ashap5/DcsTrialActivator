// const response = await fetch("https://bun.sh/api", {
//     method: "POST",
//     body: JSON.stringify({ message: "Hello from Bun!" }),
//     headers: { "Content-Type": "application/json" },
// });
//
// const body = await response.json();


// /domains output
// {
//     "@context": "\/contexts\/Domain",
//     "@id": "\/domains",
//     "@type": "hydra:Collection",
//     "hydra:member": [
//     {
//         "@id": "\/domains\/65086ce2e176b7af84e92ea4",
//         "@type": "Domain",
//         "id": "65086ce2e176b7af84e92ea4",
//         "domain": "diginey.com",
//         "isActive": true,
//         "isPrivate": false,
//         "createdAt": "2023-09-18T00:00:00+00:00",
//         "updatedAt": "2023-09-18T00:00:00+00:00"
//     }
// ],
//     "hydra:totalItems": 1
// }


async function GetEmailAdress() {
    const GetAvailableDomains = await fetch("https://api.mail.tm/domains", {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    });
    let mailadress = Math.random().toString(36).substring(7);
    let domain = (await GetAvailableDomains.json())['hydra:member'][0]?.domain;
    if (!domain) {
        console.log("No domains available");
        //add alert() here to notify the user that was a probleming getting domains for tempmail api
    }

    const CreateAccount = await fetch("https://api.mail.tm/accounts", {
        method: "POST",
        body: JSON.stringify({
            "address": mailadress + "@" + domain,
            "password": "test",
        }),
        headers: {"Content-Type": "application/json"},
    });
    console.log(await CreateAccount.json());

    const GetToken = await fetch("https://api.mail.tm/token", {
        method: "POST",
        body: JSON.stringify({
            "address": mailadress + "@" + domain,
            "password": "test",
        }),
        headers: {"Content-Type": "application/json"},
    });
    let token = (await GetToken.json())['token'];
    return {mailadress : mailadress + "@" + domain, token : token};
}
// GetEmailAdress().then(r => {
//     console.log(r.mailadress);
//     console.log(r.token);
//
// });


const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));
let {mailadress, token} = await GetEmailAdress();
console.log(token);
while (await CheckEmailCount() < 1) {
    console.log("Waiting for email");
    await waitFor(3000);
}
console.log("Email received");
ConfirmAccount().then(r => {
    console.log(r);
});
async function CheckEmailCount()
{
    const GetEmails = await fetch("https://api.mail.tm/messages", {
        method: "GET",
        //add a bearer token for auth
        headers: {
            "Content-Type": "application/json",
            "Authorization" : 'Bearer ' + token,
        },
    });
    let emailjson = await GetEmails.json();
    // null check because api sometimes returns null instead of json //todo look into why
    if (emailjson === null) {
        return "0";
    }
    return emailjson['hydra:totalItems'];
}
async function ConfirmAccount() //todo try to get the message id without this additonial request
{
    const GetEmails = await fetch("https://api.mail.tm/messages", {
        method: "GET",
        //add a bearer token for auth
        headers: {
            "Content-Type": "application/json",
            "Authorization" : 'Bearer ' + token,
        },
    });
    let messageid = (await GetEmails.json())['hydra:member'][0]['id'];
    console.log(messageid);
    const GetEmail = await fetch("https://api.mail.tm/messages/" + messageid, {
        method: "GET",
        //add a bearer token for auth
        headers: {
            "Content-Type": "application/json",
            "Authorization" : 'Bearer ' + token,
        },
    });
    let json = await GetEmail.json();
    console.log(json);

    const linkMatch = json.text.match(/(https:\/\/www.digitalcombatsimulator.com\/en\/auth\/\?confirm_registration=yes&confirm_user_id=\d+&confirm_code=\w+)/);

    if (linkMatch) {
        const url = linkMatch[1];
        console.log("Extracted URL:", url);
        const ConfirmAccount = await fetch(url, {
            method: "GET",
        });
        let response = (await ConfirmAccount.text());
        let succes = response.includes("User registration has been confirmed successfully");
        console.log("result: " + succes);


    } else {
        console.log("No link found in the text.");
    }

}
// ConfirmAccount().then(r => {
//     console.log(r);
// });

//todo make all variables start with lowercase or uppercase but not both