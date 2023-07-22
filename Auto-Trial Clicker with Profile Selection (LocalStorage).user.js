// ==UserScript==
// @name         Auto-Trial Clicker with Profile and Saving
// @namespace    https://www.tampermonkey.net/
// @version      0.1
// @description  Activates Trials on multiple multiple module selected by the user automatically Contact: Discord: pasha5
// @author       pasha5
// @match        https://www.digitalcombatsimulator.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Function to simulate a click on the button in the target page
    function clickTrialButton() {
        const trialButton = document.querySelector('a[id*="trial_link"]');
        if (trialButton) {
            console.log("Clicking Trial Button:", trialButton);
            trialButton.click();
        } else {
            console.log("Trial button not found.");
        }
    }

    // Function to add a message listener to the page
    function addMessageListener() {
        window.addEventListener('message', (event) => {
            if (event.data === 'clickTrialButton') {
                clickTrialButton();
            }
        });
    }

    // Function to visit a website and trigger the trial button click
    async function visitWebsiteAndClick(url) {
        console.log('Visiting:', url);
        const newTab = window.open(url, '_blank');
        newTab.onload = () => {
            newTab.postMessage('clickTrialButton', '*');
        };
        await delay(2000); // Wait for 2 seconds for the page to load (adjust the delay if needed)
    }

    // Function to introduce a delay
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    // List of all possible websites
    const allWebsites = [
        'https://www.digitalcombatsimulator.com/en/shop/modules/hornet/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/dcs_flaming_cliffs_3/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/viper/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/tomcat/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/supercarrier/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/ah-64d/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/dcs_p51d_mustang/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/mb-339/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/mosquito/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/hind/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/tank_killer/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/thunderbolt/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/thunder/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/anton/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/i-16/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/farmer/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/christen_eagle/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/mig-29_dcs_world/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/yak52/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/av8bna/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/wwii_assets_pack/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/viggen/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/spitfire/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/tiger/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/gazelle/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/m2000c/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/albatros/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/aviojet/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/mig15bis/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/mig21bis/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/kurfurst/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/sabre/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/dora/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/dcs_mi8mtv2_magnificent_eight/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/dcs_uh1h_huey/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/dcs_combined_arms/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/dcs_black_shark_2/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/su-33_dcs_world/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/su-27_dcs_world/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/f-15c_dcs_world/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/su-25_dcs_world/',
        'https://www.digitalcombatsimulator.com/en/shop/modules/a-10a_dcs_world/',
        'https://www.digitalcombatsimulator.com/en/shop/terrains/the_channel_terrain/',
        'https://www.digitalcombatsimulator.com/en/shop/terrains/syria_terrain/',
        'https://www.digitalcombatsimulator.com/en/shop/terrains/normandy_2.0_terrain/',
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
                'https://www.digitalcombatsimulator.com/en/shop/modules/hornet/',
                'https://www.digitalcombatsimulator.com/en/shop/modules/dcs_flaming_cliffs_3/',
                'https://www.digitalcombatsimulator.com/en/shop/modules/viper/',
                'https://www.digitalcombatsimulator.com/en/shop/modules/tomcat/',
                'https://www.digitalcombatsimulator.com/en/shop/modules/supercarrier/',
                'https://www.digitalcombatsimulator.com/en/shop/modules/dcs_combined_arms/',
            ],
            Profile2: [
                'https://www.digitalcombatsimulator.com/en/shop/modules/viper/',
                'https://www.digitalcombatsimulator.com/en/shop/modules/tomcat/',
            ],
            Profile3: [
                'https://www.digitalcombatsimulator.com/en/shop/modules/supercarrier/',
                'https://www.digitalcombatsimulator.com/en/shop/modules/ah-64d/',
            ],
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

            // Create the dropdown menu with profiles
            const profileDropdown = document.createElement('select');
            profileDropdown.setAttribute('id', 'profile-dropdown'); // Set an ID for the dropdown
            for (const profile in profiles) {
                const option = document.createElement('option');
                option.value = profile; // Set the value of the option to the profile name
                option.textContent = profile; // Display the profile name in the dropdown
                profileDropdown.appendChild(option);
            }

            // Function to update the websites list when the profile is changed
            function updateWebsitesList() {
                const selectedProfile = profileDropdown.value;
                const selectedWebsites = profiles[selectedProfile];
                websitesList.innerHTML = ''; // Clear the current websites list
                for (const website of allWebsites) {
                    const websiteDiv = document.createElement('div');
                    websiteDiv.style.display = 'flex';
                    websiteDiv.style.alignItems = 'center';
                    websiteDiv.style.justifyContent = 'space-between'; // Align the checkboxes to the right
                    websiteDiv.style.marginBottom = '5px';
                    websiteDiv.style.cursor = 'pointer';

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = selectedWebsites.includes(website); // Set the checked property based on the selected websites
                    checkbox.style.pointerEvents = 'auto'; // Re-enable interactions with the checkbox
                    checkbox.style.flexShrink = '0'; // Prevent the checkbox from shrinking
                    checkbox.style.marginLeft = '60px'

                    // Use click event for toggling
                    websiteDiv.addEventListener('click', (event) => {
                        event.preventDefault();
                        if (checkbox.checked) {
                            selectedWebsites.splice(selectedWebsites.indexOf(website), 1); // Remove the website from the selected websites
                        } else {
                            selectedWebsites.push(website); // Add the website to the selected websites
                        }
                        saveProfilesToLocalStorage(profiles); // Save the updated profiles to local storage
                        checkbox.checked = !checkbox.checked; // Toggle the checkbox
                    });

                    const websiteName = document.createElement('span');
                    websiteName.textContent = getProfileName(website);
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
                const selectedProfile = profileDropdown.value;
                const selectedWebsites = profiles[selectedProfile];
                for (const website of selectedWebsites) {
                    await visitWebsiteAndClick(website);
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
            profileMenu.appendChild(profileDropdown);
            profileMenu.appendChild(websitesList);
            profileMenu.appendChild(startButton);
            profileMenu.appendChild(closeButton);
            document.body.appendChild(profileMenu);

            // Update the websites list when the profile is changed
            profileDropdown.addEventListener('change', updateWebsitesList);
            updateWebsitesList(); // Initialize the websites list
        }

        // Function to get the profile name from the URL
        function getProfileName(profileURL) {
            const prefix = 'https://www.digitalcombatsimulator.com/en/shop/';
            if (profileURL.startsWith(prefix)) {
                return profileURL.substring(prefix.length)
                .replaceAll('/', '')
                .replaceAll('modules', '')
                .replaceAll('terrains','')
                .replaceAll('terrain','')
                .replaceAll('_dcs_world','')
                .replaceAll('dcs_','')
                .replaceAll('magnificent_eight','')
            }
            return profileURL;
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

    // Add the activate button and profile menu when the DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        createActivateButton();
        addMessageListener();
    });
})();
