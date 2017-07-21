var taburl;
function click(){
	
}


console.log("Hello1");
chrome.browserAction.onClicked.addListener(get);
function get(){
chrome.tabs.getSelected(null, function(tab) {
   taburl=tab.url;
   console.log(taburl);
   console.log("Hello2");
    var url = "http://graph.facebook.com/?id="+taburl;
    console.log(url);
    $.getJSON(url)
    .done(function(url){
    console.log(url['share']['share_count']);
    	if(url['share']['share_count']);
    	$('.count').append(url['share']['share_count']);
    })
    .fail(function(url){
    	console.log('error');
    	$('.count').append('このページは取得できません。');
    })
});
}
get();
