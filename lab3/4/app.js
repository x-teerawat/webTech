var img1 = "http://10.0.15.12/lab3/images/3.png"
var img2 = "http://10.0.15.12/lab3/images/1.png"
var img3 = "http://10.0.15.12/lab3/images/4.png"
var img4 = "http://10.0.15.12/lab3/images/2.png"

function switchImg() {
    document.getElementById('img1').src = img1;
    document.getElementById('img2').src = img2;
    document.getElementById('img3').src = img3;
    document.getElementById('img4').src = img4;
    var a = img1;
    img1 = img3;
    img3 = img4;
    img4 = img2;
    img2 = a;
}     