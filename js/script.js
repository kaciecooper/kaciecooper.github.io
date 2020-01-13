alert("hi there");


function showNav(){
$('#topnav').html(

`
<ul class="menu">
		<li class="resources-link"><a href="#">resources</a>
		<li class="resources-link"><a href="#">resources</a>
		<li class="resources-link"><a href="#">resources</a>
</ul>
`
);

}



function addActiveClass () {
if($('body').class ('.favorite-foods')) {
	alert('favorite-foods');
}

}





function initiatize() {
	showNav();
}



$(initiatize()); 
