function post(info,tab){
  return function(info,tab){
    var selection = info.pageUrl;
    var url = "http://b.hatena.ne.jp/nihon_lab/add.confirm?url="+selection;

    chrome.tabs.create({index:tab.index+1,url: url,selected:true});
  }
}
function select_post(info,tab){
  return function(info,tab){
    var selection = info.selectionText;
    var url = "http://b.hatena.ne.jp/nihon_lab/add.confirm?url="+selection;
    chrome.tabs.create({index:tab.index+1,url: url,selected:true});
  }
}

chrome.contextMenus.create({
  "title" : "hatenaブックマークに追加をする。",
  "type"  : "normal",
  "contexts" : ["selection"],
  "onclick" : select_post()
});

chrome.contextMenus.create({
  "title" : "はてなブックマークに追加する",
  "type"  : "normal",
  "contexts" : ["page"],
  "onclick" : post()
});

