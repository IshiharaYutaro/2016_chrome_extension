var taburl;
function click(){
	
}

chrome.browserAction.onClicked.addListener(get);
function get(){
chrome.tabs.getSelected(null, function(tab) {
   taburl=tab.url;
   console.log(taburl);
   console.log("Hello2");
    var url = "http://api.b.st-hatena.com/entry.count?url="+taburl;
    console.log(url);
    $.getJSON(url)
    .done(function(url){
    console.log(url);
    	if(url);
    	$('.count').append(url);
    })
    .fail(function(url){
    	console.log('error');
    	$('.count').append('このページは取得できません。');
    })
});
}
get();
