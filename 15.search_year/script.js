$(function(){
var timer = 0;
var delay = 100;
var i=0
/*$(document).bind('DOMNodeInserted', function(event) {
    if (timer) return;
    timer = setTimeout(function() {*/
        if(!location.href.match(/tbs=qdr:y/))
        location.href=location.href+'&tbs=qdr:y';
    i++;
        /*});
        timer = 0;
    }, delay);*/
});



/*var timer = 0;
var delay = 100;
$(document).bind('DOMNodeInserted', function(event) {
    if (timer) return;
    timer = setTimeout(function() {
        i=0;
        $('em').not('span.inline em').each(function() {
            var favgethtml = '<span class=inline style="background-color: #ffff00;"></span>'; 
            $(this).wrap(favgethtml);
        });
     i++;
        timer = 0;
    }, delay);
});

*/
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