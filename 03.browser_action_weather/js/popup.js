var taburl;
function click(){
	
}

chrome.browserAction.onClicked.addListener(get);
function get(){
chrome.tabs.getSelected(null, function(tab) {
   taburl=tab.url;
   console.log(taburl);
   console.log("Hello2");
    var url = "http://weather.livedoor.com/forecast/webservice/json/v1?city=130010";
    console.log(url);
    $.getJSON(url)
    .done(function(url){
    console.log(url['forecasts'][0]['telop']);
    	if(url['forecasts'][0]['telop']);
    	$('.count').append(url['forecasts'][0]['telop']);
    })
    .fail(function(url){
    	console.log('error');
    	$('.count').append('このページは取得できません。');
    })
});
}
get();
