function post(info,tab){
  return function(info,tab){
    var selection = info.pageUrl;
    var url = "https://twitter.com/intent/tweet?text="+selection;

    chrome.tabs.create({index:tab.index+1,url: url,selected:true});
  }
}
function select_post(info,tab){
  return function(info,tab){
    var selection = info.selectionText;
    var url = "https://twitter.com/intent/tweet?text="+selection;

    chrome.tabs.create({index:tab.index+1,url: url,selected:true});
  }
}

chrome.contextMenus.create({
  "title" : "twitterに投稿",
  "type"  : "normal",
  "contexts" : ["selection"],
  "onclick" : select_post()
});

chrome.contextMenus.create({
  "title" : "twitterに投稿",
  "type"  : "normal",
  "contexts" : ["page"],
  "onclick" : post()
});

