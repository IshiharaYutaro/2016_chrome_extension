function post(tab){
  return function(tab){
    var selection = tab.url;
    var title =tab.title;
    var url = "https://www.facebook.com/sharer/sharer.php?u="+selection;
    chrome.tabs.create({index:tab.index+1,url: url,selected:true});
  }
}

chrome.browserAction.onClicked.addListener(post());
