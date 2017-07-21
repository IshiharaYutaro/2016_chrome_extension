var timer = 0;
var delay = 100;
$(document).bind('DOMNodeInserted', function(event) {
    if (timer) return;
    var url="https://techcrunchjp.files.wordpress.com/2010/07/yahoo-japan.png";
    timer = setTimeout(function() {
            $("#lga img").attr("src",url);
            $("#logo-sub").empty();
        timer = 0;
    }, delay);
});




/*$(function(){
    function attachFavicon(){
        if($("img.favi").length) ret/*urn

        $("em").each(function(){
            //var domain = this.host;
            //var favget = "//www.google.com/s2/favicons?domain="+domain;
            var favgethtml = '<span style="background-color: #ffff00;">HI'; 
            $(this).prepend(favgethtml);
            $(this).prepend("</span>");
        });
    }

    const mo1 = new MutationObserver(_ => {
        if($("#search").length == 0) return

        mo2.observe($("#search").get(0), {childList: true})

        mo1.disconnect()
    })
    const mo2 = new MutationObserver(_ => {
        attachFavicon()
    })

    mo1.observe(document.body, {childList: true, subtree: true})

    attachFavicon()
})*/