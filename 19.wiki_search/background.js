function search(info,tab){
  return function(info,tab){
    var selection = info.selectionText;
    var url = "https://ja.wikipedia.org/wiki/"+selection;

    chrome.tabs.create({index:tab.index+1,url: url,selected:true});
  }
}

chrome.contextMenus.create({
  "title" : "wikiで検索したいものをセレクト。",
  "type"  : "normal",
  "contexts" : ["selection"],
  "onclick" : search()
});

