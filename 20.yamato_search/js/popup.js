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
    var url = "http://jizen.kuronekoyamato.co.jp/jizen/servlet/crjz.b.NQ0010?id="+selection;
    console.log(url);
    console.log(tabindex);
    chrome.tabs.create({index:tabindex+1,url: url,selected:true});
}