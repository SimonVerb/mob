

$(function () {
   $('.header__btn').on('click', function(){
    $('.cooperation__menu').toggleClass('active');
   });

   $('.form__btn, .cross').on('click', function(){
    $('.cooperation__menu, body').removeClass('active');
   });


   $('.about__btn').on('click', function(){
      $('.about-us').toggleClass('active-about');
     });
  
     $('.cross-about').on('click', function(){
      $('.about-us').removeClass('active-about');
     });

     $('.burger').on('click', function(){
      $('.header__inner').toggleClass('active-menu');
     });
     



   $(document).mouseup(function (e){ 
		var div = $("#nav"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
            $('.cooperation__menu').removeClass('active'); 
		}
	});

   $(".button").click(function() {
      $('.toggled_block').toggle();
    });

   $(document).ready(function () {
      $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
      });
      $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
      });
      });

      $(document).ready(function(){
         $("a").on('click', function(event) {
           if (this.hash !== "") {
             event.preventDefault();
             var hash = this.hash;
             $('html, body').animate({
               scrollTop: $(hash).offset().top
             }, 800, function(){
               window.location.hash = hash;
             });
           }
         });
       });

       $ ('.sliderbar').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 3,
         rows: 2
         
       });
})





const player = document.querySelector('.example__box-player'),
playBtn = document.querySelector('.example__box-player__img'),
audio = document.querySelector('.audio'),
progressContainer = document.querySelector('.progress__container'),
progress = document.querySelector('.progress')




function updateProgress(e) {
   const {duration, currentTime} = e.srcElement
   const progressPercent = (currentTime / duration) * 100
   progress.style.width = `${progressPercent}%` 
}
audio.addEventListener('timeupdate', updateProgress)

function playSong() {
   player.classList.add('play')
   audio.play()
}


function pauseSong() {
   player.classList.remove('play')
   audio.pause()
}

playBtn.addEventListener('click', () =>{
   const isPlaying = player.classList.contains('play')
   if (isPlaying) {
      pauseSong()
   } else {
      playSong()
   }
})

function setProgress (e) {
   const width = this.clientWidth
   const clickX = e.offsetX
   const duration = audio.duration
   audio.currentTime = (clickX / width) * duration
}
progressContainer.addEventListener('click', setProgress)

