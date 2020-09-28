let requestURL = "movies.json";
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == 200) {
    dataReportStatus(JSON.parse(request.responseText));
  }
};
request.open("GET", requestURL, true);
request.send();

function dataReportStatus(data) {
  for (let i = 0; i < data.movies.showing.length; i++) {
    var showsbox = document.getElementById("showtimes");
    var showBoxSt = document.createElement("div");
    showBoxSt.setAttribute("class", "movie-box");
    showBoxSt.setAttribute("id", "st-" + data.movies.showing[i].id);

    showBoxSt.innerHTML = `<div class="col"><img src="${data.movies.showing[i].poster}"></img><h2 id="showtime-${data.movies.showing[i].id}" style="font-size: 24px;">${data.movies.showing[i].title_en}</h2>
    <p style="color: #ff3d41; font-size: 12px;">Release date: ${data.movies.showing[i].releasedate}</p><button class="btn btn-warning" style="width:100%; color:#343434;">Check</div>`;
    showsbox.appendChild(showBoxSt);
  }
  for (let i = 0; i < data.movies.comingsoon.length; i++) {
    var showsbox = document.getElementById("comingsoons");
    var ShowBoxCm = document.createElement("div");
    ShowBoxCm.setAttribute("class", "movie-box");
    ShowBoxCm.setAttribute("id", "cm-" + data.movies.comingsoon[i].id);

    ShowBoxCm.innerHTML = `<div class="col"><img src="${data.movies.comingsoon[i].poster}"></img><h2 id="comingsoon-${data.movies.comingsoon[i].id}" style="font-size: 24px;">${data.movies.comingsoon[i].title_en}</h2>
    <p style="color: #ff3d41; font-size: 12px;">Release date: ${data.movies.comingsoon[i].releasedate}</p><button class="btn btn-warning" style="width:100%; color:#343434;">Check</div>`;
    showsbox.appendChild(ShowBoxCm);
  }
}
function changeLang(lang) {
  $.getJSON("movies.json", function (data) {
    for (let i = 0; i < data.movies.showing.length; i++) {
      if (lang == "th") {
        document.getElementById("textShowtimetxt").innerHTML = "ตารางหนัง";
        document.getElementById(
          "showtime-" + data.movies.showing[i].id
        ).innerHTML = data.movies.showing[i].title_th;
      } else {
        document.getElementById("textShowtimetxt").innerHTML = "Show Time";
        document.getElementById(
          "showtime-" + data.movies.showing[i].id
        ).innerHTML = data.movies.showing[i].title_en;
      }
    }
    for (let i = 0; i < data.movies.comingsoon.length; i++) {
      if (lang == "th") {
        document.getElementById("textComingSoontxt").innerHTML = "เร็ว ๆ นี้";
        document.getElementById(
          "comingsoon-" + data.movies.comingsoon[i].id
        ).innerHTML = data.movies.comingsoon[i].title_th;
      } else {
        document.getElementById("textComingSoontxt").innerHTML = "Coming Soon";
        document.getElementById(
          "comingsoon-" + data.movies.comingsoon[i].id
        ).innerHTML = data.movies.comingsoon[i].title_en;
      }
    }
  });
}

function categoty(cate) {
  $.getJSON("movies.json", function (data) {
    cate = [cate];
    for (let i = 0; i < data.movies.showing.length; i++) {
      var movieBoxSt = document.getElementById("st-" + data.movies.showing[i].id).id;
      if(cate == "All") {
        $("#"+movieBoxSt).fadeIn();
      }
      data.movies.showing[i].categoty.forEach(function (elementST) {
        if (elementST == cate) {
          $("#"+movieBoxSt).fadeOut();
        }
        else if (elementST != cate) {
          $("#"+movieBoxSt).fadeIn();
        }
      });
    }

    for (let i = 0; i < data.movies.comingsoon.length; i++) {
      var movieBoxCm = document.getElementById("cm-" + data.movies.comingsoon[i].id).id;
      if(cate == "All") {
        $("#"+movieBoxCm).show();
      }
      data.movies.comingsoon[i].categoty.forEach(function (elementCM) {
        if (cate == elementCM) {
          $("#"+movieBoxCm).hide();
        }
        else if (cate != elementCM) {
          $("#"+movieBoxCm).show();
        }
      });
    }
  });
}
