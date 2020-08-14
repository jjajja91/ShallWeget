var menuSelector = function (space) {
  this.space = space;
  this.init();
};

menuSelector.prototype.init = function () {
  this.food0 = [{ name: "국밥", src: "menu/food/국밥.jpg" }, { name: "쌀국수", src: "menu/food/쌀국수.jpeg" }, { name: "라면", src: "menu/food/라면.jpg" }, { name: "갈비탕", src: "menu/food/갈비탕.jpg" },
{ name: "삼계탕", src: "menu/food/삼계탕.jpg" }, { name: "팥죽", src: "menu/food/팥죽.jpg" }, { name: "짬뽕", src: "menu/food/짬뽕.jpg" }, { name: "칼국수", src: "menu/food/칼국수.jpg" }, 
{ name: "샤브샤브", src: "menu/food/샤브샤브.jpg" }, { name: "해물탕", src: "menu/food/해물탕.jpg" }, { name: "알탕", src: "menu/food/알탕.jpg" }, { name: "누룽지", src: "menu/food/누룽지.jpeg" }, 
{ name: "죽", src: "menu/food/죽.jpg" }, { name: "우동", src: "menu/food/우동.jpeg" }, { name: "부대찌개", src: "menu/food/부대찌개.jpg"}]

//더울때 
this.food1 = [{ name: "냉면", src: "menu/food/냉면.jpeg" }, { name: "냉모밀", src: "menu/food/냉모밀.jpg" }, { name: "콩국수", src: "menu/food/콩국수.jpg" },  { name: "삼계탕", src: "menu/food/삼계탕.jpg" },
 { name: "평양냉면", src: "menu/food/평양냉면.jpg" }, { name: "팟타이", src: "menu/food/팟타이.jpg" }, { name: "분짜", src: "menu/food/분짜.jpg" }, { name: "연어", src: "menu/food/연어회.jpg" },
{ name: "쌈밥", src: "menu/food/쌈밥.jpg" }, { name: "냉라멘", src: "menu/food/냉라멘.jpg" }, { name: "냉짬뽕", src: "menu/food/냉짬뽕.jpg" }]
//비올때 
this.food2 = [{ name: "짬뽕", src: "menu/food/짬뽕.jpg" }, { name: "칼국수", src: "menu/food/칼국수.jpg" }, { name: "매운탕", src: "menu/food/매운탕.jpg" }, { name: "알탕", src: "menu/food/알탕.jpg" },
{ name: "수제비", src: "menu/food/수제비.jpg" }, { name: "잔치국수", src: "menu/food/잔치국수.jpg" }, { name: "라멘", src: "menu/food/라멘.jpg" }, { name: "순두부", src: "menu/food/순두부.jpg" },
{ name: "짜장면", src: "menu/food/짜장면.jpg" }, { name: "뼈해장국", src: "menu/food/뼈해장국.jpeg" }, { name: "곱창전골", src: "menu/food/곱창전골.jpg" },
{ name: "치킨", src: "menu/food/치킨.jpg" }, { name: "피자", src: "menu/food/피자.jpeg" }]
//화날때
this.food3 = [{ name: "불족발", src: "menu/food/불족발.jpg" }, { name: "닭볶음탕", src: "menu/food/닭볶음탕.jpeg" }, { name: "짬뽕", src: "menu/food/짬뽕.jpg" },{ name: "라면", src: "menu/food/라면.jpg" }, 
{ name: "뼈해장국", src: "menu/food/뼈해장국.jpeg" }, { name: "아구찜", src: "menu/food/아구찜.jpg" },{ name: "마라탕", src: "menu/food/마라탕.jpeg" }, { name: "닭한마리", src: "menu/food/닭한마리.jpg" },
 { name: "매운갈비찜", src: "menu/food/매운갈비찜.jpg" },{ name: "해물찜", src: "menu/food/해물찜.jpg" }, { name: "불낙지", src: "menu/food/불낙지.png" }, { name: "닭발", src: "menu/food/닭발.jpg" }]
//꿀꿀한날 
this.food4 = [{ name: "짬뽕", src: "menu/food/짬뽕.jpg" }, { name: "크림파스타", src: "menu/food/크림파스타.jpg" }, { name: "냉면", src: "menu/food/냉면.jpeg" },
{ name: "쫄면", src: "menu/food/쫄면.jpg" }, { name: "울면", src: "menu/food/울면.jpg" }, { name: "비빔밥", src: "menu/food/비빔밥.jpg" }, { name: "수제버거", src: "menu/food/수제버거.jpg" }]
//월급날 
this.food5 = [{ name: "소고기", src: "menu/food/소고기.jpg" }, { name: "삼겹살", src: "menu/food/삼겹살.jpg" }, { name: "참치회", src: "menu/food/참치회.jpg" }, { name: "스테이크", src: "menu/food/스테이크.jpeg" }, 
{ name: "소꼬리찜", src: "menu/food/소꼬리찜.jpg" }, { name: "랍스터", src: "menu/food/랍스터.jpg" }, { name: "킹크랩", src: "menu/food/킹크랩.jpg" },{ name: "해물찜", src: "menu/food/해물찜.jpg" },
 { name: "양갈비", src: "menu/food/양갈비.jpg" }]
//쏘쏘
this.food6 = [ { name: "김밥", src: "menu/food/김밥.jpg" },  { name: "떡볶이", src: "menu/food/떡볶이.jpg" },  { name: "샐러드", src: "menu/food/샐러드.jpg" },  { name: "순대", src: "menu/food/순대.jpg" }, 
{ name: "샌드위치", src: "menu/food/샌드위치.png" },  { name: "핫도그", src: "menu/food/핫도그.jpg" }]
//배고파 
this.food7 = [ { name: "덮밥", src: "menu/food/덮밥.png" },{ name: "라멘", src: "menu/food/라멘.jpg" },{ name: "돈부리", src: "menu/food/돈부리.jpg" }, { name: "쌀국수", src: "menu/food/쌀국수.jpeg" },
{ name: "쌈밥", src: "menu/food/쌈밥.jpg" }, { name: "순두부", src: "menu/food/순두부.jpg" }]
//개배고파 
this.food8 = [{ name:"피자", src: "menu/food/피자.jpeg" },{ name:"치킨", src: "menu/food/치킨.jpg" },{ name:"햄버거", src: "menu/food/햄버거.jpg" },{ name:"족발", src: "menu/food/족발.jpg" },
{ name:"찜닭", src: "menu/food/찜닭.jpg" },{ name: "보쌈", src: "menu/food/보쌈.jpg" },  { name: "돈까스", src: "menu/food/돈까스.jpg" }, { name: "비빔밥", src: "menu/food/비빔밥.jpg" }]

this.foodArr = [this.food0, this.food1, this.food2, this.food3, this.food4, this.food5, this.food6, this.food7, this.food8]
//최종결과 담을 배열
this.result = [];
this.pickOpt = [];
this.initElement();
};

menuSelector.prototype.initElement = function () {
         
  var options = [{name:"추워",src: "menu/cold.jpeg" }, { name: "더워", src: "menu/hot.jpeg" }, { name: "비와", src: "menu/raining.jpg" }
    , { name: "빡쳐", src: "menu/annoying.jpeg" }, { name: "꿀꿀해", src: "menu/sad.jpg" }, { name: "월급날탕진잼", src: "menu/flex.jpeg" }
    , { name: "쏘쏘", src: "menu/hungry.jpg" }, { name: "배고파", src: "menu/starving.jpg" }, { name: "개배고파", src: "menu/배고파.png" }];
  var questions = ["오늘 날씨 어때?", "오늘 기분 어때?", "얼마나 배고파?"];
  var currentTab = 0; // Current tab is set to be the first tab (0)
  var that = this;
  for (i = 0; i < questions.length; i++) {
    var tab = document.createElement('div');
    var title =document.createElement('span');
    title.setAttribute('class','title');
    var titleH = document.createElement('h1');
    var container =document.createElement('section')
    container.setAttribute('class','container');
   
    //배열에서 받아서 넣기
    title.innerHTML += questions[i];
    titleH.appendChild(title);
    container.appendChild(titleH);

    tab.setAttribute('class','tab');
    tab.appendChild(container);
    for (j = i*3; j < (i*3)+3; j++) {   
      //체크박스 선택옵션지
      var checkBox = document.createElement('input');
      checkBox.setAttribute('type','checkbox');
      checkBox.setAttribute('class','food');
      checkBox.setAttribute('id','checkId');
      //옵션 짤 넣기
      var optImg =document.createElement('img');
      optImg.setAttribute('class', optImg);
      optImg.setAttribute('src', options[j].src);

      optImg.onclick = function(){imgChecked();};
        //체크박스 감싸는 div
      var optDiv = document.createElement('div');
      optDiv.setAttribute('class','optDiv');
      //옵션 이름 넣기

      optDiv.appendChild(checkBox);
      //중간에 질문 끼워넣기
      optDiv.innerHTML += options[j].name;
      var imgDiv = document.createElement('div');
      //체크박스랑 짤 따로 div로 감싸기
      imgDiv.appendChild(optImg);

      //span으로 한번 더 감싸기
      var span = document.createElement('span');
      span.appendChild(optDiv);
      span.appendChild(imgDiv);

      //옵션 마지막 div
      var optDiv2 = document.createElement('div');
      optDiv2.setAttribute('class', 'option');
      optDiv2.appendChild(span);
      //옵션들 텝에 넣기
      tab.appendChild(optDiv2);
    }

        //버튼
    var btn1 = document.createElement('button');
    btn1.setAttribute('id','prevBtn');
    btn1.innerHTML += 'back';
    btn1.onclick = function(){
        nextPrev(-1);
    };
    var btn2 = document.createElement('button');
    btn2.setAttribute('id','nextBtn');
    btn2.onclick = function(){
        nextPrev(1);
    };
    //버튼 div  
    var btnDiv = document.createElement('div');
    btnDiv.setAttribute('class','btnDiv');
    btnDiv.appendChild(btn1);
    btnDiv.appendChild(btn2);
    //텝 밑에 붙이기
    tab.appendChild(btnDiv);

    //아웃터로 감싸기
    this.space.appendChild(tab);
}

    showTab(currentTab); // Display the current tab
    
    setInterval(borderColor,100);
    function borderColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    optImg.style.borderColor = "#"+randomColor;
    }
    
  function showTab(n) {
      //질문 올라오는 애니메이션
$(document).ready(function() {
$(".title").lettering();
});

$(document).ready(function() {
animation();
});

function animation() {
var title1 = new TimelineMax();
title1.staggerFromTo(".title span", 0.5, 
{ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
{ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);

}
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.querySelectorAll("#prevBtn")[n].style.display = "none";
  } else {
    document.querySelectorAll("#prevBtn")[n].style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.querySelectorAll("#nextBtn")[n].innerHTML = "result";
  } else {
    document.querySelectorAll("#nextBtn")[n].innerHTML = "Next";
  }
 
}
function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
      // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    collectResult();        
    resultShow();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);

}

//선택 결과 모으기
function collectResult() {
  //체크박스 선택유무 확인
  var selection = document.getElementsByClassName("food");
      k=0;
      f=0;
  for (i = 0; i < selection.length; i++) {
    if (selection[i].checked){
      that.pickOpt[f++] = options[i].name;
      for(j=0;j<that.foodArr[i].length;j++){
    that.result[k++]=that.foodArr[i][j];
  
    }
    }
  }
  if(k==0){
    that.pickOpt[f]="아무거나";
    for (i = 0; i < selection.length; i++) {
              for(j=0;j<that.foodArr[i].length;j++){
    that.result[k++]=that.foodArr[i][j];
  }
}
}
}
function imgChecked() {
  var optImgCk = document.getElementsByClassName("optImg");
  var ckBox = document.getElementsByClassName("food");
     for(i=0; i<options.length;i++){
    if(optImgCk[i]=onclick){
      food[i]=checked;
    }
  }
}
//결과 보여주는 창 띄우기
function resultShow(){

//새 창 전체 div

var resultDiv = document.createElement('div');
resultDiv.setAttribute = ('class', 'resultDiv');
//결과 목록 보여주기
var headLine = document.createElement('span');
var resultH = document.createElement('h1');
var resultSection = document.createElement('section');
resultSection.setAttribute('class','container');
headLine.setAttribute('class','title');
//선택한 옵션값 받아오기
var resultLine = document.createElement('div');
resultLine.setAttribute('id' , 'resultLine');

headLine.innerHTML += "선택된 옵션";
resultLine.setAttribute('value' , that.pickOpt);
resultLine.innerHTML += that.pickOpt;
//다시하기 버튼
var restartBtn = document.createElement('button');
restartBtn.setAttribute('class','restartBtn');
restartBtn.innerHTML += "다시 선택";
var showResult = document.createElement('button');
showResult.setAttribute('class','showResult');
showResult.innerHTML += "오늘의 메뉴는?";
var btnsDiv = document.createElement('div');
//버튼 감싸는 div
btnsDiv.setAttribute('class', 'btnsDiv');
btnsDiv.appendChild(restartBtn);
btnsDiv.appendChild(showResult);

resultH.appendChild(headLine);
resultSection.appendChild(resultH);
resultDiv.appendChild(resultSection);
resultDiv.appendChild(resultLine);
resultDiv.appendChild(btnsDiv);

that.space.innerHTML = '';
that.space.appendChild(resultDiv);
restartBtn.onclick = function(){
  resultDiv.style.display = "none";
      that.init();
              }
   showResult.onclick = function(){
    Realresult();
      }         
      $(document).ready(function() {
$(".title").lettering();

});
$(document).ready(function() {
animation();
}, 1000);

function animation() {
var title1 = new TimelineMax();

title1.staggerFromTo(".title span", 0.5, 
{ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
{ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
}           
               
}

function Realresult(){
var lastWin = document.createElement('div');
lastWin.setAttribute('class','lastWin');
var lastTitle = document.createElement('div');
lastTitle.setAttribute('class', 'lastTitle');
lastTitle.innerHTML = "오늘의 메뉴";
var foodImg = document.createElement('img');
foodImg.setAttribute('class', 'foodImg');
foodImg.setAttribute('id', 'foodImg');
k =Math.floor(Math.random()*k);
foodImg.src = that.result[k].src;
// foodImg.src = "menu/food/갈비탕.jpg";
var lastMenu =document.createElement('div');
lastMenu.setAttribute('class', 'lastMenu');
lastMenu.innerHTML=that.result[k].name;
var redo = document.createElement('button');
redo.setAttribute('class','redo');
redo.innerHTML += "다시 고르기";
redo.onclick = function(){
    lastWin.style.display = "none";
    that.init();
}
lastWin.appendChild(lastTitle);
lastWin.appendChild(foodImg);
lastWin.appendChild(lastMenu);
lastWin.appendChild(redo);
that.space.innerHTML = '';
that.space.appendChild(lastWin);
//보더 반짝이 옵션
setInterval(borderColor,100);
function borderColor() {
var randomColor = Math.floor(Math.random()*16777215).toString(16);
foodImg.style.borderColor = "#"+randomColor;
}
}
}