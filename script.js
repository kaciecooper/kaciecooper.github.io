// your script file for adding your own jquery
$(function() {

//the body group moves on the y for -60 (up)
TweenMax.to(".project-section", 2.0, { 
	y:-20, 
	repeat:-1, 
	yoyo:true, 
	ease:Power1.easeInOut 		
});

function showNav(){
$('.navbar').html(

`

		
			  <div class="dropdown-insp">
			    <button class="dropbtn2">Inspiration
			    </button>
			    <div class="dropdown-content2">
			      <a href="#"class="nav-link"></a>
			      <a href="#"class="nav-link"></a>
			      <a href="#"class="nav-link"></a>
			    </div>
			  </div> 
	
					
			  <div class="dropdown">
			    <button class="dropbtn">In Class Demos
			    </button>
			    <div class="dropdown-content">
			      <a href="file:///Users/kaciecooper/Documents/GitHub/kaciecooper.github.io/css-grid.html"class="nav-link" class="hw-1-link">Css Grid</a>
			      <a href="file:///Users/kaciecooper/Documents/GitHub/kaciecooper.github.io/media-queries.html"class="nav-link" class="hw-2-link">Media Queries</a>
			      <a href="#"class="nav-link"></a>
			    </div>
				</div>
`
);

}

function addActiveClass () {
if($('body.hw-1')) {
	$('.hw-1-link').addClass('active')

	}else if($('body.hw-2') ){
		$('.hw-2-link').addClass('active');
	}
}


function initiatize() {
	showNav();
	addActiveClass();
}

$(initiatize()); 






// End of Your Code . Don't delete that line below!!
});

