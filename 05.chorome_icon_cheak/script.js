var timer = 0;
var delay = 100;
$(document).bind('DOMNodeInserted', function(event) {
    if (timer) return;
    timer = setTimeout(function() {
        $('h3.r>a:first-child').each(function() {
            if (!$(this).children('img')[0]) {
                var domain = this.host;
            var favget = "//www.google.com/s2/favicons?domain="+domain;
            var favgethtml = "<img src='"+favget+"' class='favi'/>"; 
            $(this).parent().prepend(favgethtml);
            }
        });
        timer = 0;
    }, delay);
});

//最初以下のプログラムで書いたが、上記のファイルをみつけ、こちらの方がしんぷるであったため、一部改変して使用
//https://github.com/junion-org/GoogleWithFavicons
/*$(function(){
    function attachFavicon(){
        if($("img.favi").length) return

        $("h3.r a").each(function(){
            var domain = this.host;
            var favget = "//www.google.com/s2/favicons?domain="+domain;
            var favgethtml = "<img src='"+favget+"' class='favi'/>"; 
            $(this).parent().prepend(favgethtml);
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