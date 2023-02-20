// this block of code first checks if the active tab is a youtube page , then extracts the query paramaters
// the part after the uestion mark to give each video a unique key value 

chrome.tabs.onUpdated.addListener((tabId,tab)=>{
  if(tab.url && tab.url.includes('youtube.com/watch')) {
    const queryParamters = tab.url.split('?')[1];
    const urlParameters = new URLSearchParams(queryParamters);

  
  }
})