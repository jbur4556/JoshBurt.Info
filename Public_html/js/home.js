window.addEventListener("scroll",moveHeaderUnderline);

function goToSection(id) //scrolls Bottum of section to Bottum of screen
{
	var element = document.getElementById(id);

	element.scrollIntoView(false);
}

function ShowHeaderLinks(toShow,toHide,class1,class2)
{
	var e = document.getElementById(toShow);
	var el = document.getElementById(toHide);	
	
	e.classList.toggle(class1);
	el.classList.toggle(class2);
	
}

function moveHeaderUnderline()
{
	const elementStyle = document.getElementById("underline").style;
	
	var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    var percentage=(h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
	var lerpPercentage=66.66*percentage;
	
	elementStyle.marginLeft=Math.ceil(lerpPercentage) + '%'
	
	console.log(Math.ceil(lerpPercentage) + '%');
}

/*function buttonClassToggle(id,class1,class2)
{
	var el = document.getElementById(id);	
	
	if(el.className=class1)
	{
		el.classList.remove(class1);
		el.classList.add(class2);
	}
	if(el.className=class2)
	{
		el.className=class1;
	}
}*/