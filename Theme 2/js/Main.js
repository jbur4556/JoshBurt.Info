function clickSection()
{
	window.location.href = ""//needs URL/Direction
}

function goToSection(id) //scrolls Bottum of section to Bottum of screen
{
	var element = document.getElementById(id);

	element.scrollIntoView(true);
}