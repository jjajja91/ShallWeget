var Crazyplantlady = function (space, level, waterCount, width) {
    this.space = space;
    this.level = level;
    this.waterCount = waterCount;
    this.width = width;
    this.init();
};

// init 함수 동적 추가
Crazyplantlady.prototype.init = function () {
    // 로고추가
    this.initMain();
};

// init 함수 동적 추가
Crazyplantlady.prototype.initMain = function () {
    // 첫화면 메뉴
    var $this = this;

    // 내일 물방울 위치랑 시간남으면 
    // 로고랑 
    // 배경화면에 해바라기 꽃돌아가게
    // 크기 조절이 잘 된건지 안맞는건지 모르겠음 ㅜㅜ
    var mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');
    var titleCont = document.createElement('div');
    titleCont.setAttribute('id', 'title-container');
    var titleDiv = document.createElement('div');
    titleDiv.innerHTML = "Choose Your Pet Plant";
    var barDiv1 = document.createElement('div');
    barDiv1.setAttribute('id', 'barDiv1');
    var barDiv2 = document.createElement('div');
    barDiv2.setAttribute('id', 'barDiv2');
    var optionCont = document.createElement('div');
    optionCont.setAttribute('class', 'optionCont');
    optionCont.setAttribute('id', 'optionCont');
    var pot1Img = document.createElement('img');
    pot1Img.setAttribute('id', 'pot1Img');
    pot1Img.setAttribute('class', 'pots');
    pot1Img.setAttribute('src', './css/pot1.png');
    var pot2Img = document.createElement('img');
    pot2Img.setAttribute('id', 'pot2Img');
    pot1Img.setAttribute('class', 'pots');
    pot2Img.setAttribute('src', './css/pot2.png');
    var pot3Img = document.createElement('img');
    pot3Img.setAttribute('id', 'pot3Img');
    pot1Img.setAttribute('class', 'pots');
    pot3Img.setAttribute('src', './css/pot3.png');

    // bee cursor tail
    var cursorDiv = document.createElement('div');
    cursorDiv.setAttribute('id', 'cursor');
    var cursortail1 = document.createElement('div');
    cursortail1.setAttribute('id', 'cursor-tail1');
    var cursortail2 = document.createElement('div');
    cursortail2.setAttribute('id', 'cursor-tail2');
    var cursortail3 = document.createElement('div');
    cursortail3.setAttribute('id', 'cursor-tail3');

    var hrTag = document.createElement('hr');

    titleCont.appendChild(titleDiv);

    mainDiv.appendChild(titleCont);
    mainDiv.appendChild(barDiv1);
    mainDiv.appendChild(barDiv2);


    optionCont.appendChild(pot1Img);
    optionCont.appendChild(pot2Img);
    optionCont.appendChild(pot3Img);

    // optionCont.appendChild(cursorDiv);
    optionCont.appendChild(cursortail1);
    optionCont.appendChild(cursortail2);
    optionCont.appendChild(cursortail3);

    mainDiv.appendChild(optionCont);
    mainDiv.appendChild(hrTag);

    this.space.appendChild(mainDiv);

    var potArr = document.getElementsByClassName('pots');
    for (var i = 0; i < potArr.length; i++) {
        (function () {
            potArr[i].onclick = function () {
                $this.initStart(this);
            }
        })();
    }

    // 커서꼬리 위치계산
    const cursor = document.getElementById("optionCont");
    const cursorTail1con = document.getElementById("cursor-tail1");
    const cursorTail2con = document.getElementById("cursor-tail2");
    const cursorTail3con = document.getElementById("cursor-tail3");
    let mouseX = 0;
    let mouseY = 0;
    let tailX = 0;
    let tailY = 0;
    let tailX2 = 5;
    let tailY2 = 5;
    let tailX3 = 10;
    let tailY3 = 10;

    function handleAnimateTail() {
        const speed = 0.15;
        const distX = mouseX - tailX;
        const distY = mouseY - tailY;
        const distX2 = tailX - tailX2;
        const distY2 = tailY - tailY2;
        const distX3 = tailX2 - tailX3;
        const distY3 = tailY2 - tailY3;

        tailX += distX * speed;
        tailY += distY * speed;
        tailX2 += distX2 * speed;
        tailY2 += distY2 * speed;
        tailX3 += distX3 * speed;
        tailY3 += distY3 * speed;

        cursorTail1con.style.left = tailX + "px";
        cursorTail1con.style.top = tailY + "px";
        cursorTail2con.style.left = tailX2 + "px";
        cursorTail2con.style.top = tailY2 + "px";
        cursorTail3con.style.left = tailX3 + "px";
        cursorTail3con.style.top = tailY3 + "px";

        requestAnimationFrame(handleAnimateTail);
    }

    handleAnimateTail();

    optionCont.addEventListener("mousemove", event => {
        // cursor.style.display = "inline";
        cursorTail1con.style.display = "inline";
        cursorTail2con.style.display = "inline";
        cursorTail3con.style.display = "inline";
        x = event.pageX;
        y = event.pageY;

        // if (
        //     x <= cursor.offsetWidth &&
        // x <= document.documentElement.offsetWidth &&
        //     y <= document.documentElement.offsetHeight
        // ) {
        cursor.style.top = y + "px";
        cursor.style.left = x + "px";
        mouseX = x + 20 - ($('#mainDiv').offset().left);
        mouseY = y + 10 - ($('#mainDiv').offset().top);
        // }
    });

    optionCont.addEventListener("mouseleave", () => {
        // cursor.style.display = "none";
        cursorTail1con.style.display = "none";
        cursorTail2con.style.display = "none";
        cursorTail3con.style.display = "none";
    });

    optionCont.addEventListener("mouseenter", () => {
        // cursor.style.display = "inline";
        cursorTail1con.style.display = "inline";
        cursorTail2con.style.display = "inline";
        cursorTail3con.style.display = "inline";
    });
};

// initElement 함수 동적 추가
Crazyplantlady.prototype.initStart = function (info) {
    var that = info;
    var $this = this;

    $this.space.innerHTML = "";

    // 첫화면 메뉴테이블 생성
    var table = document.createElement('table');
    table.setAttribute('class', 'table1');
    var tableTr1 = document.createElement('tr');
    tableTr1.setAttribute('id', 'tableTr1');
    var firstDiv = document.createElement('div');
    firstDiv.setAttribute('class', 'topbar');
    var tableTd1 = document.createElement('td');
    // 메뉴
    var menuDiv = document.createElement('div');
    menuDiv.setAttribute('class', 'dropdown');
    // 홈
    var homeImg = document.createElement('img');
    homeImg.setAttribute('class', 'menu');
    homeImg.setAttribute('src', './css/home2.png');
    var dropdownDiv = document.createElement('div');
    dropdownDiv.setAttribute('class', 'dropdown-content');
    //물
    var dropdownA1 = document.createElement('a');
    dropdownA1.setAttribute('id', 'water');
    var waterImg = document.createElement('img');
    waterImg.setAttribute('class', 'menu');
    waterImg.setAttribute('src', './css/watercursor.gif');
    waterImg.onclick = watering;
    //해
    var dropdownA2 = document.createElement('a');
    dropdownA2.setAttribute('id', 'sun');
    var sunImg = document.createElement('img');
    sunImg.setAttribute('class', 'menu');
    sunImg.setAttribute('src', './css/sunicon.png');
    // 물 게이지
    var tableTd2 = document.createElement('td');
    tableTd2.setAttribute('id', 'tableTd2');
    var barproDiv = document.createElement('div');
    barproDiv.setAttribute('id', 'myProgress');
    var mybarDiv = document.createElement('div');
    mybarDiv.setAttribute('id', 'myBar');
    var tableTd3 = document.createElement('td');
    // 레벨
    var level = document.createElement('div');
    level.setAttribute('id', 'level');
    level.innerHTML = 'Lv. ' + $this.level;
    // 취소
    // var cancelImg = document.createElement('img');
    // cancelImg.setAttribute('id', 'cancel');
    // cancelImg.setAttribute('src', './css/cancel.png');
    // cancelImg.onclick = cancel;

    var tableTr2 = document.createElement('tr');
    tableTr2.setAttribute('id', 'tableTr2');
    var tableTd22 = document.createElement('td');
    var potDiv = document.createElement('div');
    potDiv.setAttribute('class', 'plant');
    potDiv.setAttribute('id', 'plant');

    // sun
    var sun = document.createElement('div');
    sun.setAttribute('class', 'sunny');
    var circle = document.createElement('div');
    circle.setAttribute('class', 'circle');
    var eyes = document.createElement('div');
    eyes.setAttribute('class', 'eyes');
    var left = document.createElement('span');
    left.setAttribute('class', 'left');
    var right = document.createElement('span');
    right.setAttribute('class', 'right');

    var sunrays = document.createElement('div');
    sunrays.setAttribute('class', 'sunrays');
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');


    // 화분
    var potImg = document.createElement('img');
    potImg.setAttribute('class', 'pot');
    potImg.setAttribute('id', 'pot');
    potImg.setAttribute('src', that.getAttribute('src'));
    potImg.setAttribute('alt', 'growing animation');
    // var confetti = document.createElement('div');
    // confetti.setAttribute('class', 'confetti');
    // confetti.setAttribute('id', 'confetti');
    // var elm = document.createElement('div');
    // elm.setAttribute('class', 'particle');
    // elm.setAttribute('id', 'particle');

    dropdownA1.appendChild(waterImg);
    // dropdownA2.appendChild(sunImg);
    dropdownDiv.appendChild(dropdownA1);
    dropdownDiv.appendChild(dropdownA2);
    menuDiv.appendChild(homeImg);
    menuDiv.appendChild(dropdownDiv);
    tableTd1.appendChild(menuDiv);

    barproDiv.appendChild(mybarDiv);
    tableTd2.appendChild(level);

    tableTd3.appendChild(barproDiv);

    firstDiv.appendChild(tableTd1);
    firstDiv.appendChild(tableTd2);
    firstDiv.appendChild(tableTd3);

    tableTr1.appendChild(firstDiv);

    eyes.appendChild(left);
    eyes.appendChild(right);

    sunrays.appendChild(span1);
    sunrays.appendChild(span2);
    sunrays.appendChild(span3);

    sun.appendChild(circle);
    sun.appendChild(eyes);
    sun.appendChild(sunrays);

    potDiv.appendChild(potImg);
    // confetti.appendChild(elm);
    // potDiv.appendChild(confetti);
    tableTd22.appendChild(sun);
    tableTd22.appendChild(potDiv);
    tableTr2.appendChild(tableTd22);

    table.appendChild(tableTr1);
    table.appendChild(tableTr2);

    this.space.appendChild(table);

    var d = setInterval(dying, 1000);

    // function cancel() {
    //     var pot = document.getElementById("pot");
    //     pot.onmousemove = null;
    //     plant.style.cursor = "auto";
    // }

    // 레벨업
    function growing() {

        var pot = document.getElementById("pot");
        if ($this.level < 5) {
            $this.level++;
            level.innerHTML = 'Lv. ' + $this.level;
            pot.setAttribute("src", "./css/level" + $this.level + ".png");
            
        } else {
            $this.width = 0;

            $('.pot').remove(e);
        }


    }

    // 물 게이지 늘어남
    function watering() {

        var plant = document.getElementById("plant");
        plant.onmouseover = function () {

            plant.style.cursor = "url('./css/watercursor.png') -60 40, auto";
            // click event listener
            $('.pot').on('click', function (e) {

                var pot = document.getElementById("pot");
                var elem = document.getElementById("myBar");
                if ($this.width >= 100) {
                    plant.onmouseover = null;
                    // 물이 100으로 차면 레벨1업
                    $this.waterCount++;
                    plant.style.cursor = "auto";
                    if ($this.waterCount % 2 != 0) {
                        setInterval(growing(), 1000);
                    }
                    $(".pot").off("click");
                } else {
                    explodeCon(e.pageX, e.pageY);
                    $this.width = $this.width + 5;
                    elem.style.width = $this.width + "%";
                }


            })

            // explosion construction
            function explodeCon(x, y) {
                var particles = 15,
                    // explosion container and its reference to be able to delete it on animation end
                    confetti = $('<div class="confetti"></div>');

                // put the explosion container into the body to be able to get it's size
                $('.plant').append(confetti);

                // position the container to be centered on click
                // confetti.css('left', x - confetti.width() / 2);
                // confetti.css('top', y - confetti.height() / 2)
                confetti.css('left', myX - confetti.width() / 2);
                confetti.css('top', myY - confetti.height() / 2);

                for (var i = 0; i < particles; i++) {
                    // positioning x,y of the particle on the circle (little randomized radius)
                    var x = confetti.width() + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
                        y = confetti.height() + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10));
                    var color = rand(0, 204) + ', ' + rand(102, 229) + ', ' + rand(204, 255); // randomize the color rgb
                    // particle element creation (could be anything other than div)

                    var myX = x - $('#plantBtnDiv').offset().left;
                    var myY = y - $('#plantBtnDiv').offset().top;
                    elm = $('<div class="particle" style="' +
                        'background-color: rgb(' + color + ') ;' +
                        'top: ' + y + 'px; ' +
                        'left: ' + x + 'px"></div>');

                    if (i == 0) { // no need to add the listener on all generated elements
                        // css3 animation end detection
                        elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
                            confetti.remove(); // remove this explosion container when animation ended
                        });
                    }

                    confetti.append(elm);
                }
            }

            // get random number between min and max value
            function rand(min, max) {
                return Math.floor(Math.random() * (max + 1)) + min;
            }

        }


    }

    // 시간이 갈수록 물게이지바의 물이 줄어듬
    function dying() {
        var elem = document.getElementById("myBar");
        if ($this.width == 0) return;
        var id = setInterval(dframe, 100);

        function dframe() {
            if ($this.width <= 1) {
                clearInterval(id);
                return;
            } else {
                $this.width = $this.width - 0.05;
                elem.style.width = $this.width + "%";
            }
            // console.log($this.width);
        }
    }

}