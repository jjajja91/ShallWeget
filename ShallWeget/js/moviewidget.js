// 무비컨트롤러 클래스(생성자) 생성 / 매개변수 = 설치할 공간(div)
var MovieController = (function () {
  var MovieController = function (space) {
    this.space = space;
    var $this = this;
    // 1초 후 무비컨트롤러의 init() 함수 호출
    setTimeout(function () {
      $this.init();
    }, 1000);
  };

  // init 함수 동적 추가
  MovieController.prototype.init = function () {
    var $this = this
    // 첫 화면 로고 추가
    this.space.innerHTML = '<div class="neflixLogo" contenteditable="true">네FLIX</div><div class="neflixInfo">네가 원하는 모든 영화 정보</div>';
    var intro = new Audio();
    intro.src = './js/intro.mp3';
    intro.play();
    setTimeout(function () {
      $this.initElement();
    }, 7000);
  };

  // initElement 함수 동적 추가
  MovieController.prototype.initElement = function () {
    var $this = this;
    $this.space.innerHTML = '';
    // 처음화면의 div 생성
    var firstDiv = document.createElement('div');
    firstDiv.setAttribute('id', 'neflixWrapper');
    var logoDiv = document.createElement('div');
    logoDiv.setAttribute('id', 'firstLogoDiv');
    logoDiv.innerHTML = '네FLIX';
    // 옵션 체크하는 div 생성
    var checkDiv = document.createElement('div');
    // 국가 선택 라벨, 셀렉트 생성해서 span에 추가
    var nationLabel = document.createElement('label');
    var nationSelect = document.createElement('select');
    var nationSpan = document.createElement('span');
    checkDiv.setAttribute('class', 'neflixDiv');
    nationLabel.innerText = '국가';
    nationSelect.innerHTML += '<option value = "전체">전체</option><option value = "국내">국내</option><option value = "해외">해외</option>';
    nationSpan.appendChild(nationLabel);
    nationSpan.appendChild(nationSelect);
    // 장르 선택 라벨, 셀렉트 생성해서 span에 추가
    var genreLabel = document.createElement('label');
    var genreSelect = document.createElement('select');
    var genreSpan = document.createElement('span');
    genreLabel.innerText = '장르';
    genreSelect.innerHTML += '<option value = "전체">전체</option>';
    genreSelect.innerHTML += '<option value = "드라마">드라마</option>';
    genreSelect.innerHTML += '<option value = "공포">공포</option>';
    genreSelect.innerHTML += '<option value = "액션">액션</option>';
    genreSelect.innerHTML += '<option value = "멜로">멜로</option>';
    genreSelect.innerHTML += '<option value = "코미디">코미디</option>';
    genreSelect.innerHTML += '<option value = "판타지">판타지</option>';
    genreSpan.appendChild(genreLabel);
    genreSpan.appendChild(genreSelect);
    // 타입 선택 라벨, 체크박스 생성해서 span에 추가(타입 선택 = 개봉예정인지 아닌지)
    var typeLabel = document.createElement('label');
    var typeCheck = document.createElement('input');
    var typeSpan = document.createElement('span');
    typeLabel.innerText = '개봉예정';
    typeCheck.setAttribute('type', 'checkbox');
    typeSpan.appendChild(typeLabel);
    typeSpan.appendChild(typeCheck);
    typeSpan.style.padding = '2px';
    // 체크 div에 span들 추가
    checkDiv.appendChild(nationSpan);
    checkDiv.appendChild(genreSpan);
    checkDiv.appendChild(typeSpan);
    // 검색 div를 만들고 title검색, 감독검색 라벨과 input text 추가
    var searchDiv = document.createElement('div');
    var titleLabel = document.createElement('label');
    var titleText = document.createElement('input');
    titleText.setAttribute('id', 'titleText');
    searchDiv.setAttribute('class', 'neflixDiv');
    searchDiv.setAttribute('id', 'neflixSearchDiv');
    titleLabel.innerText = '영화제목';
    titleText.setAttribute('type', 'text');
    searchDiv.appendChild(titleLabel);
    searchDiv.appendChild(titleText);
    var directorLabel = document.createElement('label');
    var directorText = document.createElement('input');
    directorLabel.innerText = '감독이름';
    directorText.setAttribute('type', 'text');
    directorText.setAttribute('id', 'directorText');
    searchDiv.appendChild(directorLabel);
    searchDiv.appendChild(directorText);
    // 첫 화면 div에 체크, 검색 div 추가
    firstDiv.appendChild(logoDiv);
    firstDiv.appendChild(checkDiv);
    firstDiv.appendChild(searchDiv);
    // 첫 화면 스타일 적용
    firstDiv.style.width = '600px';
    firstDiv.style.height = '300px';
    firstDiv.style.margin = '10px';
    // 자동 검색용 span, 검색버튼 추가 (div여도 상관없을 듯)
    var autoMovieSpan = document.createElement('span');
    autoMovieSpan.setAttribute('id', 'autoMovieSpan');
    var autoDirectorSpan = document.createElement('span');
    autoDirectorSpan.setAttribute('id', 'autoDirectorSpan');
    var searchBtn = document.createElement('button');
    searchBtn.innerText = '검 색';
    // 자동 검색용 공간, 검색버튼 첫 화면 div에 추가
    firstDiv.appendChild(autoMovieSpan);
    firstDiv.appendChild(autoDirectorSpan);
    firstDiv.appendChild(searchBtn);
    this.space.appendChild(firstDiv);
    // 검색 input text에 input 이벤트를 걸어서 타이핑 시 이벤트 발생
    titleText.addEventListener('input', function () {
      $this.movieAuto(titleText.value);
    });
    directorText.addEventListener('input', function () {
      $this.directorAuto(directorText.value);
    });
    // 검색 버튼에 클릭 이벤트 걸기
    searchBtn.addEventListener('click', function (e) {
      $this.getData(nationSelect.value, genreSelect.value, titleText.value, directorText.value, typeCheck.checked);
    });
  }

  // 화면에 결과를 출력하는 메서드인 printAll을 동적으로 추가
  MovieController.prototype.printAll = function () {
    var $this = this;
    var container = this.space;
    var movieList = this.movieList;
    container.innerHTML = '';

    var imgArr = ['http://imgnews.naver.net/image/5095/2016/09/04/423025_237679_4753_99_20160904230509.PNG', 'http://imgnews.naver.net/image/5802/2020/04/27/0000006593_001_20200427111141401.gif',
      'http://post.phinf.naver.net/MjAxNjEyMDJfMjcg/MDAxNDgwNjA0NjcyNzAz.HJRThAkLuBaVRZaGpWlV3TUx6muXstOFiwzmECzkwp8g._5zOBeokK3D8OiqWaeNlvjDMG_4y5XhVoIK0BuWrN9gg.JPEG/IPo04CuD_HI7kfyB6AKnEyrqGugE.jpg',
      'http://imgnews.naver.net/image/001/2006/06/23/AKR20060623160100041_01_i.jpg', 'http://post.phinf.naver.net/MjAxNzA1MjlfMjAw/MDAxNDk2MDM3NjAzODUx.iBk_XrVb-2kuJkoXAzFt0T0oP7GNxl7kRVSTtO741gEg.3eJ1_ZhqfuBsJ8zoa8iJwwJ-kwBRwyg1YBs9TFdz_k4g.JPEG/IQQ2r6ErqJeWPHs0Fa4rA9XhF-PY.jpg',
      'http://post.phinf.naver.net/MjAxNzA1MjlfMjkg/MDAxNDk2MDMwNDczODU0.UcKgygsRwPxyqg9QRH2vZ2XMPFMvhGJV0qUQO5Dfnbsg.bujPVlbdnJGwcDOHuodylARpbPE6bWlnXhYCKKeVwyog.JPEG/Ildgn9KfXWM6i-gTFXnA5j2jqDe8.jpg',
      'http://cafefiles.naver.net/MjAyMDAyMTFfMjQ0/MDAxNTgxMzk1NTA5NDkx.spobV2KGbdYu19_4FDluHqoMz-0ZtpS80-aa6LrZSMcg.ZJR3k3V3lfQvJdieGUU5FzTgtzuCGjwLXxz_yoInpm0g.JPEG/externalFile.jpg',
      'http://blogfiles.naver.net/20131227_228/3071jh_13881363087218zuOM_PNG/vhtmxj.PNG'
    ];

    var logoDiv = document.createElement('div');
    logoDiv.setAttribute('id', 'firstLogoDiv');
    logoDiv.innerHTML = '네FLIX';

    var fragment = document.createDocumentFragment();
    var divWrap = document.createElement('div');
    divWrap.setAttribute('id', 'carouselDiv');


    for (var i = 0; i < movieList.length; i++) {
      var movie = movieList[i];


      var movieDiv = document.createElement('div');
      movieDiv.setAttribute('class', 'movieSlides fade');

      var movieImage = document.createElement('img');
      movieImage.src = imgArr[i];

      var movieInfoDiv = document.createElement('div');
      movieInfoDiv.setAttribute('id', 'movieInfoDiv');

      var h2TitleKr = document.createElement('h2');
      h2TitleKr.setAttribute('class', 'movieTitle');
      h2TitleKr.innerHTML = movie.movieNm;
      var h2TitleEn = document.createElement('h2');
      h2TitleEn.setAttribute('class', 'movieTitle');
      h2TitleEn.innerHTML = "(" + movie.movieNmEn + ")";

      var spanDirector = document.createElement('span');
      spanDirector.innerHTML = "감        독: " + movie.directors[0].peopleNm + '<br>';


      var spanGenres = document.createElement('span');
      spanGenres.innerHTML = "장        르: " + movie.genreAlt + '<br>';

      var spanYear = document.createElement('span');
      spanYear.innerHTML = "개봉일자: " + movie.openDt + '<br>';

      movieInfoDiv.appendChild(h2TitleKr);
      movieInfoDiv.appendChild(h2TitleEn);
      movieInfoDiv.innerHTML += "<br>";
      movieInfoDiv.innerHTML += "<br>";
      movieInfoDiv.appendChild(spanDirector);
      movieInfoDiv.appendChild(spanGenres);
      movieInfoDiv.appendChild(spanYear);
      movieDiv.appendChild(movieImage);
      movieDiv.appendChild(movieInfoDiv);
      fragment.appendChild(movieDiv);
    }
    var prevBtn = document.createElement('a');
    prevBtn.innerHTML = '<';
    prevBtn.setAttribute('class', 'prev');
    prevBtn.addEventListener('click', function (e) {
      plusSlides(-1);
    });
    var nextBtn = document.createElement('a');
    nextBtn.innerHTML = '>';
    nextBtn.setAttribute('class', 'next');
    nextBtn.addEventListener('click', function (e) {
      plusSlides(1);
    });
    fragment.appendChild(prevBtn);
    fragment.appendChild(nextBtn);

    var reSearchBtn = document.createElement('button');
    reSearchBtn.innerText = '다시 검색';
    reSearchBtn.addEventListener('click', function(e){
      $this.initElement();
    });

    fragment.appendChild(reSearchBtn);
    divWrap.appendChild(fragment);
    container.appendChild(logoDiv);
    container.appendChild(divWrap);


    // carousel 관련 메서드들
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("movieSlides");
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
        slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
    }

    var slideInterval = setInterval(function () {
      showSlides(slideIndex += 1)
    }, 5000);

  };

  // 영화 제목을 자동 검색하여 프린트하는 메서드
  MovieController.prototype.autoSearchMovie = function () {
    var movieList = this.movieList;
    var titleText = document.querySelector('#titleText');
    var fragment = document.createDocumentFragment();
    var autoMovieSpan = document.querySelector('#autoMovieSpan');
    var searchMovieDiv = document.createElement('div');
    searchMovieDiv.setAttribute('id', 'searchMovieDiv');
    // 검색 결과 초기화
    autoMovieSpan.innerHTML = '';
    searchMovieDiv.innerHTML = '';
    // input text가 비어있을 때 검색 결과 초기화
    if (titleText.value == '') {
      autoMovieSpan.innerHTML = '';
      searchMovieDiv.innerHTML = '';
    } else {
      // 가져온 결과 배열의 길이가 0이 아니면
      if (movieList.length != 0) {
        // 결과 배열의 길이만큼 for문 돌면서
        for (var i = 0; i < movieList.length; i++) {
          var movie = movieList[i];
          // li 태그를 생성하여
          var liElem = document.createElement('li');
          // 결과를 li 태그 안에 넣어주고
          liElem.innerHTML = movie.movieNm;
          // 결과 보여줄 div에 넣는다
          searchMovieDiv.appendChild(liElem);
          // li에 이벤트를 걸고 클릭할 경우 결과물을 input text에 옮겨주고 자동 검색 결과를 초기화 시킨다
          liElem.addEventListener('click', function (e) {
            titleText.value = this.innerHTML;
            autoMovieSpan.innerHTML = '';
            searchMovieDiv.innerHTML = '';
          });
        }
        // div를 fragment에 저장한 후
        fragment.appendChild(searchMovieDiv);
        // 다 완성이 되면 그때 span에 넣어준다
        autoMovieSpan.appendChild(fragment);
      }
    }
  };

  // 위의 메서드와 동일함(대신 영화제목 검색이 아니라 감독 검색)
  MovieController.prototype.autoSearchDirector = function () {
    var movieList = this.movieList;
    var directorText = document.querySelector('#directorText');
    var fragment = document.createDocumentFragment();
    var autoDirectorSpan = document.querySelector('#autoDirectorSpan');
    var searchDirectorDiv = document.createElement('div');
    searchDirectorDiv.setAttribute('id', 'searchDirectorDiv');
    autoDirectorSpan.innerHTML = '';
    searchDirectorDiv.innerHTML = '';
    if (directorText.value == '') {
      autoDirectorSpan.innerHTML = '';
      searchDirectorDiv.innerHTML = '';
    } else {
      if (movieList.length != 0) {
        for (var i = 0; i < movieList.length; i++) {
          var movie = movieList[i];
          var liElem = document.createElement('li');
          liElem.innerHTML = movie;
          searchDirectorDiv.appendChild(liElem);
          liElem.addEventListener('click', function (e) {
            directorText.value = this.innerHTML;
            autoDirectorSpan.innerHTML = '';
            searchDirectorDiv.innerHTML = '';
          });
        }
        fragment.appendChild(searchDirectorDiv)
        autoDirectorSpan.appendChild(fragment);
      }
    }
  };


  // 영화 제목 자동 검색 시 데이터를 가져오는 메서드
  MovieController.prototype.movieAuto = function (movieNm) {
    var $this = this;
    $.ajax({
      type: 'GET',
      url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json',
      data: {
        'key': '46b581e54ab1b2ac655a447e216f74e9',
        // input text의 영화제목을 매개변수로 받아와서 data 쿼리문에 넣음
        'movieNm': movieNm,
        'itemPerPage': '5'
      },
      success: function (response) {
        var movieTmp = response.movieListResult.movieList;
        $this.movieList = [];
        for (var i = 0; i < 5; i++) {
          if (movieTmp[i] != undefined) {
            $this.movieList.push(movieTmp[i]);
          }
        };
        // 가져온 결과물을 출력하기 위해 메서드 호출
        $this.autoSearchMovie();
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  // 감독 이름 자동 검색 시 데이터를 가져오는 메서드
  MovieController.prototype.directorAuto = function (directorNm) {
    var $this = this;
    $.ajax({
      type: 'GET',
      url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json',
      data: {
        'key': '46b581e54ab1b2ac655a447e216f74e9',
        // input text의 감독 이름을 매개변수로 받아와서 data 쿼리문에 넣음
        'directorNm': directorNm,
        // 중복이 있을 수 있는 결과물이기 때문에 여유있게 100개 받아옴
        'itemPerPage': '100'
      },
      success: function (response) {
        var movieTmp = response.movieListResult.movieList;
        // 영화 결과를 가져오는 것이므로 한 감독이 여러 영화를 찍으면 같은 감독 이름이 여러번 나올 수 있어 set 사용
        var movieListTmp = new Set();
        // set의 사이즈가 5가 될 때까지 for문
        for (var i = 0; movieListTmp.size < 5; i++) {
          // 영화 감독의 경우 한 영화에 여러 감독이 참여가능 하므로 단독 감독일 경우만 뽑음 (어짜피 이름만 검색하는 것이므로)
          if (movieTmp[i].directors[0].peopleNm != undefined) {
            console.log(movieTmp[i].directors);
            if (movieTmp[i].directors.length == 1) {
              movieListTmp.add(movieTmp[i].directors[0].peopleNm);
            }
          }
        }
        // set으로 받아온 것을 편의를 위해 배열로 바꿈
        $this.movieList = Array.from(movieListTmp);
        // 가져온 결과물을 출력하기 위해 메서드 호출
        $this.autoSearchDirector();
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  // 검색 버튼을 눌렀을 시 데이터를 가져올 getData 메서드
  MovieController.prototype.getData = function (nation, genre, movieNm, directorNm, checked) {
    var $this = this;
    var nationNm = '한국';
    if (genre == '멜로')
      genre = '멜로/로맨스';
    $.ajax({
      type: 'GET',
      url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json',
      data: {
        'key': '46b581e54ab1b2ac655a447e216f74e9',
        // 매개변수로 가져온 영화감독 이름
        'directorNm': directorNm,
        // 매개변수로 가져온 영화제목 이름
        'movieNm': movieNm,
        'itemPerPage': '100'
      },
      success: function (response) {
        console.log(response);
        var movieTmp = response.movieListResult.movieList;
        $this.movieList = [];
        for (var i = 0; i < movieTmp.length; i++) {
          var movie = movieTmp[i];
          if (checked == true) {
            if (movie.prdtStatNm != '개봉예정') {
              continue;
            }
          } else {
            if (movie.prdtStatNm != '개봉') {
              continue;
            }
          }
          if (nation == '전체' && genre == '전체') {
            $this.movieList.push(movie);
          } else if (nation == '전체') {
            if (movie.repGenreNm == genre)
              $this.movieList.push(movie);
          } else if (genre == '전체') {
            if (nation == '국내') {
              if (movie.repNationNm == nationNm)
                $this.movieList.push(movie);
            } else {
              if (movie.repNationNm != nationNm)
                $this.movieList.push(movie);
            }
          } else {
            if (nation == '국내') {
              if (movie.repGenreNm == genre && movie.repNationNm == nationNm)
                $this.movieList.push(movie);
            } else {
              if (movie.repGenreNm == genre && movie.repNationNm != nationNm)
                $this.movieList.push(movie);
            }
          }
          if ($this.movieList.length == 9)
            break;
        };
        // 결과물을 출력하기 위한 메서드 호출
        $this.printAll();
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  return MovieController;
})();