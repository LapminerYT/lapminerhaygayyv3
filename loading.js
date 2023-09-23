// =====================
//        LOADING
// =====================

var timeLimit = 10000;
window.addEventListener("load", function() {
	window.location.href = "https://lapminer.lapminerstudio.repl.co";
});

var errorTimer = setTimeout(function() {
	document.getElementById("loading").style.display = "none";
	document.getElementById("error-message").style.display = "block";
}, timeLimit);
