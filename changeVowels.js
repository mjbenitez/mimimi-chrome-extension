const button = document.getElementById('changeText');



button.addEventListener('click', async () =>{
    // get chrome tabs API and get all the tabs in the browser, but returns only the active, the current one
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setVocalsText,
    });
});

function setVocalsText() {
    chrome.storage.sync.get( () => {
        document.body.innerText = document.body.innerText.replace(/[aeiou]/gi, 'i');
    });

}