// Copy email to clipboard
// Source: https://stackoverflow.com/questions/47931843/javascript-copy-to-clipboard-not-working and https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_copy_clipboard2

function copyText() {
	navigator.clipboard.writeText("chhaymatt@gmail.com");
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied: chhaymatt@gmail.com";
}

function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy email to clipboard";
}

// Click any nav link and collapse hamburger nav
function closeNav() {
	document.getElementById("navToggle").checked = false;
}
