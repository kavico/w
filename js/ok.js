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
};
var cornertool = true;
function cl() {
    var a = document.getElementById("catalog-col"), b = document.getElementById("catalog"), c = document.getElementById("cornertool"), d;
    if (a && !b) {
        if (c) {
            c = c.getElementsByTagName("ul")[0];
            d = document.createElement("li");
            d.setAttribute("id", "catalog");
            d.setAttribute("onclick", "Catalogswith()");
            d.appendChild(document.createElement("span"));
            c.appendChild(d)
        } else {
            cornertool = false;
            c = document.createElement("div");
            c.setAttribute("id", "cornertool");
            c.innerHTML = '<ul><li id="catalog" onclick="Catalogswith()"><span></span></li></ul>';
            document.body.appendChild(c)
        }
        document.getElementById("catalog").className = a.className
    }
    if (!a && b) {
        cornertool ? c.getElementsByTagName("ul")[0].removeChild(b) : document.body.removeChild(c)
    }
    if (a && b) {
        b.className = a.className
    }
}
cl();
function switchNightMode() {
	var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
	if (night == '0') {
		document.querySelector('link[title="dark"]').disabled = true;
		document.querySelector('link[title="dark"]').disabled = false;
		document.cookie = "night=1;path=/"
		console.log('夜间模式开启');
	} else {
		document.querySelector('link[title="dark"]').disabled = true;
		document.cookie = "night=0;path=/"
		console.log('夜间模式关闭');
	}
}(function() {
	if (document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") === '') {
		if (new Date().getHours() > 20 || new Date().getHours() < 6) {
			document.querySelector('link[title="dark"]').disabled = true;
			document.querySelector('link[title="dark"]').disabled = false;
			document.cookie = "night=1;path=/"
			console.log('夜间模式开启');
		} else {
			document.cookie = "night=0;path=/"
			console.log('夜间模式关闭');
		}
	} else {
		var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
		if (night == '0') {
			document.querySelector('link[title="dark"]').disabled = true;
			console.log('夜间模式关闭');
		} else if (night == '1') {
			document.querySelector('link[title="dark"]').disabled = true;
			document.querySelector('link[title="dark"]').disabled = false;
			console.log('夜间模式开启');
		}
	}
})();
