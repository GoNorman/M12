"use strict";

let leftTeamPoint = 0;
let rightTeamPoint = 0;
$('h3').hide();
function random(ev) {
    return Math.floor(Math.random() * Math.floor(ev));
} 

function goal() {
    setTimeout(function () {
        $('h3').slideDown('slow')
    }, 200);
    setTimeout(function () {
        $('h3').slideUp('slow')
    }, 1800)
    setTimeout(function () {
        $('.ball').animate(
            {
                left: '47%',
                top: '45%',
            }
        );
    }, 900)
}

$('.ball').click(function () {
    if($('.ball').offset().left > 960)
    {
        $('.ball').animate({
            left: 0,
            top : random(900),
        }, { complete: function(){
            let coordinatY = $('.ball').offset().top;
            let coordinatX = $('.ball').offset().left;
            if ((coordinatY >= 420 && coordinatY <= 583) && coordinatX == 0) {
                window.goal();
                rightTeamPoint++
                setTimeout(function () {
                    $('.right-team-point').text(rightTeamPoint);
                }, 280)
            }
        }});
    } else {
        $('.ball').animate({
                left: 1820,
                top: random(900), 
        }, { complete: function () {
            let coordinatY = $('.ball').offset().top;
            let coordinatX = $('.ball').offset().left;    
            if ((coordinatY >= 420 && coordinatY <= 583) && coordinatX >= 1820) {
                window.goal();
                leftTeamPoint++
                setTimeout(function () {
                    $('.left-team-point').text(leftTeamPoint);
                    }, 280)
                }
            },
        });    
    }    
});