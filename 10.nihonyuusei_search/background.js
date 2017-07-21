function search(info,tab){
  return function(info,tab){
    var selection = info.selectionText;
    var url = "http://tracking.post.japanpost.jp/service/singleSearch.do?org.apache.struts.taglib.html.TOKEN=&searchKind=S002&locale=ja&SVID=&reqCodeNo1="+selection;

    chrome.tabs.create({index:tab.index+1,url: url,selected:true});
  }
}

chrome.contextMenus.create({
  "title" : "日本郵政追跡",
  "type"  : "normal",
  "contexts" : ["selection"],
  "onclick" : search()
});
