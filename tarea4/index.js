var newList = []

async function fetchPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error("Could not fetch post");
        }
        const data = await response.json();
        var dataValues = data.length;
        var randomNumber = Math.floor(Math.random()*dataValues)

        //console.log(dataValues);
        //console.log(randomNumber);
        const userID = data[randomNumber]["userId"];
        const postID = data[randomNumber]["id"];
        const postTitle = data[randomNumber]["title"];
        const postBody =  data[randomNumber]["body"];
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        .then((response) => response.json())
        .then((json) => newList.push(json));
        fetchPokemon()
        document.getElementById("title").innerHTML = `Title: ${postTitle}`;
        document.getElementById("userID").innerHTML = `Posted by: ${userID}`;
        document.getElementById("id").innerHTML =  `Post number: ${postID}`;
        document.getElementById("body").innerHTML = `Post: ${postBody}`;
        console.log(newList);
        console.log(postID);

        if (postID % 10 == 0) {
            postPost()
        }
    }  
    catch(error){
        console.error(error);
    }   
}

async function fetchPokemon(){
    try{
        var randomNumber = Math.floor(Math.random()*1000)
        var pokemonName = randomNumber;
        var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Could not fecth resorse");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

async function postPost () {
    var newTitle = prompt("What's the title?")
    var bodyText = prompt("What do you want to day?")
    //console.log(newTitle);
    //console.log(bodyText);
    const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    var dataValues = data.length;
    //console.log(dataValues);
    const responseTwo =  await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'Post',
        body: JSON.stringify({
            title: newTitle,
            body: bodyText,
            userId: 233,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((responseTwo) => responseTwo.json())
    .then((json)=> newList.push(json));
    //.then((json)=> console.log(json));

        document.getElementById("title").innerHTML = `Title: ${newTitle}`;
        document.getElementById("userID").innerHTML = "Posted by: 223";
        document.getElementById("id").innerHTML =  `Post number: 101`;
        document.getElementById("body").innerHTML = `Post: ${bodyText}`;
        console.log(newList)
    
}

setInterval(fetchPost, 5000)