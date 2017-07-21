function copy(info,tab){
    return function(info,tab){
        console.log("start!!");
    var selection = info.selectionText;
    console.log(selection);
    var defaults = {};

chrome.storage.local.set({'defaults':selection}, function() {
    console.log('stored');
});
}
  };

chrome.contextMenus.create({
  "title" : "メモしたいものをセレクトして下さい。",
  "type"  : "normal",
  "contexts" : ["selection"],
  "onclick" : copy()
});
