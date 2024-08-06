

function changeColor() {
    var colVal = document.getElementById("in_color").value;
    console.log(colVal)
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.color = colVal; 
    }); 
}

const rotated = document.getElementById("cd");
var rotation = 0;
const angle = 10;



  function spinCd() {
       rotation = (rotation + angle);
       rotated.style.transform = `rotate(${rotation}deg)`;
}
setInterval(spinCd, 1000);


function addSong() {
    var songPlace = document.createElement("li");
    var songName = document.getElementById("in_song").value;
    var newSong = document.createTextNode(`${songName}`);
    songPlace.appendChild(newSong);
    document.getElementById("lists").appendChild(songPlace);
}