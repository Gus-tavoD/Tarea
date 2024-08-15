

function changeColor() {
    var colVal = document.getElementById("in_color").value;
    console.log(colVal)
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.color = colVal; 
    }); 
    
    var backColor = document.getElementsByClassName("bc");
    for(var i = 0; i < backColor.length; i++){
        backColor[i].style.backgroundColor = colVal;
    }
    var backColorTwo = document.getElementsByClassName("bc-2");
    for(var i = 0; i < backColorTwo.length; i++){
        backColorTwo[i].style.backgroundColor = colVal;
    }
}

function changeColorOne() {
    var colVal = 'rgb(204, 163, 220)';
    console.log(colVal)
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.color = colVal; 
    }); 
    
    var backColor = document.getElementsByClassName("bc");
    for(var i = 0; i < backColor.length; i++){
        backColor[i].style.backgroundColor = colVal;
    }
    var backColorTwo = document.getElementsByClassName("bc-2");
    for(var i = 0; i < backColorTwo.length; i++){
        backColorTwo[i].style.backgroundColor = colVal;
    }
}

function changeColorTwo() {
    var colVal = '#89CC04';
    console.log(colVal)
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.color = colVal; 
    }); 
    
    var backColor = document.getElementsByClassName("bc");
    for(var i = 0; i < backColor.length; i++){
        backColor[i].style.backgroundColor = colVal;
    }
    var backColorTwo = document.getElementsByClassName("bc-2");
    for(var i = 0; i < backColorTwo.length; i++){
        backColorTwo[i].style.backgroundColor = colVal;
    }
}

function changeColorThree() {
    var colVal = 'rgb(34, 154, 215)';
    console.log(colVal)
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.color = colVal; 
    }); 
    
    var backColor = document.getElementsByClassName("bc");
    for(var i = 0; i < backColor.length; i++){
        backColor[i].style.backgroundColor = colVal;
    }
    var backColorTwo = document.getElementsByClassName("bc-2");
    for(var i = 0; i < backColorTwo.length; i++){
        backColorTwo[i].style.backgroundColor = colVal;
    }
}

const rotated = document.getElementById("cdone");
var rotation = 0;
const angle = 20;

  // function spinCd() {
  //     rotation = (rotation + angle);
  //     rotated.style.transform = `rotate(${rotation}deg)`;
  //     setInterval(spinCd, 500);
  //  }



function addSong() {
    var songPlace = document.createElement("li");
    var songName = document.getElementById("in_song").value;
    var newSong = document.createTextNode(`${songName}`);
    songPlace.appendChild(newSong);
    document.getElementById("lists").appendChild(songPlace);
    document.getElementById("main_text").innerHTML = songName;
}

var colBoton = document.getElementById("in_color");
colBoton.addEventListener("keypress", function(event) {
    if (event.key==="Enter") {
        event.preventDefault();
        document.getElementById("color_btn").click();
    }
});

var songBoton = document.getElementById("in_song");
songBoton.addEventListener("keypress", function(event) {
    if (event.key==="Enter") {
        event.preventDefault();
        document.getElementById("song_btn").click();
    }
});