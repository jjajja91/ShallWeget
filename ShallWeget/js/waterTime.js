var WaterTime = (function () {
var WaterTime = function (space) {
    this.space = space;
    // 1초 후 water init() 함수호출
    this.init();
};
//init 함수 동적 추가
WaterTime.prototype.init = function () {
    //로고 추가
    this.initElement();
};

//initElemnt 함수 동적 추가
WaterTime.prototype.initElement = function () {
    var $this = this;
    //처음화면 div 생성
    var leviWaterDrink = document.createElement('div');
    leviWaterDrink.setAttribute('class', 'leviWaterDrink');
    //첫번째 페이지
    var leviMySlides_leviFade1 = document.createElement('div');
    leviMySlides_leviFade1.setAttribute('class', 'leviMySlides leviFade');
    leviMySlides_leviFade1.setAttribute('id', 'leviMain_page');
    var leviMain_name = document.createElement('h1');
    leviMain_name.setAttribute('class', 'leviMain_name');
    leviMain_name.innerHTML = '&nbsp;꼴깍';
    var leviTooltip1 = document.createElement('div');
    leviTooltip1.setAttribute('class', 'leviTooltip');
    var leviTooltiptext1 = document.createElement('span');
    leviTooltiptext1.setAttribute('class', 'leviTooltiptext');
    leviTooltiptext1.setAttribute('id', 'leviMain_leviTooltiptext');
    leviTooltiptext1.innerHTML = '꼴깍?<br>물 마시세오';
    var logoImage = document.createElement('img');
    logoImage.setAttribute('src', 'pjimg/logo.png');
    logoImage.setAttribute('class', 'leviMainWaterImg');
    logoImage.setAttribute('alt', '꼴깍로고');
    var Mainquantity = document.createElement('div');
    Mainquantity.setAttribute('class', 'Mainquantity');
    Mainquantity.innerHTML = '꼴깍이';
    var leviMyProgress1 = document.createElement('div');
    leviMyProgress1.setAttribute('id', 'leviMyProgress');
    var leviMyBar1 = document.createElement('div');
    leviMyBar1.setAttribute('id', 'leviMyBar1');

    //두번째 페이지
    var leviMySlides_leviFade2 = document.createElement('div');
    leviMySlides_leviFade2.setAttribute('class', 'leviMySlides leviFade');
    leviMySlides_leviFade2.setAttribute('id', 'second_page');
    var levi_name2 = document.createElement('h1');
    levi_name2.setAttribute('class', 'levi_name');
    levi_name2.innerHTML = 'WATER';
    var leviTooltip2 = document.createElement('button');
    leviTooltip2.setAttribute('class', 'leviTooltip');
    leviTooltip2.addEventListener('click', function (e) {
        move2(), play();
    });
    var leviTooltiptext2 = document.createElement('span');
    leviTooltiptext2.setAttribute('class', 'leviTooltiptext');
    leviTooltiptext2.setAttribute('id', 'leviSecond_leviTooltiptext');
    leviTooltiptext2.innerHTML = '권장 섭취량 : 2500ml<br>현재 섭취량 :400ml';
    var water2 = document.createElement('img');
    water2.setAttribute('src', 'pjimg/water2.png');
    water2.setAttribute('class', 'leviWaterImg');
    water2.setAttribute('alt', 'water2');
    var quantity2 = document.createElement('div');
    quantity2.setAttribute('class', 'quantity');
    quantity2.innerHTML = '+100ml';

    var leviTooltip22 = document.createElement('button');
    leviTooltip22.setAttribute('class', 'leviTooltip');
    leviTooltip22.addEventListener('click', function (e) {
        move2(), play();
    });
    var leviTooltiptext22 = document.createElement('span');
    leviTooltiptext22.setAttribute('class', 'leviTooltiptext');
    leviTooltiptext22.setAttribute('id', 'leviThird_leviTooltiptext');
    leviTooltiptext22.innerHTML = '권장 섭취량 : 2500ml<br>현재 섭취량 :400ml';
    var water3 = document.createElement('img');
    water3.setAttribute('src', 'pjimg/water3.png');
    water3.setAttribute('class', 'leviWaterImg');
    water3.setAttribute('alt', 'water3');
    var quantity22 = document.createElement('div');
    quantity22.setAttribute('class', 'quantity');
    quantity22.innerHTML = '+300ml';

    var leviTooltip222 = document.createElement('button');
    leviTooltip222.setAttribute('class', 'leviTooltip');
    leviTooltip222.addEventListener('click', function (e) {
        move2(), play();
    });
    var leviTooltiptext222 = document.createElement('span');
    leviTooltiptext222.setAttribute('class', 'leviTooltiptext');
    leviTooltiptext222.setAttribute('id', 'leviFourth_leviTooltiptext');
    leviTooltiptext222.innerHTML = '권장 섭취량 : 2500ml<br>현재 섭취량 :400ml';
    var water4 = document.createElement('img');
    water4.setAttribute('src', 'pjimg/water4.png');
    water4.setAttribute('class', 'leviWaterImg');
    water4.setAttribute('alt', 'water4');
    var quantity222 = document.createElement('div');
    quantity222.setAttribute('class', 'quantity');
    quantity222.innerHTML = '+700ml';

    var leviMyProgress2 = document.createElement('div');
    leviMyProgress2.setAttribute('id', 'leviMyProgress');
    var leviMyBar2 = document.createElement('div');
    leviMyBar2.setAttribute('id', 'leviMyBar2');

    //세번째 페이지
    var leviMySlides_leviFade3 = document.createElement('div');
    leviMySlides_leviFade3.setAttribute('class', 'leviMySlides leviFade');
    leviMySlides_leviFade3.setAttribute('id', 'third_page');
    var levi_name3 = document.createElement('h1');
    levi_name3.setAttribute('class', 'levi_name');
    levi_name3.innerHTML = 'COFFEE';
    var leviTooltip3 = document.createElement('button');
    leviTooltip3.setAttribute('class', 'leviTooltip');
    leviTooltip3.addEventListener('click', function (e) {
        move3(), play();
    });
    var leviTooltiptext3 = document.createElement('span');
    leviTooltiptext3.setAttribute('class', 'leviTooltiptext');
    leviTooltiptext3.setAttribute('id', 'leviSecond_leviTooltiptext');
    leviTooltiptext3.innerHTML = '권장 섭취량 : 2500ml<br>현재 섭취량 :400ml';
    var coffee2 = document.createElement('img');
    coffee2.setAttribute('src', 'pjimg/coffee2.png');
    coffee2.setAttribute('class', 'leviWaterImg');
    coffee2.setAttribute('alt', 'coffee2');
    var quantity3 = document.createElement('div');
    quantity3.setAttribute('class', 'quantity');
    quantity3.innerHTML = '+100ml';
    
    var leviTooltip33 = document.createElement('button');
    leviTooltip33.setAttribute('class', 'leviTooltip');
    leviTooltip33.addEventListener('click', function (e) {
        move3(), play();
    });
    var leviTooltiptext33 = document.createElement('span');
    leviTooltiptext33.setAttribute('class', 'leviTooltiptext');
    leviTooltiptext33.setAttribute('id', 'leviThird_leviTooltiptext');
    leviTooltiptext33.innerHTML = '권장 섭취량 : 2500ml<br>현재 섭취량 :400ml';
    var coffee3 = document.createElement('img');
    coffee3.setAttribute('src', 'pjimg/coffee3.png');
    coffee3.setAttribute('class', 'leviWaterImg');
    coffee3.setAttribute('alt', 'coffee3');
    var quantity33 = document.createElement('div');
    quantity33.setAttribute('class', 'quantity');
    quantity33.innerHTML = '+300ml';

    var leviTooltip333 = document.createElement('button');
    leviTooltip333.setAttribute('class', 'leviTooltip');
    leviTooltip333.addEventListener('click', function (e) {
        move3(), play();
    });
    var leviTooltiptext333 = document.createElement('span');
    leviTooltiptext333.setAttribute('class', 'leviTooltiptext');
    leviTooltiptext333.setAttribute('id', 'leviFourth_leviTooltiptext');
    leviTooltiptext333.innerHTML = '권장 섭취량 : 2500ml<br>현재 섭취량 :400ml';
    var coffee4 = document.createElement('img');
    coffee4.setAttribute('src', 'pjimg/coffee4.png');
    coffee4.setAttribute('class', 'leviWaterImg');
    coffee4.setAttribute('alt', 'coffee4');
    var quantity333 = document.createElement('div');
    quantity333.setAttribute('class', 'quantity');
    quantity333.innerHTML = '+700ml';
    var leviMyProgress3 = document.createElement('div');
    leviMyProgress3.setAttribute('id', 'leviMyProgress');
    var leviMyBar3 = document.createElement('div');
    leviMyBar3.setAttribute('id', 'leviMyBar3');

    //네번째 페이지
    var leviMySlides_leviFade4 = document.createElement('div');
    leviMySlides_leviFade4.setAttribute('class', 'leviMySlides leviFade');
    leviMySlides_leviFade4.setAttribute('id', 'fourth_page');
    var levi_name4 = document.createElement('h1');
    levi_name4.setAttribute('class', 'levi_name');
    levi_name4.innerHTML = 'ALCOHOL';
    var leviTooltip4 = document.createElement('button');
    leviTooltip4.setAttribute('class', 'leviTooltip');
    leviTooltip4.addEventListener('click', function (e) {
        move4(), play();
    });
    var leviTooltiptext4 = document.createElement('span');
    leviTooltiptext4.setAttribute('class', 'leviTooltiptext');
    leviTooltiptext4.setAttribute('id', 'leviSecond_leviTooltiptext');
    leviTooltiptext4.innerHTML = '권장 섭취량 : 2500ml<br>현재 섭취량 :400ml';
    var alcohol2 = document.createElement('img');
    alcohol2.setAttribute('src', 'pjimg/alcohol2.png');
    alcohol2.setAttribute('class', 'leviWaterImg');
    alcohol2.setAttribute('alt', 'alcohol2');
    var quantity4 = document.createElement('div');
    quantity4.setAttribute('class', 'quantity');
    quantity4.innerHTML = '+100ml';
    
    var leviTooltip44 = document.createElement('button');
    leviTooltip44.setAttribute('class', 'leviTooltip');
    leviTooltip44.addEventListener('click', function (e) {
        move4(), play();
    });
    var leviTooltiptext44 = document.createElement('span');
    leviTooltiptext44.setAttribute('class', 'leviTooltiptext');
    leviTooltiptext44.setAttribute('id', 'leviThird_leviTooltiptext');
    leviTooltiptext44.innerHTML = '권장 섭취량 : 2500ml<br>현재 섭취량 :400ml';
    var alcohol3 = document.createElement('img');
    alcohol3.setAttribute('src', 'pjimg/alcohol3.png');
    alcohol3.setAttribute('class', 'leviWaterImg');
    alcohol3.setAttribute('alt', 'alcohol3');
    var quantity44 = document.createElement('div');
    quantity44.setAttribute('class', 'quantity');
    quantity44.innerHTML = '+300ml';

    var leviTooltip444 = document.createElement('button');
    leviTooltip444.setAttribute('class', 'leviTooltip');
    leviTooltip444.addEventListener('click', function (e) {
        move4(), play();
    });
    var leviTooltiptext444 = document.createElement('span');
    leviTooltiptext444.setAttribute('class', 'leviTooltiptext');
    leviTooltiptext444.setAttribute('id', 'leviFourth_leviTooltiptext');
    leviTooltiptext444.innerHTML = '권장 섭취량 : 2500ml<br>현재 섭취량 :400ml';
    var alcohol4 = document.createElement('img');
    alcohol4.setAttribute('src', 'pjimg/alcohol4.png');
    alcohol4.setAttribute('class', 'leviWaterImg');
    alcohol4.setAttribute('alt', 'alcohol4');
    var quantity444 = document.createElement('div');
    quantity444.setAttribute('class', 'quantity');
    quantity444.innerHTML = '+700ml';
    var leviMyProgress4 = document.createElement('div');
    leviMyProgress4.setAttribute('id', 'leviMyProgress');
    var leviMyBar4 = document.createElement('div');
    leviMyBar4.setAttribute('id', 'leviMyBar4');

    //화면 하단에 동그란 점 모양(페이지 넘기는 버튼임)
    var leviDotdot = document.createElement('div');
    leviDotdot.setAttribute('id', 'leviDotdot');
    //첫번째 페이지 버튼
    var leviDot1 = document.createElement('span');
    leviDot1.setAttribute('class', 'leviDot');
    leviDot1.addEventListener('click', function (e) {
        currentSlide(1);
    });
    //두번째 페이지 버튼
    var leviDot2 = document.createElement('span');
    leviDot2.setAttribute('class', 'leviDot');
    leviDot2.addEventListener('click', function (e) {
        currentSlide(2);
    });
    //세번째 페이지 버튼
    var leviDot3 = document.createElement('span');
    leviDot3.setAttribute('class', 'leviDot');
    leviDot3.addEventListener('click', function (e) {
        currentSlide(3);
    });
    //네번째 페이지 버튼      
    var leviDot4 = document.createElement('span');
    leviDot4.setAttribute('class', 'leviDot');
    leviDot4.addEventListener('click', function (e) {
        currentSlide(4);
    });
    //효과음
    var leviAudio = document.createElement('audio');
    leviAudio.setAttribute('id', 'leviAudio');
    leviAudio.setAttribute('src', 'pjimg/sound.mp3');

    //어펜드 차일드 목록
    //5번 테두리
    //4번 테두리
    leviTooltip1.appendChild(leviTooltiptext1);
    leviTooltip1.appendChild(logoImage);
    leviTooltip1.appendChild(Mainquantity);
    leviMyProgress1.appendChild(leviMyBar1);
    leviTooltip2.appendChild(leviTooltiptext2);
    leviTooltip2.appendChild(water2);
    leviTooltip2.appendChild(quantity2);
    leviTooltip22.appendChild(leviTooltiptext22);
    leviTooltip22.appendChild(water3);
    leviTooltip22.appendChild(quantity22);
    leviTooltip222.appendChild(leviTooltiptext222);
    leviTooltip222.appendChild(water4);
    leviTooltip222.appendChild(quantity222);
    leviMyProgress2.appendChild(leviMyBar2);
    leviTooltip3.appendChild(leviTooltiptext3);
    leviTooltip3.appendChild(coffee2);
    leviTooltip3.appendChild(quantity3);
    leviTooltip33.appendChild(leviTooltiptext33);
    leviTooltip33.appendChild(coffee3);
    leviTooltip33.appendChild(quantity33);
    leviTooltip333.appendChild(leviTooltiptext333);
    leviTooltip333.appendChild(coffee4);
    leviTooltip333.appendChild(quantity333);
    leviMyProgress3.appendChild(leviMyBar3);
    leviTooltip4.appendChild(leviTooltiptext4);
    leviTooltip4.appendChild(alcohol2);
    leviTooltip4.appendChild(quantity4);
    leviTooltip44.appendChild(leviTooltiptext44);
    leviTooltip44.appendChild(alcohol3);
    leviTooltip44.appendChild(quantity44);
    leviTooltip444.appendChild(leviTooltiptext444);
    leviTooltip444.appendChild(alcohol4);
    leviTooltip444.appendChild(quantity444);
    leviMyProgress4.appendChild(leviMyBar4);
    //3번 테두리
    leviMySlides_leviFade1.appendChild(leviMain_name);
    leviMySlides_leviFade1.appendChild(leviTooltip1);
    leviMySlides_leviFade1.appendChild(leviMyProgress1);
    leviMySlides_leviFade2.appendChild(levi_name2);
    leviMySlides_leviFade2.appendChild(leviTooltip2);
    leviMySlides_leviFade2.appendChild(leviTooltip22);
    leviMySlides_leviFade2.appendChild(leviTooltip222);
    leviMySlides_leviFade2.appendChild(leviMyProgress2);
    leviMySlides_leviFade3.appendChild(levi_name3);
    leviMySlides_leviFade3.appendChild(leviTooltip3);
    leviMySlides_leviFade3.appendChild(leviTooltip33);
    leviMySlides_leviFade3.appendChild(leviTooltip333);
    leviMySlides_leviFade3.appendChild(leviMyProgress3);
    leviMySlides_leviFade4.appendChild(levi_name4);
    leviMySlides_leviFade4.appendChild(leviTooltip4);
    leviMySlides_leviFade4.appendChild(leviTooltip44);
    leviMySlides_leviFade4.appendChild(leviTooltip444);
    leviMySlides_leviFade4.appendChild(leviMyProgress4);
    leviDotdot.appendChild(leviDot1);
    leviDotdot.appendChild(leviDot2);
    leviDotdot.appendChild(leviDot3);
    leviDotdot.appendChild(leviDot4);
    //2번 테두리
    leviWaterDrink.appendChild(leviMySlides_leviFade1);
    leviWaterDrink.appendChild(leviMySlides_leviFade2);
    leviWaterDrink.appendChild(leviMySlides_leviFade3);
    leviWaterDrink.appendChild(leviMySlides_leviFade4);
    leviWaterDrink.appendChild(leviDotdot);
    leviWaterDrink.appendChild(leviAudio);
    //1번 테두리
    this.space.appendChild(leviWaterDrink);


//function 모음
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("leviMySlides");
    var leviDots = document.getElementsByClassName("leviDot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < leviDots.length; i++) {
        leviDots[i].className = leviDots[i].className.replace(" leviActive",
            ""); //leviActive 앞에 띄어쓰기 지우면 안됨)
    }
    slides[slideIndex - 1].style.display = "block";
    leviDots[slideIndex - 1].className += " leviActive"; //leviActive 앞에 띄어쓰기 지우면 안됨)
}

//클릭 시 그래프 증가
var width = 0;
var id = null;

function move2() {
    
    if (width == 100) {
        return;
    }
    var elem = document.getElementById("leviMyBar2");
    if (id) {
        clearInterval(id);
    }
    id = setInterval(frame, 10);

    function frame() {
        width++;
        elem.style.width = width + '%';
        // elem.innerHTML = width * 1 + '%';
        if (width % 10 == 0) {
            clearInterval(id);
        }
    }
}

function move3() {
    if (width == 100) {
        return;
    }
    var elem = document.getElementById("leviMyBar3");
    if (id) {
        clearInterval(id);
    }
    id = setInterval(frame, 10);

    function frame() {
        width++;
        elem.style.width = width + '%';
        // elem.innerHTML = width * 1 + '%';
        if (width % 10 == 0) {
            clearInterval(id);
        }
    }
}

function move4() {
    if (width == 100) {
        return;
    }
    var elem = document.getElementById("leviMyBar4");
    if (id) {
        clearInterval(id);
    }
    id = setInterval(frame, 10);

    function frame() {
        width++;
        elem.style.width = width + '%';
        // elem.innerHTML = width * 1 + '%';
        if (width % 10 == 0) {
            clearInterval(id);
        }
    }
}


//이미지 클릭 시 효과음 재생
function play() {
    var leviAudio = document.getElementById("leviAudio");
    leviAudio.play();
}


}

return WaterTime;
})();