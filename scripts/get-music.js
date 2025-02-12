// API https://www.theaudiodb.com/free_music_api?ref=freepublicapis.com

const musicURL = 'https://www.theaudiodb.com/api/v1/json/2/artist.php?i='

const nirvanaID = '111319'

const urlNirvana = musicURL + nirvanaID;

const fifthList = document.querySelector('li:nth-of-type(5)');

getMusicData(urlNirvana).then(data => {
    console.log(data);
    const musicData = data.artists[0];
    const musicName = musicData.strArtist;
    const musicGenre = musicData.strGenre;
    const musicLabel = musicData.strLabel;
    const musicFormed = musicData.intFormedYear;
    const musicCountry = musicData.strCountry;
    const musicWebsite = musicData.strWebsite;
    const musicLogo = musicData.strArtistThumb;


    fifthList.innerHTML = `
    <img src="${musicLogo}" alt="${musicName}">
    <article>
    <h2>${musicName}</h2>
    <p>Genre: ${musicGenre}</p>
    <p>Label: ${musicLabel}</p>
    <p>Formed: ${musicFormed}</p>
    <p>Country: ${musicCountry}</p>
    <a href="${musicWebsite}">Website</a>
    </article>
    `;
});








async /*9*/ function getMusicData(URL) {
    return ( //8
        fetch(URL) //1
            .then( //2
                response /*3*/ => response.json() //4
            )
            .then( //5
                jsonData /*6*/ => { return jsonData } //7
            )
    );
}