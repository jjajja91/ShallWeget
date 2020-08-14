var catController = function (space) {
    this.space = space;
    this.init();
};

catController.prototype.init = function () {
    this.initElement();
};

catController.prototype.initElement = function () {
  var $this = this;



// =================================================================

var textcontainer = document.createElement('div');
textcontainer.setAttribute('class','textcontainer');


var cat_song = document.createElement('audio');
cat_song.setAttribute('id','cat_song');
cat_song.src = "./music/cat_music1.mp3";




// =================================================================


var catbread_body = document.createElement('div');
catbread_body.setAttribute('id', 'catbread_body');


var particletext = document.createElement('div');
particletext.setAttribute('class','particletext confetti');
particletext.setAttribute('id','PC');


// =================================================================


var animated = document.createElement('span');
animated.innerHTML += '　♪♬♪';
animated.setAttribute('id','animated-text');


// =================================================================


var catbread = document.createElement('input');
catbread.setAttribute('id', 'catbread');
catbread.setAttribute('type', 'checkbox');

var j_catbread = document.createElement('label');
j_catbread.setAttribute('class', 'j_catbread');
j_catbread.setAttribute('for', 'catbread');


// =====================================================


var j_catbread_sr_text = document.createElement('span');
j_catbread_sr_text.setAttribute('class', 'j_catbread__sr_text');

var j_catbread__right = document.createElement('span');
j_catbread__right.setAttribute('class', 'j_catbread__right_ear');

var j_catbread__left = document.createElement('span');
j_catbread__left.setAttribute('class', 'j_catbread__left_ear');

var j_catbread__eyes = document.createElement('span');
j_catbread__eyes.setAttribute('class', 'j_catbread__eyes');

var j_catbread__mouth = document.createElement('span');
j_catbread__mouth.setAttribute('class', 'j_catbread__mouth');



// ================= appendChild ================================


j_catbread.appendChild(j_catbread_sr_text);
j_catbread.appendChild(j_catbread__right);
j_catbread.appendChild(j_catbread__left);
j_catbread.appendChild(j_catbread__eyes);
j_catbread.appendChild(j_catbread__mouth);

catbread_body.appendChild(animated);
catbread_body.appendChild(catbread);
catbread_body.appendChild(j_catbread);


catbread_body.appendChild(particletext);

textcontainer.appendChild(cat_song);
textcontainer.appendChild(catbread_body);

this.space.appendChild(textcontainer);


// ================= E      N       D =============================



        // ======================== 음악 재생 ========================

        // $( document ).ready(function() {
        //     var song = document.getElementsByTagName('audio')[0];
        //     song.load();
        // });

        // $(function () {
        //     var song = document.getElementsByTagName('audio')[0],
        //         sourceMp3 = document.getElementsByTagName('audio')[0];

        //     sourceMp3.src = './music/cat_music1.mp3';

        //     $('#j_catbread').click(function (e) {
        //         e.preventDefault();
        //         if (song.paused) song.play();
        //         else song.pause();
        //     });
            

        //     $('#j_catbread').bind('click', function() {
        //         if ($('#j_catbread').attr('class') == 'cat_song')
        //             $('#j_catbread').attr('class', 'cat_song');
        //         else
        //             $('#j_catbread').attr('class', 'cat_song');
        //     });

        //     song.addEventListener('ended', function () {
        //         song.pause();
        //         song.currentTime = 0;
        //         $('#j_catbread').attr('class', 'cat_song');
        //     });
        // });
        

        const sound = document.querySelector("#cat_song"),
        toggle = document.querySelector(".j-catbread"),
        animateText = document.getElementById("animated-text"),
        textArray = animateText.innerText.split("");

        let state = true;
        PC.style.visibility = 'hidden';
        animateText.style.visibility ="hidden";


        // 재생 스탑

        sound.load();


      
        document.querySelector(".j_catbread").addEventListener("click", function(play_stop) {
        if (state === false) {
            animateText.style.visibility ="hidden";
            PC.style.visibility="hidden";
            sound.pause()
            state = true;

        }
         else {
            animateText.style.visibility ="visible";
            PC.style.visibility ="visible";
            sound.volume = 0.05;
            sound.play();
            state = false;
            sound.currentTime = 150;
            
          }
       });


   


        // ======================  음표  ===========================

        animateText.firstChild.remove();
        
        
        var elArray = textArray.map(
        (letter,index)=>{
            if(letter==" ") letter = '&nbsp;';
            var el = document.createElement("span");
            el.className = "letter";
            el.innerHTML = letter;
            el.style.animationDelay = index/(textArray.length)+"s";
            animateText.appendChild(el);
            return el;
        });
            animateText.innerHtml = elArray;
   


        // ======================  꽃가루  ===========================

                                
        function initparticles() { confetti(); }

        function confetti() {
        $.each($(".particletext.confetti"), function(){
            var confetticount = ($(this).width()/50)*3;
            for(var i = 0; i <= confetticount; i++) {
                $(this).append('<span class="particle c' + $.rnd(1,2) + '" style="top:' + $.rnd(5,50,5) + '%; left:' + $.rnd(0,30) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(10,6) + 'px;animation-delay: ' + ($.rnd(1,10)/3) + 's;"></span>');
            }
            });
        }

            jQuery.rnd = function (m, n) {
                 m = parseInt(m);
                 n = parseInt(n);
                return Math.floor(Math.random() * (n - m + 1)) + m;
            }
            initparticles();

}