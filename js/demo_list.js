var demolist = ['..\\audio\\Six String Itch.mp3', '..\\audio\\Sweet Summer Days.mp3', '..\\audio\\The Saint.mp3', '..\\audio\\Vicious.mp3'];

var createdDivs = '';

demolist.forEach(demo => {
    createdDivs += demo;
});


document.getElementById("demos").innerHTML = createdDivs;