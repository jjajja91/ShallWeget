var MapController = function (space) {
  this.space = space;
  this.init();
};

// init() 함수 동적 추가
MapController.prototype.init = function () {
  this.initElement();
};

// initElement 함수 동적 추가
MapController.prototype.initElement = function () {
  var $this = this;

  // 지도 div 생성
  var mapContainer = document.createElement("div");
  mapContainer.setAttribute("id", "map");

  // 지도 컨트롤 div 생성
  var map_typeControl = document.createElement("div");
  map_typeControl.setAttribute("class", "custom_typecontrol radius_border");
  var map_zoomControl = document.createElement("div");
  map_zoomControl.setAttribute("class", "custom_zoomcontrol radius_border");

  // 지도 타입, 줌 span 생성
  var roadmapbtn = document.createElement("span");
  roadmapbtn.setAttribute("id", "btnRoadmap");
  roadmapbtn.setAttribute("class", "selected_btn");
  roadmapbtn.innerText = "지도";
  roadmapbtn.onclick = function () {
    setMapType("roadmap");
  };

  var skyviewbtn = document.createElement("span");
  skyviewbtn.setAttribute("id", "btnSkyview");
  skyviewbtn.setAttribute("class", "btn");
  skyviewbtn.innerText = "스카이뷰";
  skyviewbtn.onclick = function () {
    setMapType("skyview");
  };

  var zoomInbtn = document.createElement("span");
  var zoomInImage = document.createElement("img");
  zoomInImage.setAttribute(
    "src",
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
  );
  zoomInImage.setAttribute("alt", "확대");
  zoomInbtn.onclick = zoomIn;

  var zoomOutbtn = document.createElement("span");
  var zoomOutImage = document.createElement("img");
  zoomOutImage.setAttribute(
    "src",
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
  );
  zoomOutImage.setAttribute("alt", "축소");
  zoomOutbtn.onclick = zoomOut;

  var menu_wrap = document.createElement("div");
  menu_wrap.setAttribute("id", "menu_wrap");
  menu_wrap.setAttribute("class", "bg_white");
  var menu_subwrap = document.createElement("div");
  menu_subwrap.setAttribute("id", "option");
  var searchDiv = document.createElement("div");
  var form = document.createElement("form");
  var checkIdle = document.createElement("input");
  checkIdle.setAttribute("type", "checkbox");
  checkIdle.setAttribute("id", "checkbox");
  checkIdle.onclick = function () {
    check(this);
  };
  form.innerText = "키워드 : ";
  form.onsubmit = function () {
    searchPlaces();
    return false;
  };
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("value", "카페");
  input.setAttribute("id", "keyword");
  input.setAttribute("size", "15");
  var searchButton = document.createElement("button");
  searchButton.setAttribute("type", "submit");
  searchButton.innerText = "검색";
  var favoriteBtn = document.createElement("button");
  favoriteBtn.setAttribute("id", "star");
  favoriteBtn.innerText = "★";
  favoriteBtn.onclick = function (event) {
    event.preventDefault();
    favorite();
  };
  var hr = document.createElement("hr");
  hr.setAttribute("class", "line");
  var placesList = document.createElement("ul");
  placesList.setAttribute("id", "placesList");

  // 줌 img 감싸기
  zoomInbtn.appendChild(zoomInImage);
  zoomOutbtn.appendChild(zoomOutImage);

  // 줌 감싸기
  map_zoomControl.appendChild(zoomInbtn);
  map_zoomControl.appendChild(zoomOutbtn);

  // 타입 감싸기
  map_typeControl.appendChild(roadmapbtn);
  map_typeControl.appendChild(skyviewbtn);

  // 폼 감싸기

  form.appendChild(input);
  form.appendChild(searchButton);
  form.appendChild(favoriteBtn);
  // searchDiv.appendChild(checkIdle);
  searchDiv.appendChild(form);
  menu_subwrap.appendChild(searchDiv);
  menu_wrap.appendChild(menu_subwrap);
  menu_wrap.appendChild(hr);
  menu_wrap.appendChild(placesList);

  // 컨트롤 감싸기

  this.space.appendChild(mapContainer);
  this.space.appendChild(menu_wrap);
  this.space.appendChild(map_typeControl);
  this.space.appendChild(map_zoomControl);

  var infowindow = new kakao.maps.InfoWindow({
    zIndex: 1,
  });

  // 지도를 표시할 div
  var mapOption = {
    center: new kakao.maps.LatLng(37.570549, 126.985305), // 지도의 중심좌표
    level: 4, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
  };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
  if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도

      var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        message = '<div style="padding:5px;">현재위치 부정확</div>'; // 인포윈도우에 표시될 내용입니다

      // 마커와 인포윈도우를 표시합니다
      showMarker(locPosition, message);
    });
  } else {
    // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
      message = "geolocation을 사용할수 없어요..";

    showMarker(locPosition, message);
  }

  // 지도에 마커와 인포윈도우를 표시하는 함수입니다
  function showMarker(locPosition, message) {
    var imageSrc = "home.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(40, 44), // 마커이미지의 크기입니다
      imageOption = {
        offset: new kakao.maps.Point(18, 44),
      }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var homeImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    // 마커를 생성합니다
    var Hmarker = new kakao.maps.Marker({
      map: map,
      position: locPosition,
      Image: homeImage,
    });

    Hmarker.normalImage = homeImage;

    var iwContent = message, // 인포윈도우에 표시할 내용
      iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });
    var Overlay = new kakao.maps.CustomOverlay({
      position: Hmarker.getPosition(),
      content:
        '<div class ="label"><span class="left"></span><span class="center">현재위치!</span><span class="right"></span></div>',
    });

    kakao.maps.event.addListener(Hmarker, "mouseover", function () {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      Overlay.setMap(map);
    });

    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);
  }

  // onclick = "setMapType('roadmap')"

  function setMapType(maptype) {
    var roadmapControl = document.getElementById("btnRoadmap");
    var skyviewControl = document.getElementById("btnSkyview");
    if (maptype === "roadmap") {
      map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
      roadmapControl.className = "selected_btn";
      skyviewControl.className = "btn";
    } else {
      map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
      skyviewControl.className = "selected_btn";
      roadmapControl.className = "btn";
    }
  }

  // function check(box) {
  //   if (box.checked) {
  //     kakao.maps.event.addListener(map, "idle", searchPlaces);
  //   } else {
  //     return;
  //   }
  // }

  function favorite() {
    var favo = document.getElementById("star");
    var mw = document.getElementById("menu_wrap");
    favo.classList.toggle("selected_btn");
    mw.classList.toggle("toggle");
  }

  // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
  function zoomIn() {
    map.setLevel(map.getLevel() - 1);
  }

  // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
  function zoomOut() {
    map.setLevel(map.getLevel() + 1);
  }

  // 장소 검색 객체를 생성합니다
  var ps = new kakao.maps.services.Places(map);

  // 키워드 검색 완료 시 호출되는 콜백함수 입니다
  function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
      for (var i = 0; i < data.length; i++) {
        displayMarker(data[i]);
      }
    }
  }
  kakao.maps.event.addListener(map, "idle", searchPlaces);

  function searchPlaces() {
    var keyword = document.getElementById("keyword").value;

    if (!keyword.replace(/^\s+|\s+$/g, "")) {
      alert("키워드를 입력해주세요!");
      return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch(keyword, placesSearchCB, {
      useMapBounds: true,
    });

    removeMarker();
  }

  // function searchPlaces() {
  //     ps.keywordSearch('카페', placesSearchCB,{useMapBounds:true});
  //     // ps.categorySearch('CE7', placesSearchCB, {
  //     //     useMapBounds: true
  //     // });
  // }
  var imageSrc1 = "coffee1.png", // 마커이미지의 주소입니다
    imageSize1 = new kakao.maps.Size(50, 55), // 마커이미지의 크기입니다
    imageOption1 = {
      offset: new kakao.maps.Point(25, 44),
    }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  var imageSrc2 = "favorite.png", // 마커이미지의 주소입니다
    imageSize2 = new kakao.maps.Size(60, 65), // 마커이미지의 크기입니다
    imageOption2 = {
      offset: new kakao.maps.Point(30, 54),
    };

  var imageSrc3 = "coffee1.png", // 마커이미지의 주소입니다
    imageSize3 = new kakao.maps.Size(70, 75), // 마커이미지의 크기입니다
    imageOption3 = {
      offset: new kakao.maps.Point(35, 64),
    }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  var normalImage = new kakao.maps.MarkerImage(
    imageSrc1,
    imageSize1,
    imageOption1
  );
  var clickImage = new kakao.maps.MarkerImage(
    imageSrc2,
    imageSize2,
    imageOption2
  );
  var overImage = new kakao.maps.MarkerImage(
    imageSrc3,
    imageSize3,
    imageOption3
  );

  // 마커를 담을 배열
  var markers = [];

  // 마커 지우기
  function removeMarker() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

  var selectedMarker = null;
  var selectedMarkerArr = [];

  // 지도에 마커를 표시하는 함수입니다
  function displayMarker(place) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
      map: map,
      image: normalImage,
      position: new kakao.maps.LatLng(place.y, place.x),
      clickable: true,
    });

    marker.normalImage = normalImage;

    markers.push(marker);

    var Overlay = new kakao.maps.CustomOverlay({
      position: marker.getPosition(),
      content:
        '<div class ="label"><span class="left"></span><span class="center">' +
        place.place_name +
        '</span><span class="right"></span></div>',
    });

    kakao.maps.event.addListener(marker, "mouseover", function () {
      // 마커- 마우스 오버시 인포윈도우 노출
      if (!selectedMarker || selectedMarker !== marker) {
        marker.setImage(overImage);
      }
      Overlay.setMap(map);
    });

    kakao.maps.event.addListener(marker, "click", function () {
      // 마커- 클릭시 이미지 변경
      console.log("aa");
      // marker.setImage(clickImage);

      if (!selectedMarker || selectedMarker !== marker) {
        // 클릭된 마커 객체가 null이 아니면
        // 클릭된 마커의 이미지를 기본 이미지로 변경하고
        !!selectedMarker && selectedMarker.setImage(selectedMarker.normalImage);

        // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
        // marker.setImage(clickImage);
      }
      selectedMarker = marker;
      selectedMarkerArr.push(selectedMarker);
      var el = document.createElement("li");

      var index = 0;
      itemStr =
        '<span class="markerbg"></span>' +
        '<div class="info">' +
        "   <h5>" +
        place.place_name +
        "</h5>";

      if (place.road_address_name) {
        itemStr +=
          "    <span>" +
          place.road_address_name +
          "</span>" +
          '   <span class="jibun gray">' +
          place.address_name +
          "</span>";
      } else {
        itemStr += "    <span>" + place.address_name + "</span>";
      }

      itemStr += '  <span class="tel">' + place.phone + "</span>" + "</div>";

      el.innerHTML = itemStr;
      el.setAttribute("class", "item " + place.id);
      // el.setAttribute("class", place.id);

      placesList.appendChild(el);
      el.onclick = function (event) {
        event.preventDefault();
        var win = window.open(
          "https://map.kakao.com/link/roadview/" + place.id,
          "_blank"
        );
        win.focus();
      };
    });

    kakao.maps.event.addListener(marker, "mouseout", function () {
      // 마커- 마우스 아웃시 인포윈도우 제거
      if (!selectedMarker || selectedMarker !== marker) {
        marker.setImage(normalImage);
      }
      Overlay.setMap(null);
    });
  }
};
