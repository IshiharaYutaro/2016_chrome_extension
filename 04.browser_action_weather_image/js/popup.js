var taburl;
function click(){
	
}

chrome.browserAction.onClicked.addListener(get);
function get(){
chrome.tabs.getSelected(null, function(tab) {
     DD = new Date();
     year = DD.getYear()+1900;
     month = DD.getMonth() + 1;
     day = DD.getDate();
     hours = DD.getHours();
     minutes = DD.getMinutes()-5;
     no=minutes%10;
     console.log(no);
     if(no<5){
     minutes=minutes-no;
}
else{
     minutes=minutes-no+5;  
}
console.log(minutes);
     if(month < 10) { month = "0" + month; }
if(day < 10) { day = "0" + day; }
if(hours < 10) { hours = "0" + hours; }
if(minutes < 10) { minutes = "0" + minutes;}
     console.log(year+month+day+hours+minutes);
    $('.image').append("<img>");
    $('.image').append(($("<img>").attr({"src":"http://www.jma.go.jp/jp/radnowc/imgs/radar/000/"+year+month+day+hours+minutes+"-00.png","alt":"Photo","width":"550px"})));
});
}
get();
