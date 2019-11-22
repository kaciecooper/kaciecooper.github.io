
// your script file for adding your own jquery
$(function() {





document.addEventListener('DOMContentLoaded', function() {


select = function(s) {
    return document.querySelector(s);
}

selectAll = function(s) {
    return [].slice.call(document.querySelectorAll(s));
}

reverseArray = function(a){
    return [].concat(a).reverse();
}


var     adrienneAll = selectAll('#adrienne>g, #adrienne>path'),
        adrienneA = select('#a-4'),
        adrienneExA = selectAll('#adrienne>g, #adrienne>path:not(#a-4)'),
        revAdrienneAll = reverseArray(adrienneAll),
    
        fordAll = selectAll('#ford>path'),
        fordD = select('#d-4'),
        fordExD = selectAll('#ford>path:not(#d-4)'),
        revFordAll = reverseArray(fordAll),
        revFordExD = reverseArray(fordExD),
    
        adAll = select('#ad'),
    
        artAll = selectAll('#art>path'),
        artA = select('#a-2'),
        artExA = selectAll('#art>path:not(#a-2)'),
        revArtExA = reverseArray(artExA),
    
        directorAll = selectAll('#director>path'),
        directorD = select('#d-2'),
        directorExD = selectAll('#director>path:not(#d-2)'),
        revDirectorExD = reverseArray(directorExD),
    
    
        designerAll = selectAll('#designer>path'),
        designerD = select('#d'),
        designerExD = selectAll('#designer>path:not(#d)'),
    
        strategistAll = selectAll('#strategist>g, #strategist>path'),
        strategistS = select('#s-2'),
        strategistExS = selectAll('#strategist>g, #strategist>path:not(#s-2)'),
        
    
        amp1 = select('#amp1'),
        amp2 = select('#amp2'),
    mainTl = new TimelineMax({repeat: -1, yoyo: true});
    


    function init(){

        mainTl
            .set('svg', {className: '-=invisible'})
            .set('svg', {visibility: 'visible'})
            .set(adrienneAll, {autoAlpha: 0})
            .set(fordAll, {autoAlpha: 0})
            .set(adAll, {autoAlpha: 0})
            .set(artAll, {autoAlpha: 0})
            .set(directorAll, {autoAlpha: 0})
            .set(designerAll, {autoAlpha: 0})
            .set(strategistAll, {autoAlpha: 0})
            .set(amp2, {autoAlpha: 0})
            .set(amp1, {autoAlpha: 0})


        /* distances
        a to ad = x: 58.5
        d to ad = x: -58.5
        a to art = x: 1.2
        d to director = x: -90.6
        d to designer = x: -113.2
        */

        
        //adrienne and ford animate in
            .staggerFromTo(revAdrienneAll, .6, {autoAlpha: 0, x: -2, ease: Power1.easeInOut}, {autoAlpha: 1, x: 0, ease: Power2.easeInOut}, 0.05)
            .staggerFromTo(revFordAll, .6, {autoAlpha: 0, x: -2, ease: Power1.easeInOut}, {autoAlpha: 1, x: 0, ease: Power2.easeInOut}, 0.05, .4)
            
        
        //adrienne and ford condense
            .add('ad')
            .staggerTo(adrienneExA, .6, {autoAlpha: 0, x: -2, ease: Power2.easeInOut}, 0.05)
            .staggerTo(revFordExD, .6, {autoAlpha: 0, x: 2, ease: Power2.easeInOut}, 0.05, 'ad')
        
        //a and d to ad
            .to('#adrienne', 1, {x: 58.5, ease: Power1.easeInOut}, 'ad+=0.1')
            .to('#ford', 1, {x: -58.5, ease: Power1.easeInOut}, 'ad+=0.1')
            
        //ad to art and director position
        //sets the art and director text to where 'ad' scene is
            .set('#art', {x: 57.3})
            .set('#director', {x: 32.1})
            .add('artDirector')
            .to('#adrienne', 1, {x: 1.2, ease: Power1.easeInOut}, 'artDirector')
            .to('#art', 1, {x: 0, ease: Power1.easeInOut}, 'artDirector')
            .to('#ford', 1, {x: -90.6, ease: Power1.easeInOut}, 'artDirector')
            .to('#director', 1, {x: 0, ease: Power1.easeInOut}, 'artDirector')
        
            
        //art and director animate in
            
            .staggerFromTo(revArtExA, .6, {autoAlpha: 0, x: -2, ease: Power1.easeInOut}, {autoAlpha: 1, x: 0, ease: Power2.easeInOut}, 0.05, 'artDirector+=0.3')
            .staggerFromTo(revDirectorExD, .6, {autoAlpha: 0, x: -2, ease: Power1.easeInOut}, {autoAlpha: 1, x: 0, ease: Power2.easeInOut}, 0.05, 'artDirector+=0.4')

  
            
        ;


    }


    init();

});



// End of Your Code . Don't delete that line below!!
});


