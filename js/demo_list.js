var demolist = [//'Six String Itch',
                'Sweet Summer Days',
                'The Saint',
                'Vicious'];
var demodesc = [''];

var createdDivs = '';
var count = 1;

demolist.forEach(demo => {
    
    createdDivs += `<div class="container"><div class="row"><div class="col-lg-8 mx-auto"><button class="btn btn-info" data-toggle="collapse" data-target="#d${count}">${demo}</button></div></div><div class="row collapse" id="d${count}"><div class="col-lg-8 mx-auto"><audio src="audio\\${demo}.mp3" controls controlsList="nodownload"/></div><div class="col-lg-8 mx-auto"><p></p></div></div></div><br><br><br>`;
    
    count ++;
});


document.getElementById("song_list").innerHTML = createdDivs;