// =====================
//        LOADING
// =====================

var timeLimit = 10000;
window.addEventListener("load", function() {
	window.location.href = "/vn/index.html";
});

var errorTimer = setTimeout(function() {
	document.getElementById("loading").style.display = "none";
	document.getElementById("error-message").style.display = "block";
}, timeLimit);
