// content.js
var url      = window.location.href;     // Returns full URL

if (url.indexOf("?q=") > -1 || url.indexOf("&q=") > -1) {

	if (url.indexOf("tbs=qdr") > -1) {
		//alert("Present");
	} else {
		//alert("NotPresent");
		var recentURL = url+"&tbs=qdr:y";
		$(location).attr('href',recentURL);
	}

}