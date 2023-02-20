// this block of code first checks if the active tab is a youtube page , then extracts the query paramaters
// the part after the uestion mark to give each video a unique key value 

chrome.tabs.onUpdated.addListener((tabId,tab)=>{
  if(tab.url && tab.url.includes('youtube.com/watch')) {
    const queryParamters = tab.url.split('?')[1];
    const urlParameters = new URLSearchParams(queryParamters);

    //using thsi, theres a messaging system that happens between our extesnion , with thts we are saying that a new video has loaded , it takes a tabId, it takes in a unique object ,anf it aalso takes a callback function 
    chrome.tabs.sendMessage(tabId,{
      type:'NEW',
      videoId:urlParameters.get('v')
    })
  }
})