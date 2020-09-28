let requestURL = "questionAnswerData.json";
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == 200) {
    dataReportStatus(JSON.parse(request.responseText));
  }
};
request.open("GET", requestURL, true);
request.send();


function dataReportStatus(data) {
  var quixBox = document.getElementById("question")
  
  for (let i = 0; i < data.length; i++) {
    var quiz = document.createElement("div")
    quiz.style = "text-align:left"
    quiz.setAttribute("class", "mb-5 ")
    quiz.setAttribute("id", i)
    quiz.innerHTML = `<h5>${i+1}) ${data[i].question}</h5><br>\
  <input type="radio" onchange="checkCorrect('a', '1', ${i})" name="answers${i}">
  <label id="answers${i}-1" for="${data[i].answers.a}">${data[i].answers.a}</label><br>\
  <input type="radio" onchange="checkCorrect('b', '2', ${i})" name="answers${i}">
  <label id="answers${i}-2" for="${data[i].answers.b}">${data[i].answers.b}</label><br>\
  <input type="radio" onchange="checkCorrect('c', '3', ${i})" name="answers${i}">
  <label id="answers${i}-3" for="${data[i].answers.c}">${data[i].answers.c}</label><br>`
    quixBox.appendChild(quiz)
  }
}

function checkCorrect(select, val, quiz){
  document.getElementById("answers0-2").style = "color:green"
  $.getJSON("questionAnswerData.json", function(correct) {
    var itCorrect = document.getElementById("answers"+quiz+"-"+val);
    if(select == correct[quiz].answers.correct){
      document.getElementById("answers"+quiz+"-"+val).style = "color:green"
    }
    else{
      document.getElementById("answers"+quiz+"-"+val).style = "color:red"
    }
    
});
}