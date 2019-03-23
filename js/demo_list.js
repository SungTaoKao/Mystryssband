var demolist = ['Six String Itch.mp3',
                'Sweet Summer Days.mp3',
                'The Saint.mp3',
                'Vicious.mp3'];
var demodesc = [''];

var createdDivs = '';
var count = 1;

demolist.forEach(demo => {
    
    createdDivs += `<div class="container"><div class="row"><div class="col-lg-8 mx-auto"><button class="btn btn-info" data-toggle="collapse" data-target="#d${count}">Audio test element<br>Click Me!</button></div></div><div class="row collapse" id="d${count}"><div class="col-lg-8 mx-auto"><audio src="audio\\${demo}" controls/></div><div class="col-lg-8 mx-auto"><p>description</p></div></div></div>`;
    
    count ++;
});


document.getElementById("song_list").innerHTML = createdDivs;