$(document).ready(function() {
$('#search').on("click",function (){
   click();
});
});

chrome.tabs.getSelected(null, function(tab) {
   tabindex=tab.index;
});

function click(){
  var selection = $(".textBox").val();
  console.log(selection);
    var url = "http://tracking.post.japanpost.jp/service/singleSearch.do?org.apache.struts.taglib.html.TOKEN=&searchKind=S002&locale=ja&SVID=&reqCodeNo1="+selection;
    console.log(url);
    console.log(tabindex);
    chrome.tabs.create({index:tabindex+1,url: url,selected:true});
}