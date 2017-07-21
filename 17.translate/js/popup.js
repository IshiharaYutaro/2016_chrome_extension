chrome.tabs.getSelected(null, function(tab) {
   tabindex=tab.index;
   taburl=tab.url;
   console.log(taburl);
   var url = "https://translate.google.co.jp/translate?sl=auto&tl=ja&js=y&prev=_t&hl=ja&ie=UTF-8&u="+taburl;
    console.log(url);
    chrome.tabs.create({index:tabindex+1,url: url,selected:true});
});
