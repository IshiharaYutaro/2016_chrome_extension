var defaults = {};
window.onload = function(){
	chrome.storage.local.get("defaults", function(items) {
    console.log(items);
    $("#display").html(items.defaults);
});
	delite_button();
}

    
function delite(){
	console.log("delitestart");
    chrome.storage.local.remove("defaults");
    $("#display").empty();
    chrome.storage.local.get("defaults", function(items) {
    	console.log(items.defaults);
    $("#display").html(items.defaults);
});
//});
};

function delite_button(){
chrome.storage.local.get("defaults", function(items) {
    	if(items.defaults!=undefined){
    		var btn = document.createElement("input");
            btn.id = "delite";
            btn.type = "button";
            btn.value = "削除";
            btn.onclick = delite,
            document.getElementById("form1").appendChild(btn);
    	}
});
    }