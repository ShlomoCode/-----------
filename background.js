chrome.action.onClicked.addListener((tab) => {
    if (tab.url?.startsWith('chrome://')) return undefined;
    chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        files: ['content.js'],
    });
});
