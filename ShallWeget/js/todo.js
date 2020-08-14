var todoController = function (space) {
    this.space = space;
    this.init();
};


// 동적 추가
todoController.prototype.init = function () {
    this.initElement();
};

todoController.prototype.initElement = function () {
    var $this = this;
    // $this.space.innerHTML = '';
    
    var wapper = document.createElement('div');
    wapper.setAttribute('id', 'wapper');

    var layout_All = document.createElement('div');
    layout_All.setAttribute('id', 'layout_All');

    var textcontainer = document.createElement('div');
    textcontainer.setAttribute('class', 'textcontainer');

    var particletext = document.createElement('h2');
    particletext.innerHTML+="TO-DO LIST";
    particletext.setAttribute('class', 'particletext hearts shake-slow');
    particletext.setAttribute('id', 'header');

    var text_add = document.createElement('div');
    text_add.setAttribute('id', 'text_add');

    var input_text = document.createElement('input');
    input_text.setAttribute('id','input_text');
    input_text.setAttribute('type', 'text');
    input_text.placeholder =" Add todos HEAR!";
    input_text.onfocus = function(){
        input_text.placeholder ="";
    };
    input_text.onblur = function(){
        input_text.placeholder =" Add todos HEAR!";
    };


    var Add_btn = document.createElement('button');
    Add_btn.setAttribute('id', 'Add_btn');
    Add_btn.innerHTML += "+ Add";

    Add_btn.onclick = newElement;

    var scroll = document.createElement('div');
    scroll.setAttribute('id', 'scroll');
    
    var myUL = document.createElement('ul');
    myUL.setAttribute('id', 'myUL');
    
    var li_1 = document.createElement('li');
    var li_2 = document.createElement('li');
    var li_3 = document.createElement('li');
    li_1.innerHTML = 'study JAVA';
    li_2.innerHTML = 'Loveing cat';
    li_3.innerHTML = 'read a book';




    //appendChild로 넣어주기 (부모.appendChild(자식)) 자식객체를 부모의 마지막 자식으로 삽입
    myUL.appendChild(li_1);
    myUL.appendChild(li_2);
    myUL.appendChild(li_3);

    scroll.appendChild(myUL);

    text_add.appendChild(input_text);
    text_add.appendChild(Add_btn);

    textcontainer.appendChild(particletext);
    
    layout_All.appendChild(textcontainer);
    layout_All.appendChild(text_add);
    
    layout_All.appendChild(scroll);
    
    $this.space.appendChild(layout_All);

            // TO DO LIST 글자 효과
function initparticles() {
    hearts();
}


function hearts() {
    $.each($(".particletext.hearts"), function () {
        var heartcount = ($(this).width() / 50) * 2;
        for (var i = 0; i <= heartcount; i++) {
            var size = ($.rnd(60, 120) / 10);
            $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(8, 93) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
        }
    });
}


jQuery.rnd = function (m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
}

initparticles();

// TO DO LIST 글자 효과 끝




var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");  // U00d7 : 사용할 문자 유니코드의 뒤에서 네 자리 문자열을 복사
    span.className = "todoclose";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// 닫기 버튼
var close = document.getElementsByClassName("todoclose");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// 체크된 항목
// 체크된 내용은 하단으로 이동하기
// flase(off) 우선 출력하고, true(on)은 나중에 출력되도록
// 할때... 애니메이션 효과를 넣어서 부드럽게 움직였으면 좋겠는데
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    // 클릭시 체크온 / 오프 반복 가능하게 toggle사용
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);





// createElement로 새 항목 만들기
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input_text").value;
    var t = document.createTextNode(inputValue);

    // t의 마지막에 요소 삽입
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    // 입력 후 공간을 다시 비워줌
    document.getElementById("input_text").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "todoclose";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}



};