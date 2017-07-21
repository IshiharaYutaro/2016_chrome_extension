function search(info,tab){
  return function(info,tab){
    var selection = info.selectionText;
    var url = "http://k2k.sagawa-exp.co.jp/p/web/okurijosearch.do?okurijoNo="+selection;

    chrome.tabs.create({index:tab.index+1,url: url,selected:true});
  }
}

chrome.contextMenus.create({
  "title" : "佐川急便追跡",
  "type"  : "normal",
  "contexts" : ["selection"],
  "onclick" : search()
});
