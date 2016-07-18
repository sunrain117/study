; (function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

document.documentElement.addEventListener("touchstart",function(){});


/*$(function () {
    $(".hl-input").on("input", function () {
        var val = $(this).val();
        if (val) {
            $(this).next(".hl-close").show();
        } else {
            $(this).next(".hl-close").hide();
        }
    });
    $(".hl-close").on("touchend", function () {
        var prev = $(this).prev(".hl-input");
        prev.val("");
        $(this).hide();
    });

    $(".hl-pwd").on("input", function () {
        var val = $(this).val();
        if (val) {
            $(this).next(".showPwd").show();
        } else {
            $(this).next(".showPwd").hide();
        }
    });

    // $(".quit").on("touchend", function () {
    //     showDialog();
    // }); 
    
    // $(".btncancel").on("touchend", function () {
    //     cancelDialog();
    // });


});*/

