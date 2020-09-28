let requestURL = 'info.json'
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200)
    {
        dataReportStatus(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

function dataReportStatus(data) {
    for (i = 0; i < data.length; i++) {
        document.write(data[i].ID + "&nbsp;<b>" + data[i].Firstname + 
        "&nbsp;" + data[i].Lastname + "</b>&nbsp;(" + data[i].Gender + ")&nbsp;is a" + 
        "&nbsp;" + data[i].Position + ",&nbsp;" + data[i].Address + "<br>");
    }
}