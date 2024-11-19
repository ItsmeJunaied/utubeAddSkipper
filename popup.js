// Request video details from content script
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // Send a message to the content script to get video details
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "getVideoDetails" },
      (response) => {
        // Check for errors in communication
        if (chrome.runtime.lastError) {
          console.warn("Could not connect to content script:", chrome.runtime.lastError.message);
          document.getElementById("videoTitle").textContent = "No video detected";
          document.getElementById("videoURL").textContent = "N/A";
        } else if (response) {
          // Update popup with the video details
          document.getElementById("videoTitle").textContent = response.title;
          document.getElementById("videoURL").textContent = response.url;
          document.getElementById("videoURL").href = response.url;
        }
      }
    );
  });
  