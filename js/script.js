

function showNav(){
$('#topnav').html(

`
<ul class="menu">
		<li class="resources-link"><a href="#">resources 1</a>
		<li class="resources-link"><a href="favorite-foods.html">resources 2</a>
		<li class="resources-link"><a href="#">resources 3 </a>
</ul>
`
);

}



function addActiveClass () {
if($('body.favorite-foods')) {
	$('.favorite-foods-link').addClass('active')

	}else if($('body.resources') ){
		$('.resources-link').addClass('active');
	}

}



function initiatize() {
	showNav();
	addActiveClass();
}



$(initiatize()); 
