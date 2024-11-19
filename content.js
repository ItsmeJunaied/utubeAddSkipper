
function skipAd() {
    const skipButton = document.querySelector('.ytp-skip-ad-button');
    if (skipButton) {
      skipButton.click();
      console.log("Ad skipped!");
    }
  }
  

  setInterval(skipAd, 1000);
  
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getVideoDetails") {
      const videoTitle = document.title;
      const videoURL = window.location.href;
      sendResponse({ title: videoTitle, url: videoURL });
    }
  });
  