function post(tab){
  return function(tab){
    var selection = tab.url;
    var title =tab.title;
    console.log(selection.length+title.length);
    var url = "https://twitter.com/intent/tweet?url="+selection+"&text="+title;
    //if(selection.length+title.length<=140)
    chrome.tabs.create({index:tab.index+1,url: url,selected:true});
 /*   else
    	alert("140文字以上です。");
  }*/
}
}

chrome.browserAction.onClicked.addListener(post());
