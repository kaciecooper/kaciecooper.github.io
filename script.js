// your script file for adding your own jquery
$(function() {

//the body group moves on the y for -60 (up)
TweenMax.to(".project-section", 2.0, { y:-20, repeat:-1, yoyo:true, ease:Power1.easeInOut });


/*
//the shadow is scaling the same as the body moves, and its
//opacity is changing to 0.3 when the ghost goes higher
//and we transform the origin to 50%50% so it scales from
//the middle not at the beginning of the ellipse
TweenMax.to(".shadow", 2.0, { scale:0.8, repeat:-1, opacity:0.1, transformOrigin:"50% 50%", yoyo:true, ease:Power1.easeInOut });
*/

// End of Your Code . Don't delete that line below!!
});


