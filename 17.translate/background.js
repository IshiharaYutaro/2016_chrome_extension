function jp_en_search(info,tab){
  return function(info,tab){
    var selection = info.selectionText;
    var url = "https://translate.google.com/?hl=ja#en/ja/"+selection;

    chrome.tabs.create({index:tab.index+1,url: url,selected:true});
  }
}

function en_jp_search(info,tab){
  return function(info,tab){
    var selection = info.selectionText;
    var url = "https://translate.google.com/?hl=ja#ja/en/"+selection;

    chrome.tabs.create({index:tab.index+1,url: url,selected:true});
  }
}

chrome.contextMenus.create({
  "title" : "英語へ翻訳",
  "type"  : "normal",
  "contexts" : ["selection"],
  "onclick" : en_jp_search()
});

chrome.contextMenus.create({
  "title" : "日本語へ翻訳",
  "type"  : "normal",
  "contexts" : ["selection"],
  "onclick" : jp_en_search()
});