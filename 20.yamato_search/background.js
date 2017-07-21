function search(info,tab){
  return function(info,tab){
    var selection = info.selectionText;
    var url = "http://jizen.kuronekoyamato.co.jp/jizen/servlet/crjz.b.NQ0010?id="+selection;

    chrome.tabs.create({index:tab.index+1,url: url,selected:true});
  }
}

chrome.contextMenus.create({
  "title" : "ヤマト運輸追跡",
  "type"  : "normal",
  "contexts" : ["selection"],
  "onclick" : search()
});
