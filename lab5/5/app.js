let requestURL = "music.json";
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == 200) {
    dataReportStatus(JSON.parse(request.responseText));
  }
};
request.open("GET", requestURL, true);
request.send();

function dataReportStatus(data) {
  for (let i = 0; i < data.length; i++) {
    var playlsbox = document.getElementById("plsg");
    var bxmain = document.createElement("div");
    bxmain.setAttribute("class", "playlist-song");
    bxmain.setAttribute("id", data[i].ID);
    if (i % 6 == 0) {
      playlsbox.appendChild(document.createElement("br"))
    }
    bxmain.innerHTML = `<img src="${data[i].image}"></img><h2 style="font-size: 18px;">${data[i].song}</h2>
    <p style="color: #ff3d41; font-size: 12px;">Artist: ${data[i].artist}</p><p style="opacity:.6;font-size: 12px;">Details: ${data[i].details}</p>`;
    playlsbox.appendChild(bxmain);
  }
}
