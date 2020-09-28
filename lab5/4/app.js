let requestURL = "countries.json";
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == 200) {
    dataReportStatus(JSON.parse(request.responseText));
  }
};
request.open("GET", requestURL, true);
request.send();

function dataReportStatus(data) {
  var contrieBox = document.getElementById("contries");
  for (let i = 0; i < data.length; i++) {
    var bors = "";
    data[i].borders.forEach(function (element) {
      bors += element + " ";
    });

    var contrie = document.createElement("div");
    var latlng = data[i].latlng[0] + " " + data[i].latlng[1];

    contrie.setAttribute("class", "mb-5");
    contrie.style = "text-align: left;";
    contrie.innerHTML = `<div class="row"><div class="col-4">Name : <strong>${data[i].name}</strong><br>Capital : ${data[i].capital}<br>\
    Poputiton : ${data[i].population}<br>Region : ${data[i].region}<br>\
    Location : ${latlng}<br><p style="display:inline-block">Borders : ${bors}</p></div>\
    <div class="col-8"><img src="${data[i].flag}" style="width:30%"></div></div>`;
    contrieBox.appendChild(contrie);
  }
}
