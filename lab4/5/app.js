let data = ['<div class="row"><div class="card w-75"><div class="row no-glutters"><div class="col-md-3"><img src="1.jpg" class="card-img"></div><div class="col-md-9"><div class="card-body"><h5 id="song_1">ABC</h5><strong><p class="text-dark" id="artist_1"> <i>BCA</i> </p></div></div></div></div></div><br>',
'<div class="row"><div class="card w-75"><div class="row no-glutters"><div class="col-md-3"><img src="2.jpg" class="card-img"></div><div class="col-md-9"><div class="card-body"><h5 id="song_2">ABC</h5><strong><p class="text-dark" id="artist_2"> <i>BCA</i> </p></strong></div></div></div></div></div><br>',
'<div class="row"><div class="card w-75"><div class="row no-glutters"><div class="col-md-3"><img src="3.jpg" class="card-img"></div><div class="col-md-9"><div class="card-body"><h5 id="song_3">ABC</h5><strong><p class="text-dark" id="artist_3"> <i>BCA</i> </p></strong></div></div></div></div></div><br>'
]
let checker = [false, false, false];

function selected(num) {
    num = parseInt(num);
    if (checker[num] == false) {
        document.getElementById('show').innerHTML += data[num]
        console.log(checker[num]);
        checker[num] = true;
    } else {
        alert("This song has been selected.")
    }
}