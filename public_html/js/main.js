var BGColor = "#fafafa"
var BGHighlightColor = "#aaaaaa";
var slide = 1;


function goToWebsite(url)
{
	window.location.href = url;
}

function clickSection()
{
	window.location.href = ""//needs URL/Direction
}

function goToSection(id) //scrolls Bottum of section to Bottum of screen
{
	var element = document.getElementById(id);
	element.scrollIntoView(true);

	BGHilight(element);

	closeNav();
	/*var col = element.style.backgroundColor;
	element.style.backgroundColor = "red";
	setTimeout(function(){element.style.backgroundColor = col;}, 1000);*/
} 

function BGHilight(el)
{
	el.style.backgroundColor = BGHighlightColor;
	setTimeout(function(){el.style.backgroundColor = BGColor;}, 750);
}

function openNav()
{
	document.getElementById("dropDown").style.height = "100%";
}

function closeNav()
{
	document.getElementById("dropDown").style.height = "0%";
}

function moveSlide(n)
{
	showSlide(slide +=1);
}

function showSlide(n)
{
	var i;
	var x = document.getElementsByClassName("slides");

	if(n > x.length)
	{
		slide = 1;
	}
	if(n < 1)
	{
		slide = x.length;
	}
	for(i=0; i<x.length; i++)
	{
		x[i].style.display = "none";
	}
	
	x[slide-1].style.display ="block";
}
