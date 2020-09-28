var question = 0;

function select(num) {
    question = num
}

function reply() {
    let message = document.getElementById("input").value;
    if (message.length == 0) {
        alert("This message is empty.")
        return false;
    }
    if (question == 0) {
        alert("You don't select a question");
        return false;
    }
    document.getElementById("rep" + question).innerHTML += '<li><h6>' + message + '</h6></li>'
    
}