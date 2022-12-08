const searchbtn = document.getElementById("searchbtn")
const urlbar = document.getElementById("urlbar")
const webview = document.getElementById("webview")

searchbtn.onclick = function() {
	var query = urlbar.value
	if (query.startsWith("http") == false) {
		query = "https://google.com/?q=" + urlbar.value
	}
	webview.setAttribute("src", query)
}