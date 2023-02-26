
// Icon Lock
let button1 = document.querySelector('.icon-lock');
let anim1 = bodymovin.loadAnimation({
		container: button1,
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: "image/lock.json"
});
anim1.goToAndStop(70, true);

$('.icon-lock').on('click', function() {
  if( $('.icon-lock').hasClass('active')){
    $('.icon-lock').removeClass('active');
    anim1.playSegments([40,70], true);
  }
   else{
     $('.icon-lock').addClass('active');
     anim1.playSegments([13, 40], true);
   }
})

// Icon Trash
let button2 = document.querySelector('.icon-trash');
let anim2 = bodymovin.loadAnimation({
		container: button2,
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: "image/trash.json"
});

$('.icon-trash').on('click', function() {
    anim2.playSegments([0,55], true);
})

// Icon Eye

let button3 = document.querySelector('.icon-eye');
let anim3 = bodymovin.loadAnimation({
    container: button3,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "image/eye.json"
});
anim3.goToAndStop(0, true);

$('.icon-eye').on('click', function () {
    if ($('.icon-eye').hasClass('active')) {
        $('.icon-eye').removeClass('active');
        anim3.playSegments([33,60 ], true);
    }
    else {
        $('.icon-eye').addClass('active');
        anim3.playSegments([0, 33], true);
    }
})


// Icon Speaker
let button4 = document.querySelector('.icon-speaker');
let anim4 = bodymovin.loadAnimation({
		container: button4,
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: "image/speaker.json"
});
anim4.goToAndStop(0, true);

$('.icon-speaker').on('click', function() {
  if( $('.icon-speaker').hasClass('active')){
    $('.icon-speaker').removeClass('active');
    anim4.playSegments([36,50], true);
  }
   else{
     $('.icon-speaker').addClass('active');
     anim4.playSegments([0, 36], true);
   }
})

// Icon OnOff
let button5 = document.querySelector('.icon-onoff');
let anim5 = bodymovin.loadAnimation({
		container: button5,
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: "image/onoff.json"
});
anim5.goToAndStop(0, true);

$('.icon-onoff').on('click', function() {
  if( $('.icon-onoff').hasClass('active')){
    $('.icon-onoff').removeClass('active');
    anim5.playSegments([40,60], true);
  }
   else{
     $('.icon-onoff').addClass('active');
     anim5.playSegments([0, 40], true);
   }
})

// Icon Like 
let button6 = document.querySelector('.icon-like');
let anim6 = bodymovin.loadAnimation({
		container: button6,
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: "image/like.json"
});
anim6.goToAndStop(0, true);

$('.icon-like').on('click', function() {
  if( $('.icon-like').hasClass('active')){
    $('.icon-like').removeClass('active');
    anim6.playSegments([30,46], true);
  }
   else{
     $('.icon-like').addClass('active');
     anim6.playSegments([0, 30], true);
   }
})

// Icon Check (reversed annimation)
let button7 = document.querySelector('.icon-check');
let anim7 = bodymovin.loadAnimation({
		container: button7,
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: "image/check.json"
});

let direction = 1;
button7.addEventListener('click', (e) => {
  anim7.setDirection(direction);
  anim7.play();
  direction = -direction;
});

// Icon Hamburger
let button8 = document.querySelector('.icon-hamburger');
let anim8 = bodymovin.loadAnimation({
		container: button8,
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: "image/hamburger.json"
});

let direction2 = 1;
button8.addEventListener('click', (e) => {
  anim8.setDirection(direction2);
  anim8.play();
  direction2 = -direction2;
});

// Icon Like 
let button9 = document.querySelector('.icon-book');
let anim9 = bodymovin.loadAnimation({
		container: button9,
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: "image/book.json"
});
anim9.goToAndStop(0, true);

$('.icon-book').on('click', function() {
  if( $('.icon-book').hasClass('active')){
    $('.icon-book').removeClass('active');
    anim9.playSegments([25,44], true);
  }
   else{
     $('.icon-book').addClass('active');
     anim9.playSegments([0, 25], true);
   }
})






