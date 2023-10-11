// ==UserScript==
// @name         Auto-Trial Clicker with Profile and Saving
// @namespace    https://www.tampermonkey.net/
// @version      0.9
// @description  Activates Trials on multiple module selected by the user automatically Contact: Discord: pasha5
// @author       pasha5
// @match        https://www.digitalcombatsimulator.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    "use strict";
    let countsucces = 0
    let count = 0
    const counter = document.createElement('span');
    counter.style.marginTop = '5px';
    async function ActivateTrialOnWebsite(moduleid,sessionid)
    {
        fetch(`https://www.digitalcombatsimulator.com/en/personal/licensing/trial/?params=${moduleid}&sessid=${sessionid}`, {
            "credentials": "include",
            "headers": {
                "Accept": "*/*",
                "Bx-ajax": "true",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Sec-GPC": "1",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache"
            },
            "method": "GET",
            "mode": "cors"
        })
            .then((res) => {
            console.log("This function is run when the request succeeds", res);
            countsucces += 1
            count +=1
            counter.textContent = `${countsucces} succeses/ ${count} total`;
            return 1
        })
            .catch(err => {
            console.log("This function is run when the request fails", err);
            count += 1
            return 0
        });

    }
    //TODO CHECK if all parts of the fetch request are actually needed

    // List of all possible websites
    const AllTokens = [
        "eyJJRCI6IjMxMDg2MzYiLCJDT0RFIjoiRkEtMThDIn0=.b21af9798a39ea70806e3be0c4e8d2dc6b69b8c55167f14fa5102696a3396367",
        "eyJJRCI6IjIzODgwMCIsIkNPREUiOiJGQzMifQ==.d94fe0dec3136c575b51d91bba8347c553a9b5e23ee062c13afafc56f0d359d2",
        "eyJJRCI6IjMzMDUzNjYiLCJDT0RFIjoiRi0xNkMifQ==.359d336728f8da6fa09f2de3d4b978845951fc87b41d9ffdfd7c4689ae1f974d",
        "eyJJRCI6IjMzMDIxMDAiLCJDT0RFIjoiSEVBVEJMVVJfRi0xNCJ9.6aa52539dd345f799cfeae8fe125187b53e0ee305634b99d7b45df091b8fca52",
        "eyJJRCI6IjMzMDc3OTAiLCJDT0RFIjoiU1VQRVJDQVJSSUVSIn0=.73b464a931d634b3f148288fb15abb18ccd789270b1808dc76b63ca27885cc50",
        "eyJJRCI6IjMzMTg3MTgiLCJDT0RFIjoiQUgtNjREIn0=.84fcdc6836a0f2756eee55e094a2791a729f80d0e34db0ee79a97f630a276aa3",
        "eyJJRCI6IjE3Mzg0NiIsIkNPREUiOiJQLTUxRCJ9.e5663bab25005667377b0f4ab22b4d03933b4dfde315d061bc136467e1d4df01",
        "eyJJRCI6IjMzMjY0NjAiLCJDT0RFIjoiSU5ESUFGT1hURUNIT19NQi0zMzkifQ==.a992b71ca4ef06b6cf6b234aa2223abef328b1dae3cfef1877979dcf32bd3c61",
        "eyJJRCI6IjMzMTc4NzAiLCJDT0RFIjoiTU9TUVVJVE8tRkJNS1ZJIn0=.33c284a75bd0d1ea4632735461ea65dabf2fad29351b67fbfed4ffb85504d28b",
        "eyJJRCI6IjMzMTU2NTEiLCJDT0RFIjoiTUktMjRQIn0=.be954b200577306cc2fcadd3cdb79157867128f5e97ef733b8a1cecdbd0e7bad",
        "eyJJRCI6IjMzMTIxODAiLCJDT0RFIjoiQS0xMENfMiJ9.ae13b0b2fa1fc5849a373fb104b4f4d94174f3293433ed7d9fe665c84a3568d0",
        "eyJJRCI6IjMzMDY2MjkiLCJDT0RFIjoiUDQ3RDMwIn0=.6feb92491ce6b66d64a843628ec35232a8031891fa72775c9e3fe05e01d35d13",
        "eyJJRCI6IjMzMDcxNzUiLCJDT0RFIjoiREVLQV9KRi0xNyJ9.14940558dac86cb15bda8e172a5f26c7340e3024a7b73ddde76fe085fc9e6b42",
        "eyJJRCI6IjMzMDUyNzIiLCJDT0RFIjoiRlctMTkwQTgifQ==.83bdf2385038c8d7199ff04628eec39cac273abff4bb0b153a5a9b0926c6660f",
        "eyJJRCI6IjMwOTQ5NzgiLCJDT0RFIjoiT0NUT1BVU0dfSS0xNiJ9.d2d7df2157577ff7385323cf5faf574132792cf4a7e12808f8600372bad4fce4",
        "eyJJRCI6IjMzMDMzMTQiLCJDT0RFIjoiUkFaQkFNX01JRzE5UCJ9.6b9f8a6a0331bcb3176780749c010af15343aceb680a38b0d19ce04cae7c24b3",
        "eyJJRCI6IjMzMDI5OTIiLCJDT0RFIjoiTUFHTklUVURFM19DSFJJU1RFTl9FQUdMRS1JSSJ9.9d8542e9cabfff802a084210c70d1c9b90b0488a3cd96eb76a9925f5c5c38814",
        "eyJJRCI6IjMzMDIwNzkiLCJDT0RFIjoiTUlHLTI5In0=.d82877e6f09b7070a8a54cbf609d0b4b84cd06dfd5356068371e4d5a5d3bfd4e",
        "eyJJRCI6IjMzMDEzNTIiLCJDT0RFIjoiWUFLLTUyIn0=.7b5129c739439698b0d096a2bfd15c5d3179d7f33f7a08b04fe9c39830e57129",
        "eyJJRCI6IjI5NzA5NTQiLCJDT0RFIjoiUkFaQkFNX0FWOEJOQSJ9.931bb723594d44839ecf25e878beb5f81fe3b25bca37bcc6fb6680bb915f483b",
        "eyJJRCI6IjIzNTc0NDEiLCJDT0RFIjoiV1dJSS1BUk1PVVIifQ==.ed6223c758148f550015399e2391bde9528f087c5115ff7894195867fc320ef7",
        "eyJJRCI6IjIyNjkwNDYiLCJDT0RFIjoiQUpTMzcifQ==.b1ba302af8e1634086673ef71d4c5a741afd2334e5960f070909d7f255f2bcc8",
        "eyJJRCI6IjE0NjAxMDgiLCJDT0RFIjoiU1BJVEZJUkUtTUtJWCJ9.83239173c76f27a012d0e22bf68548a4b0db2fce72a513b31e169047571e77df",
        "eyJJRCI6IjE5MDU5NzYiLCJDT0RFIjoiRi01RSJ9.376762c9347cc4e924dc607379aec25d16e392ccfa9be14f8b1975360d63e4c4",
        "eyJJRCI6IjE4Nzg0ODciLCJDT0RFIjoiUE9MWUNIT1BTSU1fU0EzNDIifQ==.34867e7f44ae8ccb32f1019231c9dfa410b931c90871137fc1a0f64fe51aaa88",
        "eyJJRCI6IjE0NjU5NjAiLCJDT0RFIjoiUkFaQkFNX00tMjAwMEMifQ==.3520bcee35c94156a4e2d54d2e1635a298ece2549b0dc8ac689231954c2c13ba",
        "eyJJRCI6IjE0NDc1MjkiLCJDT0RFIjoiTC0zOSJ9.366bba20007926ca526373fd9c64cbdcc6ff65d1c562500aa7661fbf76474d51",
        "eyJJRCI6IjEyMjI0MzciLCJDT0RFIjoiQVZJT0RFVl9DLTEwMSJ9.10e20f7d4176caac012af016bb23eecbc3ce10483d9225a835cf9f71eb6b28e1",
        "eyJJRCI6IjEwODk1OTciLCJDT0RFIjoiTUlHLTE1QklTIn0=.92b97857dcb5cf31725410b5012473e1bee17524c3958ed405d04a2f44c6b2a5",
        "eyJJRCI6IjgyODM3MSIsIkNPREUiOiJNSUctMjFCSVMifQ==.635e8e49600f565b6ec5b949742e3b39fb7ac985d9782bcae527d99bc27a819c",
        "eyJJRCI6Ijc4MTYyMiIsIkNPREUiOiJCRi0xMDlLNCJ9.8ca980b7fbc97237b2b5c23f77f4a0a0dd5ef861575da64e165fe643fce4fe21",
        "eyJJRCI6IjczMDk1MiIsIkNPREUiOiJGLTg2RiJ9.5c6b17594b87c5db89fb3c7d5ba5d41ec72e9376ed07da5636e598ee8ac2cb64",
        "eyJJRCI6IjcxNDM5NSIsIkNPREUiOiJGVy0xOTBEOSJ9.f6c6f2a05d69b76fac554ed77e6b054ab99d66e4c4a7d90a3ddf32742d3b8bdc",
        "eyJJRCI6IjQ0MjMzMyIsIkNPREUiOiJNSS04TVRWMiJ9.1deb8d8c5ee16abccfd3f5062d016f90e62c6243221e801ddfa3b2f3f386a36e",
        "eyJJRCI6IjMzOTMyNiIsIkNPREUiOiJVSC0xSCJ9.5067639ab0646ba0f7dfdcb3a45af4864af7b7b5ddaca4958d8fb589a26942a6",
        "eyJJRCI6IjIwMzYyMSIsIkNPREUiOiJDQSJ9.bae94d3f5030efa89ad02ae50714ea9dc46d89a89c92f84b90a89516007774de",
        "eyJJRCI6IjE3Mjk0NyAiLCJDT0RFIjoiS0EtNTAifQ==.2b1308f7ff5da89c96a2f2e32699dd1b914b93417a7707790a39501b7033dbdc",
        "eyJJRCI6IjI3OTA0NzUiLCJDT0RFIjoiU1UtMzMifQ==.dd7de5c2f0720d0fb3462829b39a3059020766ce677aecc57bce9a8ecf2057fb",
        "eyJJRCI6IjkyMTk0MiIsIkNPREUiOiJTVS0yNyJ9.4a4133878512bdb50ed06e703f05256d3cda49c23a1c2956ade90524ae02fa2e",
        "eyJJRCI6IjY2NjE0MyIsIkNPREUiOiJGLTE1QyJ9.30fb211b6abcc210f9be1ab564e80f06da1249ce038f5e1423babb748f2d60c7",
        "eyJJRCI6IjM3OTQ4NSIsIkNPREUiOiJTVS0yNUEifQ==.030795cae5e9888a8770e45ab3a7d2186592e2e17fc379d986ff0cea037f00aa",
        "eyJJRCI6IjM3OTQ4NCIsIkNPREUiOiJBLTEwQSJ9.664535ebfc723558ae29a659fdfa8a0d1d73fe6e3ed085948872b9fea7272767",
        "eyJJRCI6IjMzMTAxODgiLCJDT0RFIjoiVEhFQ0hBTk5FTF90ZXJyYWluIn0=.59fe61c67d580968e3df1c5f43d724514d9747cf2692b442ce31fef4ab16f8f2",
        "eyJJRCI6IjMzMTEzMTciLCJDT0RFIjoiU1lSSUFfdGVycmFpbiJ9.e1d4b44bc60c8252554b62ccce49a0be399b8dcc4cd492eb9e059986495971e8",
        "eyJJRCI6IjMzMzA1MTciLCJDT0RFIjoiTk9STUFORFlfdGVycmFpbiJ9.6e582f99669e7a21c16cf553881f802b1eb56ead74467eb57d04937c9a70e64b",
        "eyJJRCI6IjMyNjc2NjQiLCJDT0RFIjoiUEVSU0lBTkdVTEZfdGVycmFpbiJ9.3af3aa657e91ad7a5efbe083e573b17982d568235c8293dc553c3cbfe367879a",
        "eyJJRCI6IjE0NjA2MjIiLCJDT0RFIjoiTkVWQURBX3RlcnJhaW4ifQ==.ad0e8cf9a2244f2b4015de596339b1b773c9dfc7a55f26b0633c95342ba1997a",
     ];

    // Function to save profiles to local storage
    function saveProfilesToLocalStorage(profiles) {
        localStorage.setItem('autoTrialProfiles', JSON.stringify(profiles));
    }

    // Function to load profiles from local storage
    function loadProfilesFromLocalStorage() {
        const profilesJSON = localStorage.getItem('autoTrialProfiles');
        return profilesJSON ? JSON.parse(profilesJSON) : null;
    }

    // Create the activate button and profile menu
    function createActivateButton() {
        const activateButton = document.createElement('button');
        activateButton.textContent = 'Auto-Trial';
        activateButton.style.position = 'fixed';
        activateButton.style.top = '10px';
        activateButton.style.left = '10px';
        activateButton.style.zIndex = '9999';
        document.body.appendChild(activateButton);

        // Example profiles (you can add more profiles or customize the websites for each profile)
        const defaultProfiles = {
            Profile1: [
                "eyJJRCI6IjMxMDg2MzYiLCJDT0RFIjoiRkEtMThDIn0=.b21af9798a39ea70806e3be0c4e8d2dc6b69b8c55167f14fa5102696a3396367",
                "eyJJRCI6IjIzODgwMCIsIkNPREUiOiJGQzMifQ==.d94fe0dec3136c575b51d91bba8347c553a9b5e23ee062c13afafc56f0d359d2",
                "eyJJRCI6IjMzMDUzNjYiLCJDT0RFIjoiRi0xNkMifQ==.359d336728f8da6fa09f2de3d4b978845951fc87b41d9ffdfd7c4689ae1f974d",
                "eyJJRCI6IjMzMDIxMDAiLCJDT0RFIjoiSEVBVEJMVVJfRi0xNCJ9.6aa52539dd345f799cfeae8fe125187b53e0ee305634b99d7b45df091b8fca52",
                "eyJJRCI6IjMzMDc3OTAiLCJDT0RFIjoiU1VQRVJDQVJSSUVSIn0=.73b464a931d634b3f148288fb15abb18ccd789270b1808dc76b63ca27885cc50",
                "eyJJRCI6IjMzMTg3MTgiLCJDT0RFIjoiQUgtNjREIn0=.84fcdc6836a0f2756eee55e094a2791a729f80d0e34db0ee79a97f630a276aa3",
                "eyJJRCI6IjE3Mzg0NiIsIkNPREUiOiJQLTUxRCJ9.e5663bab25005667377b0f4ab22b4d03933b4dfde315d061bc136467e1d4df01",
                "eyJJRCI6IjMzMjY0NjAiLCJDT0RFIjoiSU5ESUFGT1hURUNIT19NQi0zMzkifQ==.a992b71ca4ef06b6cf6b234aa2223abef328b1dae3cfef1877979dcf32bd3c61",
                "eyJJRCI6IjMzMTc4NzAiLCJDT0RFIjoiTU9TUVVJVE8tRkJNS1ZJIn0=.33c284a75bd0d1ea4632735461ea65dabf2fad29351b67fbfed4ffb85504d28b",
                "eyJJRCI6IjMzMTU2NTEiLCJDT0RFIjoiTUktMjRQIn0=.be954b200577306cc2fcadd3cdb79157867128f5e97ef733b8a1cecdbd0e7bad",
            ],
            Profile2: [
                "eyJJRCI6IjgyODM3MSIsIkNPREUiOiJNSUctMjFCSVMifQ==.635e8e49600f565b6ec5b949742e3b39fb7ac985d9782bcae527d99bc27a819c",
                "eyJJRCI6Ijc4MTYyMiIsIkNPREUiOiJCRi0xMDlLNCJ9.8ca980b7fbc97237b2b5c23f77f4a0a0dd5ef861575da64e165fe643fce4fe21",
                "eyJJRCI6IjczMDk1MiIsIkNPREUiOiJGLTg2RiJ9.5c6b17594b87c5db89fb3c7d5ba5d41ec72e9376ed07da5636e598ee8ac2cb64",
                "eyJJRCI6IjcxNDM5NSIsIkNPREUiOiJGVy0xOTBEOSJ9.f6c6f2a05d69b76fac554ed77e6b054ab99d66e4c4a7d90a3ddf32742d3b8bdc",
                "eyJJRCI6IjQ0MjMzMyIsIkNPREUiOiJNSS04TVRWMiJ9.1deb8d8c5ee16abccfd3f5062d016f90e62c6243221e801ddfa3b2f3f386a36e",
            ],
            Profile3: [
                "eyJJRCI6IjMzMTg3MTgiLCJDT0RFIjoiQUgtNjREIn0=.84fcdc6836a0f2756eee55e094a2791a729f80d0e34db0ee79a97f630a276aa3",
                "eyJJRCI6IjE3Mzg0NiIsIkNPREUiOiJQLTUxRCJ9.e5663bab25005667377b0f4ab22b4d03933b4dfde315d061bc136467e1d4df01",
            ],
            Debug: AllTokens,
        };

        let profiles = loadProfilesFromLocalStorage();

        if (!profiles) {
            // If profiles do not exist in local storage, use the defaultProfiles
            profiles = defaultProfiles;
            saveProfilesToLocalStorage(profiles);
        }

        let profileMenu; // Declare the profile menu variable here so that it can be accessed by the click event

        // Function to create the profile menu
        function createProfileMenu() {
            profileMenu = document.createElement('div');
            profileMenu.id = 'profileMenu';
            profileMenu.style.position = 'fixed';
            profileMenu.style.color = 'green'
            profileMenu.style.top = '50px';
            profileMenu.style.left = '10px';
            profileMenu.style.zIndex = '9999';
            profileMenu.style.backgroundColor = '#35393b';
            profileMenu.style.padding = '10px';
            profileMenu.style.border = '1px solid #ccc';
            profileMenu.style.display = 'none';
            profileMenu.style.overflowY = 'scroll'; // Enable vertical scrolling
            profileMenu.style.maxHeight = '80vh'; // Set a maximum height for the profile menu

            // Create container for upper buttons
            const MenuDivUpperButtons = document.createElement('div');
            MenuDivUpperButtons.id = 'upperButtonsContainer'
            MenuDivUpperButtons.style.display = 'flex';
            MenuDivUpperButtons.style.width = '100%';
            MenuDivUpperButtons.style.justifyContent = 'space-between'; // todo should work, but doesn't.
            profileMenu.append(MenuDivUpperButtons);

            // Create the dropdown menu with profiles
            const profileDropdown = document.createElement('select');
            profileDropdown.setAttribute('id', 'profile-dropdown'); // Set an ID for the dropdown
            for (const profile in profiles) {
                const option = document.createElement('option');
                option.value = profile; // Set the value of the option to the profile name
                option.textContent = profile; // Display the profile name in the dropdown
                profileDropdown.appendChild(option);
            }
            MenuDivUpperButtons.append(profileDropdown);

            const MakeNewAccountButton = document.createElement('button');
            MenuDivUpperButtons.append(MakeNewAccountButton);
            MakeNewAccountButton.textContent = 'Make New Account';
            //move it more to the right
            MakeNewAccountButton.style.marginTop = '5px';

            MakeNewAccountButton.addEventListener('click', async () => {
                console.log("opened new account menu")
                await GetCaptha().then(
                    (r) => {
                        document.getElementById("captcha-img").src = r.captchaImageLink;
                    });
                if (CheckIfLoggedIn()) {
                    alert("Cannot Create a new account while logged in")
                    return;
                }
                    document.getElementById('LoginContainer').style.display = 'block';
            });

            async function CreateLoginPasswordWindow() { // called immediately(constructor)
                const LoginPasswordContainerDiv = document.createElement('div');
                document.body.appendChild(LoginPasswordContainerDiv);
                LoginPasswordContainerDiv.style.display = 'none';
                LoginPasswordContainerDiv.style.position = 'fixed';
                LoginPasswordContainerDiv.style.top = '35%';
                LoginPasswordContainerDiv.style.left = '35%';
                LoginPasswordContainerDiv.id = 'LoginContainer';
                LoginPasswordContainerDiv.style.width = '25%';
                LoginPasswordContainerDiv.style.backgroundColor = '#f59e10';
                LoginPasswordContainerDiv.style.padding = '10px';
                LoginPasswordContainerDiv.style.margin = '15px';
                LoginPasswordContainerDiv.style.boxShadow = 'black';
                LoginPasswordContainerDiv.style.borderRadius = '10px';
                LoginPasswordContainerDiv.id = 'LoginContainer';

                const LoginInputContainer = document.createElement('div');
                LoginInputContainer.style.marginBottom = '10px';
                LoginPasswordContainerDiv.append(LoginInputContainer);

                const LoginLabelsContainer = document.createElement('div');
                LoginLabelsContainer.style.display = 'flex';
                LoginLabelsContainer.style.justifyContent = 'space-between';
                LoginInputContainer.append(LoginLabelsContainer);

                const LoginLabel = document.createElement('label');
                LoginLabel.textContent = 'Login Name';
                LoginLabel.style.margin = '1px';
                LoginLabelsContainer.append(LoginLabel);

                const WrongLogin = document.createElement('label');
                WrongLogin.textContent = 'username taken';
                WrongLogin.style.color = 'red';
                WrongLogin.style.display = 'none';
                LoginLabelsContainer.append(WrongLogin);

                const Username = document.createElement('input');
                Username.type = 'text';
                Username.style.width = '100%';
                Username.style.padding = '5px';
                const CheckUsername = async function (e)
                {
                    let validUsername = await CheckUserNameValidity(Username.value)
                    console.log(validUsername);
                    if (validUsername) {
                        WrongLogin.style.display = 'none';
                    } else {
                        WrongLogin.style.display = 'block';
                    }
                }
                Username.addEventListener('change', CheckUsername);
                LoginInputContainer.append(Username);

                const PasswordInputContainer = document.createElement('div');
                PasswordInputContainer.style.marginBottom = '10px';
                LoginPasswordContainerDiv.append(PasswordInputContainer);

                const PasswordTextContainer = document.createElement('div');
                PasswordTextContainer.style.display = 'flex';
                PasswordTextContainer.style.justifyContent = 'space-between';
                PasswordInputContainer.append(PasswordTextContainer)

                const PasswordLabel = document.createElement('label');
                PasswordLabel.textContent = 'Password';
                PasswordLabel.style.margin = '0px';
                PasswordTextContainer.append(PasswordLabel);

                const PasswordWrong = document.createElement('label');
                PasswordWrong.textContent = 'incorrect password format';
                PasswordWrong.style.color = 'red';
                PasswordWrong.style.display = 'none';
                PasswordTextContainer.append(PasswordWrong);

                // todo Make a hide/display text button (switch type between password and text)
                const PasswordInput = document.createElement('input');
                PasswordInput.type = 'text';
                PasswordInput.style.width = '100%';
                PasswordInput.style.padding = '5px';
                const CheckPassword = function (e)
                {
                    let valid = CheckPasswordValidity(PasswordInput.value); //todo add text that says password is too weak mozno aj text dat aky musi byt
                    console.log(valid);
                    console.log(PasswordWrong.style.display);
                    if (valid) {
                        PasswordWrong.style.display = 'none';
                    } else {
                        PasswordWrong.style.display = 'block';
                    }
                }
                PasswordInput.addEventListener('input', CheckPassword);
                PasswordInputContainer.append(PasswordInput);

                const RandomPasswordButton = document.createElement('button');
                RandomPasswordButton.textContent = 'Random Password';
                RandomPasswordButton.style.borderStyle = 'none';
                RandomPasswordButton.style.background = 'none';
                RandomPasswordButton.onclick = () => {
                    PasswordInput.value = generatePassword();
                    PasswordWrong.style.display = 'none';
                }
                PasswordTextContainer.append(RandomPasswordButton);

                const captchaImg = document.createElement('img');
                captchaImg.id = 'captcha-img';
                captchaImg.style.width = '180px';
                captchaImg.style.height = '40px';
                captchaImg.alt = 'CAPTCHA';//SEM SRC CAPTCHA IMG, nejak asi cez variable ale to ja neviem
                LoginPasswordContainerDiv.append(captchaImg);

                const captchaText = document.createElement('input');
                captchaText.type = 'text';
                LoginPasswordContainerDiv.append(captchaText);

                const AccountWindowButtonContainer = document.createElement('div');
                AccountWindowButtonContainer.style.display = 'flex';
                AccountWindowButtonContainer.style.display = 'flex';
                AccountWindowButtonContainer.style.justifyContent = 'space-between';
                AccountWindowButtonContainer.style.margin = '5px';
                AccountWindowButtonContainer.style.marginRight = '10px';
                LoginPasswordContainerDiv.append(AccountWindowButtonContainer)

                const cancelButton = document.createElement('button');
                cancelButton.textContent = 'Cancel';
                cancelButton.style.scale = '1.2';
                cancelButton.onclick = () => {
                    LoginPasswordContainerDiv.style.display = 'none';
                }
                AccountWindowButtonContainer.append(cancelButton);


                const CreateAccountButton = document.createElement('button');
                CreateAccountButton.textContent = 'Create Account';
                CreateAccountButton.style.scale = '1.2';
                CreateAccountButton.onclick = async () => { //todo add email and login check also on create account maybe password for redundancy
                    const login = Username.value
                    const password = PasswordInput.value
                    if (!await CheckUserNameValidity(login) || !CheckPasswordValidity(password)) {
                        alert("wrong username or password") //todo show at as text near the input fields
                        return;
                    }
                    const captcha = captchaText.value
                    const captchasid = document.getElementById("captcha-img").src.split("?")[1].split("&")[0].split("=")[1]
                    await MakeNewAccount(login,password,captcha,captchasid)

                }
                AccountWindowButtonContainer.append(CreateAccountButton);

                const LoadingIcon = document.createElement('img');
                LoadingIcon.style.display = 'none';
                LoadingIcon.style.position = 'fixed';
                LoadingIcon.style.top = '50%';
                LoadingIcon.style.left = '50%';
                LoadingIcon.src = "https://cdn.discordapp.com/attachments/565969336435736586/1159506501187154022/Loading.svg?ex=65314594&is=651ed094&hm=dc9de9c4d41593fb6af71d2fccffbe70dd00e4081662aaa616e3ebdfb6b070fe&";
                LoadingIcon.style.height = '30%';
                LoadingIcon.id = 'loading-icon';
                LoginPasswordContainerDiv.append(LoadingIcon);
            }
            // Function to update the websites list when the profile is changed
            function updateWebsitesList() {
                const selectedProfile = profileDropdown.value;
                const selectedWebsites = profiles[selectedProfile];
                websitesList.innerHTML = ''; // Clear the current websites list
                for (const token of AllTokens) {
                    const websiteDiv = document.createElement('div');
                    websiteDiv.style.display = 'flex';
                    websiteDiv.style.alignItems = 'center';
                    websiteDiv.style.justifyContent = 'space-between'; // Align the checkboxes to the right
                    websiteDiv.style.marginBottom = '5px';
                    websiteDiv.style.cursor = 'pointer';

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = selectedWebsites.includes(token); // Set the checked property based on the selected websites
                    checkbox.style.pointerEvents = 'none'; // Re-enable interactions with the checkbox
                    checkbox.style.flexShrink = '0'; // Prevent the checkbox from shrinking
                    checkbox.style.marginLeft = '20px'

                    // Use click event for toggling
                    websiteDiv.addEventListener('click', (event) => {
                        event.preventDefault();
                        if (checkbox.checked) {
                            selectedWebsites.splice(selectedWebsites.indexOf(token), 1); // Remove the website from the selected websites
                        } else {
                            selectedWebsites.push(token); // Add the website to the selected websites
                        }
                        saveProfilesToLocalStorage(profiles); // Save the updated profiles to local storage
                        checkbox.checked = !checkbox.checked; // Toggle the checkbox
                    });

                    const websiteName = document.createElement('span');
                    websiteName.textContent = getProfileName(token);
                    websiteName.style.flexGrow = '1'; // Expand the clickable area for the website name

                    websiteDiv.appendChild(websiteName);
                    websiteDiv.appendChild(checkbox);


                    websitesList.appendChild(websiteDiv);
                }
            }

            // Create a div to show the websites under the selected profile
            const websitesList = document.createElement('div');
            websitesList.textContent = 'Websites in the selected profile:';
            profileMenu.appendChild(websitesList);

            // Create the start button for the profile menu
            const startButton = document.createElement('button');
            startButton.textContent = 'Start';
            startButton.style.marginTop = '5px';
            startButton.addEventListener('click', async () => {
                if (!CheckIfLoggedIn()) {
                    alert("You are not logged in to DCS website, please log in and try again");
                    return;
                }
                const sessionid = /"bitrix_sessid":"([^"]+)"/.exec(localStorage.getItem("bx-compositeCache"))[1];
                const selectedProfile = profileDropdown.value;
                const selectedWebsites = profiles[selectedProfile];
                count = 0
                countsucces = 0
                for (const token of selectedWebsites)
                {
                    await ActivateTrialOnWebsite(token,sessionid);
                }
            });

            // Create the close button for the profile menu
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.style.marginTop = '5px';
            closeButton.addEventListener('click', () => {
                profileMenu.style.display = 'none';
            });

            // Add elements to the profile menu
            profileMenu.appendChild(websitesList);
            profileMenu.appendChild(startButton);
            profileMenu.appendChild(closeButton);
            profileMenu.appendChild(counter)
            document.body.appendChild(profileMenu);

            // Update the websites list when the profile is changed
            profileDropdown.addEventListener('change', updateWebsitesList);
            updateWebsitesList(); // Initialize the websites list
            CreateLoginPasswordWindow();
        }

        // Function to get the profile name from the URL
        function getProfileName(token) {
            return JSON.parse(decodeURIComponent(atob(token.split('.')[0]))).CODE
        }
        // Show/hide the profile menu when clicking the activate button
        activateButton.addEventListener('click', () => {
            if (!profileMenu) {
                createProfileMenu();
            }
            if (profileMenu.style.display === 'none') {
                profileMenu.style.display = 'block';
            } else {
                profileMenu.style.display = 'none';
            }
        });
    }


    /*
--------------------
    Under this is backend
    Kind of like two files // todo find a better way for something like this
----------------------------
     */

    async function Get2faSecret() {
        const tfajson = await fetch("https://www.digitalcombatsimulator.com/en/personal/profile/security/", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        let text = await tfajson.text()
        console.log(text);
        let matches = text.match(/\b[A-Z0-9]{4} [A-Z0-9]{4} [A-Z0-9]{4} [A-Z0-9]{4} [A-Z0-9]{4} [A-Z0-9]{4} [A-Z0-9]{4} [A-Z0-9]{4}\b/)
        console.log(matches);
        console.log(matches[0]);
        return matches[0];
    }
    function Get2facode(secret) { // source for the otp-lib : https://github.com/yeojz/otplib //todo remove spaces from secret
        return new Promise((resolve, reject) => {
            // Define the OTP generation code
            const otpGenerationCode = `
                const secret = '${secret}';
                const token = window.otplib.authenticator.generate(secret.replace(/\\s/g, ''));
                // Send the generated token to the parent window
                window.parent.postMessage({ type: 'otpGenerated', token: token }, '*');
            `;


            // Define the URLs for the external dependencies
            const bufferScriptURL = 'https://unpkg.com/@otplib/preset-browser@^12.0.0/buffer.js';
            const indexScriptURL = 'https://unpkg.com/@otplib/preset-browser@^12.0.0/index.js';

            // Function to load and inject scripts into the head of the page
            function loadAndInjectScript(scriptURL, callback) {
                const script = document.createElement('script');
                script.src = scriptURL;
                script.onload = callback;
                document.head.appendChild(script);
            }

            // Function to inject OTP generation code once dependencies are loaded
            function injectOTPCode() {
                const otpScript = document.createElement('script');
                otpScript.type = 'text/javascript';
                otpScript.textContent = otpGenerationCode;
                document.head.appendChild(otpScript);
            }

            // Load the external script dependencies first and then inject OTP code
            loadAndInjectScript(bufferScriptURL, function () {
                loadAndInjectScript(indexScriptURL, function () {
                    injectOTPCode();
                    // Listen for the generated token in the console and resolve the Promise
                    window.addEventListener('message', function (event) {
                        if (event.data && event.data.type === 'otpGenerated') {
                            const otp = event.data.token;
                            console.log('Generated OTP:', otp);
                            return resolve(otp);
                        }
                    });
                });
            });
        });
    }
    async function Activate2fa() {
        // function base32ToHex(base32Key) {
        //     const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
        //     const hexChars = '0123456789abcdef';
        //     const base32Lookup = Object.fromEntries([...base32Chars].map((char, index) => [char, index]));
        //
        //     const bytes = [];
        //     let buffer = 0;
        //     let bits = 0;
        //
        //     for (let i = 0; i < base32Key.length; i++) {
        //         const charValue = base32Lookup[base32Key.charAt(i)];
        //         if (charValue === undefined) {
        //             throw new Error('Invalid base32 character: ' + base32Key.charAt(i));
        //         }
        //
        //         buffer = (buffer << 5) | charValue;
        //         bits += 5;
        //
        //         if (bits >= 8) {
        //             bytes.push((buffer >>> (bits - 8)) & 255);
        //             bits -= 8;
        //         }
        //     }
        //
        //     return bytes.map(byte => hexChars[(byte >> 4) & 0xF] + hexChars[byte & 0xF]).join('');
        // }
        // const base32Key = secret.replace(/\s/g, '');
        // const hexKey = base32ToHex(base32Key);
        // console.log(base32Key);
        // console.log(hexKey);
        // await fetch("https://www.digitalcombatsimulator.com/bitrix/services/main/ajax.php?mode=ajax&c=bitrix%3Asecurity.user.otp.init&action=setOtp", {
        //     "headers": {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //     "body": `secret=${hexKey}&sync1=${code}&&otpAction=otp_check_activate&signedParameters=`,
        //     "method": "POST",
        // });
        // await fetch("https://www.digitalcombatsimulator.com/bitrix/services/main/ajax.php?mode=ajax&c=bitrix%3Asecurity.user.otp.init&action=setOtp", {
        //     "credentials": "include",
        //     "headers": {
        //         "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/118.0",
        //         "Accept": "*/*",
        //         "Accept-Language": "en-US,en;q=0.5",
        //         "Bx-ajax": "true",
        //         "Content-Type": "application/x-www-form-urlencoded",
        //         "X-Bitrix-Csrf-Token": "276fc7f758e39f55798e08b8c902e82c",
        //         "X-Bitrix-Site-Id": "s1",
        //         "Sec-Fetch-Dest": "empty",
        //         "Sec-Fetch-Mode": "cors",
        //         "Sec-Fetch-Site": "same-origin",
        //         "Sec-GPC": "1",
        //     },
        //     "referrer": "https://www.digitalcombatsimulator.com/en/personal/profile/security/",
        //     "body": `secret=${hexKey}&sync1=${code}&&otpAction=otp_check_activate&signedParameters=`,
        //     "method": "POST",
        //     "mode": "cors"
        // });
        window.location.href = "https://www.digitalcombatsimulator.com/en/personal/profile/security/";
        let SecretElement = document.getElementById("user-otp-container").children[4].children[1].children[3].textContent;
        let Secret = SecretElement.split(":")[1];
        console.log(Secret);
        let tfacode = Get2facode(Secret);
        console.log(tfacode);
        let CodeElement = document.getElementById("user-otp-container").children[8].children[0].children[0].value;
        CodeElement.value = tfacode;
        let ActivateButton = document.getElementById("user-otp-container").children[9].children[0].children[0];
        ActivateButton.click();



    }
    async function ConfirmAccount(token) // todo try to get the message id without this additonial request
    {
        const GetEmails = await fetch("https://api.mail.tm/messages", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`,
            },
        });
        let messageid = (await GetEmails.json())['hydra:member'][0]['id'];
        console.log(messageid);
        const GetEmail = await fetch(`https://api.mail.tm/messages/${messageid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token}`,
            },
        });
        let json = await GetEmail.json();

        const linkMatch = json.text.match(/(https:\/\/www.digitalcombatsimulator.com\/en\/auth\/\?confirm_registration=yes&confirm_user_id=\d+&confirm_code=\w+)/);

        if (linkMatch) {
            const url = linkMatch[1];
            console.log("Extracted URL:", url);
            const ConfirmAccount = await fetch(url, {
                method: "GET",
            });
            return (await ConfirmAccount.text()).includes("User registration has been confirmed successfully");


        } else {
            console.log("No link found in the text.");
        }

    }
    async function MakeNewAccount(username, password, captcha,captchasid)
    {
        const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));
        ToggleLoadingIcon(true);

        let {mailadress, token} = await GetEmailAdress();
        await CreateAccount(username,mailadress,password,captchasid,captcha);
        while (await CheckEmailCount() < 1) {
            console.log("Waiting for email");
            await waitFor(3000);
        }
        console.log("Email received");
        ConfirmAccount(token).then(async r => {
            console.log(`result${r}`);
            ToggleLoadingIcon(false);
            document.getElementById('LoginContainer').style.display = 'none';
            alert("Account created");
            await LoginIntoAccount(username,password);
            await Activate2fa();
            alert("2fa activated");




            //in gui this shows succes
        });
        async function GetEmailAdress() {
            const GetAvailableDomains = await fetch("https://api.mail.tm/domains", {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });

            let mailadress = Math.random().toString(36).substring(7);
            let domain = (await GetAvailableDomains.json())['hydra:member'][0]?.domain;

            if (!domain) {
                console.log("No domains available");
                alert("no Domains available (tempmail api error)")
            }

            const CreateAccount = await fetch("https://api.mail.tm/accounts", {
                method: "POST",
                body: JSON.stringify({
                    "address": `${mailadress}@${domain}`,
                    "password": "test",
                }),
                headers: {"Content-Type": "application/json"},
            });
            console.log(await CreateAccount.json());

            const GetToken = await fetch("https://api.mail.tm/token", {
                method: "POST",
                body: JSON.stringify({
                    "address": `${mailadress}@${domain}`,
                    "password": "test",
                }),
                headers: {"Content-Type": "application/json"},
            });


            let token = (await GetToken.json())['token'];
            return {mailadress : `${mailadress}@${domain}`, token : token};
        }

        async function CreateAccount(username,emailadress,password,captchasid,captchaword){
            const request = await fetch("https://www.digitalcombatsimulator.com/en/auth/?register=yes", {
                "credentials": "include",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/118.0",
                    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Upgrade-Insecure-Requests": "1",
                    "Sec-Fetch-Dest": "document",
                    "Sec-Fetch-Mode": "navigate",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-User": "?1",
                    "Sec-GPC": "1"
                },
                "referrer": "https://www.digitalcombatsimulator.com/en/auth/?register=yes",
                "body": `AUTH_FORM=Y&TYPE=REGISTRATION&USER_NAME=pasha&USER_LAST_NAME=ashoa&USER_EMAIL=${emailadress}&USER_LOGIN=${username}&USER_PASSWORD=${password}&USER_CONFIRM_PASSWORD=${password}&captcha_sid=${captchasid}&captcha_word=${captchaword}&UF_SUBSCRIBE_NEWSLETTER=0&send_account_info=`,
                "method": "POST",
                "mode": "cors"
            });
            let response = await request
            console.log(response);
        }


        async function CheckEmailCount()
        {
            const GetEmails = await fetch("https://api.mail.tm/messages", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${token}`,
                },
            });
            let emailjson = await GetEmails.json();
            // null check because api sometimes returns null instead of json // todo look into why
            if (emailjson === null) {
                return "0";
            }
            return emailjson['hydra:totalItems'];
        }
    }
    async function GetCaptha()
    {
        // todo check if logged in otherwise throws a null
        const GetCapthaPage = await fetch("https://www.digitalcombatsimulator.com/en/auth/?register=yes", {
            method: "GET",
            headers: {
                "Content-Type": "text/html",
            }
        });

        let capthaWithSid = (await GetCapthaPage.text()).match(/\?captcha_sid=\w+/);
        console.log(capthaWithSid);
        if (capthaWithSid === null) {
            console.log("logged in/ no captha found");
            return;
        }


        let captchaid = capthaWithSid[0].replace("?captcha_sid=", "");

        const captchaImageLink = `https://www.digitalcombatsimulator.com/bitrix/tools/captcha.php?captcha_sid=${captchaid}`;
        return {captchaid : captchaid, captchaImageLink : captchaImageLink};

    }
    async function CheckUserNameValidity(username) {
        const sessid = /"bitrix_sessid":"([^"]+)"/.exec(localStorage.getItem("bx-compositeCache"))[1];
        const res = await fetch("https://www.digitalcombatsimulator.com/local/templates/dcs/components/bitrix/system.auth.registration/.default/check_fields.php", {
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            "body": `login=${username}&type=login&sessid=${sessid}`,
            "method": "POST",
        });
        const json = await res.json();
        return json.status === "OK";

    }
    function CheckPasswordValidity(password) {
        return !!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/);
    }
    function generatePassword() {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const digitChars = '0123456789';

        const allChars = uppercaseChars + lowercaseChars + digitChars;

        // Generate a random password with at least 8 characters
        let password = '';
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }

        // Ensure that the generated password meets the regex requirements
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
        if (regex.test(password)) {
            return password;
        } else {
            return generatePassword();
        }
    }
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
    function ToggleLoadingIcon(toggle) {
        const loadingIcon = document.getElementById('loading-icon');
        loadingIcon.style.display = toggle ? 'block' : 'none';
    }
    function CheckIfLoggedIn() {
        return !!document.getElementById("logout");
    }
    //todo set the captcha image to CaptchaImageLink
    // Add the activate button and profile menu when the DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        createActivateButton();

    });

})();
