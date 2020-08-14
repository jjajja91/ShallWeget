// 메뉴 나오게 해줄 메뉴 버튼
var menuBtn = document.querySelector('#menuBtn');

// 세팅 버튼
var settingBtn = document.querySelector('#widgetSettingBtn');
var settingInfo = document.querySelector('#settingInfo');

// 메뉴를 감싸고 있는 div
var menuDiv = document.querySelector('.menu-div');

// 검색바
var searchBar = document.getElementById('searchBar');

// 검색 버튼(안보여주고 엔터로 처리할 생각)
var searchBtn = document.querySelector('#searchBtn');

// 지금은 하나지만 각각 위젯 버튼 따로 잡아놓기
var weatherBtn = document.querySelector('#weatherBtn');

// 예상 위젯 위치 알려주는 친구
var expected = document.querySelector('.expected');

// drop이 가능한 지역
var dropzone = document.querySelector('.dropzone');

// btns (위젯 버튼들 한번에 잡아옴)
var btns = document.querySelectorAll('.btns');

// drag 잡아왔을 때 잡은 버튼을 임시 저장
var dragged;

// 위젯 블럭 한칸의 범위(4*2 이런식으로 사용할 때 사용할 칸)
var oneBlockSize = Math.round(innerWidth) / 12;

// 위젯 위치를 저장할 2차원 배열
var widgetPan = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];



// 메뉴 버튼을 누르면
menuBtn.addEventListener('click', function (e) {
    // 클릭된 상태가 아니면
    if (menuBtn.getAttribute('class') !== 'clicked') {
        // 메뉴 div에 아이디를 달아줘서 메뉴 높이를 바꿔준다
        menuDiv.setAttribute('id', 'menu-div');
        // 클릭된 상태로 바꿔준다(클래스)
        menuBtn.setAttribute('class', 'clicked');
        // 버튼의 diplay 상태를 true로 바꿔준다
        displayEffect(btns, true);
        settingBtn.style.display = 'block';
        // 클릭된 상태면
    } else {
        // 메뉴 div에 아이디를 지워줘서 메뉴 높이를 없애준다
        menuDiv.removeAttribute('id', 'menu-div');
        // 클릭된 상태를 없애준다(클래스 삭제)
        menuBtn.removeAttribute('class', 'clicked');
        // 버튼의 display 상태를 false로 바꿔준다
        displayEffect(btns, false);
        settingBtn.style.display = 'none';
    }
});

// 세팅 버튼을 누르면
settingBtn.addEventListener('click', function(e) {
    if(this.getAttribute('class') !== 'settingWidget'){
    settingInfo.style.display = 'block';
    this.setAttribute('class', 'settingWidget');
    var settingTarget = document.querySelectorAll('.setted');
    for(var i = 0; i<settingTarget.length; i++){
        var oneTarget = settingTarget[i];
        oneTarget.style.opacity = '0.5';
        var resetBtn = document.createElement('button');
        resetBtn.innerHTML = 'X';
        resetBtn.setAttribute('class', 'resetBtn');
        resetBtn.addEventListener('click', function(e){
            dropzone.removeChild(this.parentElement);
            switch(this.parentElement.getAttribute('id')){
                case 'neflixBtnDiv':
                    removePan(8);
                    break;
                case 'plantBtnDiv':
                    removePan(2);
                    break;
                case 'waterBtnDiv':
                    removePan(6);
                    break;
                case 'foodBtnDiv':
                    removePan(7);
                    break;
                case 'todoBtnDiv':
                    removePan(4);
                    break;
                case 'cafeinBtnDiv':
                    removePan(1);
                    break;
                case 'weatherBtnDiv':
                    removePan(5);
                    break;
                case 'catBtnDiv':
                    removePan(3);
                    break;
            }
        });
        oneTarget.appendChild(resetBtn);
    }
} else {
    this.removeAttribute('class', 'settingWidget');
    settingInfo.style.display = 'none';
    var settingTarget = document.querySelectorAll('.setted');
    for(var i = 0; i<settingTarget.length; i++){
        var oneTarget = settingTarget[i];
        oneTarget.style.opacity = '1';
        oneTarget.removeChild(document.querySelector('.resetBtn'));
    }
}
});

// for문 돌려서 btns의 버튼마다 이벤트 추가해준다
for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];
    // 드래그가 시작되면
    btn.addEventListener('dragstart', function (e) {
        // dragged에 드래그 대상인 버튼을 넣어주고
        dragged = e.target;
        // dragged의 불투명도를 0.5로 바꿔준다
        dragged.style.opacity = .5;
    });
    // 드래그가 끝나면
    btn.addEventListener('dragend', function (e) {
        // dragged의 불투명도를 돌려주고
        dragged.style.opacity = "";
        // 위젯 예상 설치 공간을 보여주는 expected div의 사이즈를 0으로 바꿔준다
        expected.style.width = 0;
        expected.style.height = 0;
        // dragged를 null로 바꿔줘서 아무거나 드래그되게 하지 않음
        dragged = null;
    });
}

// dropzone에 드래그 된 것이 들어오면

dropzone.addEventListener('dragover', function (e) {
    e.preventDefault();
    // 드래그 한 것이 드래그 가능한 친구면
    if (dragged != undefined) {
        if (dragged.getAttribute('draggable') == 'true') {
            var xSize = 4;
            if (dragged.getAttribute('id') == 'plantBtn'||dragged.getAttribute('id') == 'catBtn') {
                xSize = 2;
            }
            // 드래그 범위를 체크하고
            if (checkRange(e.pageX, e.pageY, xSize)) {
                // 위젯 저장판을 확인하고
                if (checkPan(e.pageX, e.pageY, xSize)) {
                    // 위젯 예상 위치를 보여주는 div가 움직이게 함
                    expetedMove(expected, e.pageX, e.pageY, xSize);
                } else {
                    // 범위나, 저장판의 유효범위가 아니면 expected div를 0으로
                    expected.style.width = 0;
                    expected.style.height = 0;
                }
            } else {
                expected.style.width = 0;
                expected.style.height = 0;
            }
        }
    }
});


// dropzone에 드래그를 해서 놓으면
dropzone.addEventListener('drop', function (e) {
    // 드래그 한 것이 드래그 가능한 친구면
    if (dragged != undefined) {
        if (dragged.getAttribute('draggable') == 'true') {
            var xSize = 4;
            if (dragged.getAttribute('id') == 'plantBtn'||dragged.getAttribute('id') == 'catBtn') {
                xSize = 2;
            }
            // 드래그 범위를 체크하고
            if (checkRange(e.pageX, e.pageY, xSize)) {
                // 위젯 저장판을 확인하고
                if (checkPan(e.pageX, e.pageY, xSize)) {
                    // 조건을 통과하면 새로운 div를 만들어줌
                    var settedDiv = document.createElement('div');
                    // 얘는 정착한 친구니까 클래스를 새로 적용해주고
                    settedDiv.setAttribute('class', 'setted');
                    // dropzone에 더해준다
                    dropzone.append(settedDiv);
                    // 정착 완료
                    completeSetting(settedDiv, e.pageX, e.pageY, xSize);
                    // 판에도 정보 추가
                    settedDiv.setAttribute('id', dragged.getAttribute('id') + 'Div');
                    // 버튼 id로 분기처리해서 생성자호출
                    switch (settedDiv.getAttribute('id')) {
                        case 'neflixBtnDiv':
                            addPan(e.pageX, e.pageY, xSize, 8);
                            new MovieController(settedDiv);
                            break;
                        case 'plantBtnDiv':
                            addPan(e.pageX, e.pageY, xSize, 2);
                            new Crazyplantlady(settedDiv, 1, 0, 0);
                            break;
                        case 'waterBtnDiv':
                            addPan(e.pageX, e.pageY, xSize, 6);
                            new WaterTime(settedDiv);
                            break;
                        case 'foodBtnDiv':
                            addPan(e.pageX, e.pageY, xSize, 7);
                            new menuSelector(settedDiv);
                            break;
                        case 'todoBtnDiv':
                            addPan(e.pageX, e.pageY, xSize, 4);
                            new todoController(settedDiv);
                            break;
                        case 'cafeinBtnDiv':
                            addPan(e.pageX, e.pageY, xSize, 1);
                            new MapController(settedDiv);
                            break;
                        case 'weatherBtnDiv':
                            addPan(e.pageX, e.pageY, xSize, 5);
                            new WeatherController(settedDiv);
                            break;
                        case 'catBtnDiv':
                            addPan(e.pageX, e.pageY, xSize, 3);
                            new catController(settedDiv);
                            break;
                    }
                }
            }
        }
    }
});




// 판에 정보 추가(x, y)좌표 받아서 저장
function addPan(x, y, xSize, idx) {
    var panX = checkPanX(x, xSize);
    var panY = checkPanY(y);
    // 지금은 4, 2지만 이걸 (4*2 같은 개념이니까 다른 사이즈로 대체 가능함)
    for (var i = panX; i < panX + xSize; i++) {
        for (var j = panY; j < panY + 2; j++) {
            widgetPan[j][i] = idx;
        }
    }
}

// 정착 완료(스타일 지정/크기, 시작위치)
function completeSetting(setted, x, y, xSize) {
    setted.style.width = oneBlockSize * xSize + 'px';
    setted.style.height = oneBlockSize * 2 + 'px';
    setted.style.left = checkLeft(x, xSize) + 'px';
    setted.style.top = checkTop(y) + 'px';
}

// 예상 위치 보여주고 이동
function expetedMove(expected, x, y, xSize) {
    expected.style.width = oneBlockSize * xSize + 'px';
    expected.style.height = oneBlockSize * 2 + 'px';
    expected.style.background = 'gray';
    expected.style.opacity = 0.5;
    expected.style.left = checkLeft(x, xSize) + 'px';
    expected.style.top = checkTop(y) + 'px';
}

// 위젯버튼 디스플레이 바꿔주는 친구
function displayEffect(btns, check) {
    if (check) {
        for (var i = 0; i < btns.length; i++) {
            var btn = btns[i];
            btn.style.display = 'block';
        }
    } else {
        for (var i = 0; i < btns.length; i++) {
            var btn = btns[i];
            btn.style.display = 'none';
        }
    }
}

// 유효 범위 체크
function checkRange(x, y, xSize) {
    return checkLeft(x, xSize) >= 0 && checkLeft(x, xSize) + oneBlockSize * xSize <= innerWidth && checkTop(y) >= 0 && checkTop(y) + oneBlockSize * 2 <= innerHeight
}

// 왼쪽 체크(및 위치 정보 전달)
function checkLeft(x, xSize) {
    return Math.round((x - oneBlockSize * (xSize / 2)) / oneBlockSize) * oneBlockSize;
}

// 위쪽 체크(및 위치 정보 전달)
function checkTop(y) {
    return Math.round((y - oneBlockSize) / oneBlockSize) * oneBlockSize;
}

// 판X 체크(및 위치 정보 전달)
function checkPanX(x, xSize) {
    return Math.round((x - oneBlockSize * (xSize / 2)) / oneBlockSize);
}

// 판Y 체크(및 위치 정보 전달)
function checkPanY(y) {
    return Math.round((y - oneBlockSize) / oneBlockSize);
}

// 판에 이미 저장된 친구가 있는지 확인
function checkPan(x, y, xSize) {
    var panX = checkPanX(x, xSize);
    var panY = checkPanY(y);
    for (var i = 0; i < xSize; i++) {
        if (widgetPan[panY][panX + i] != 0 || widgetPan[panY + 1][panX + i] != 0)
            return false;
    }
    return true;
}

// 판 정보 지우기
function removePan(idx){
    for (var i = 0; i < widgetPan.length; i++) {
        for (var j = 0; j < widgetPan[i].length; j++) {
            if(widgetPan[i][j]==idx)
            widgetPan[i][j]=0;
        }
    }
}


// 토글을 위한 제이쿼리(검색바)
$(".btn").on("click", function () {
    $(".input").toggleClass("inclicked");
    $(".btn").toggleClass("close");
});