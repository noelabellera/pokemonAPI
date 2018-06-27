function numbers(num){
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
        .then(function (response) { return response.json(); })
        .then(function (json) {
            console.log(num)
            console.log(json)
            document.getElementById("name").innerHTML = json.name;
        });

    }

document.getElementById("random")
.addEventListener('click', generateRandNum);



function generateRandNum() {
    numbers(Math.floor(Math.random() * 300));
}
