chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("pinterest.com")) {
        // const queryParameters = tab.url.split("com")[1];
        const queryParameters = tab.url;
        const urlParameters = new URLSearchParams(queryParameters);
        console.log(urlParameters);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            pageID: urlParameters,
        });
    }
})

