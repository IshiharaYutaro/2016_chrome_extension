var timer = 0;
var delay = 100;
$(document).bind('DOMNodeInserted', function(event) {
    if (timer) return;
    timer = setTimeout(function() {
            $("#logocont img").attr("src","https://downdetector.jp/i/logo/yahoo-japan_logo.png");
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