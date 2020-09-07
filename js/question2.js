const resultsContainer = document.querySelector(".results");

const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

async function getGames() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        const playGames = json.results;

        playGames.forEach(function (playGame) {
            resultsContainer.innerHTML += `<a href="details.html?id=${playGame.id}" class="card">
                                                <h4 class="name">${playGame.name}</h4> 
                                                <div class="image" style="background-image: url(${playGame.background_image});"></div>
                                                <div class="details">
                                                <h4 class="name">${playGame.released}</h4>                                                                                                                                                           
                                                </div>
                                            </a>`;
        });

    } catch (error) {
        console.log(error);

    }

}

getGames(url);