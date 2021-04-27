window.onscroll = function() {
    let scrollNow = window.pageYOffset;
    let pageClientHeight = document.documentElement.clientHeight;
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - pageClientHeight; // Full Window Height minus the viewport height
    let fullWindowHeightInPercentage = Math.round(
        (scrollNow / scrollHeight) * 100 
    );
    let percentage = document.getElementById('percentage');
    percentage.innerHTML = fullWindowHeightInPercentage + '%';
    if (fullWindowHeightInPercentage >= 95)  percentage.innerHTML = '<div style="font-size:133.3334%">▲</div>';

    var a = document.documentElement.scrollTop || document.body.scrollTop;
    var x = document.getElementById("top");
    var y = document.getElementById("secondary").hasAttribute("sidebar-fixed");
    var z = document.getElementById("header");
    if (x) {
        var b = document.getElementById("top");
        if (a >= 200) {
            b.removeAttribute("class")
        } else {
            b.setAttribute("class", "hidden")
        }
        b.onclick = function totop() {
            var a = document.documentElement.scrollTop || document.body.scrollTop;
            if (a > 0) {
                requestAnimationFrame(totop);
                window.scrollTo(0, a - (a / 5))
            } else {
                cancelAnimationFrame(totop)
            }
        }
    }
    if (y) {
        var e = document.getElementById("mainbody");
        var f = document.getElementById("secondary");
        var g = document.documentElement.clientHeight;
        var h = z ? 0 : 51;
        if (e.offsetHeight > f.offsetHeight) {
            if (f.offsetHeight > g - 71 && a > f.offsetHeight + 101 - g) {
                if (a < e.offsetHeight + 101 - g) {
                    f.style.marginTop = (a - f.offsetHeight - 36 + g) + "px"
                } else {
                    f.style.marginTop = (e.offsetHeight - f.offsetHeight + 65) + "px"
                }
            } else if (f.offsetHeight <= g - 71 && a > 30 + h) {
                if (a < e.offsetHeight - f.offsetHeight + h) {
                    f.style.marginTop = (a + 35 - h) + "px"
                } else {
                    f.style.marginTop = (e.offsetHeight - f.offsetHeight + 35) + "px"
                }
            } else {
                f.removeAttribute("style")
            }
        }
    }
}
