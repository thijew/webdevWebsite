// API https://www.theaudiodb.com/free_music_api?ref=freepublicapis.com

const musicURL = 'https://www.theaudiodb.com/api/v1/json/2/artist.php?i=';

const nirvanaID = '111319';

const urlNirvana = musicURL + nirvanaID;

const fifthList = document.querySelector('li:nth-of-type(5)');

getMusicData(urlNirvana).then(data => {
    console.log(data);
    const musicData = data.artists[0];
    // const musicName = musicData.strArtist;
    // const musicGenre = musicData.strGenre;
    // const musicLabel = musicData.strLabel;
    const musicFormed = musicData.intFormedYear;
    const musicCountry = musicData.strCountry;
    const musicWebsite = musicData.strWebsite;
    const musicLogo = musicData.strArtistThumb;
    const musicLogoWide = musicData.strArtistWideThumb;

    // Makkelijkere manier van vars aanmaken en data meegeven aan html
    let { strArtist, strGenre, strLabel } = musicData;


    fifthList.innerHTML = `
    <img src="${musicLogo}" alt="${strArtist}">
    <article class="clicked>
    <h2>${strArtist}</h2>
    <p>Genre: ${strGenre}</p>
    <p>Label: ${strLabel}</p>
    <p>Formed: ${musicFormed}</p>
    <p>Country: ${musicCountry}</p>
    <a href="${musicWebsite}">Website</a>
    </article>
    `;
});

//     const imageElement = document.querySelector('li:nth-of-type(5) img');
//     if (window.matchMedia("(orientation: landscape)").matches) {
//         imageElement.src = "${musicLogoWide}" // Image for horizontal layout
//     } else {
//         imageElement.src = "${musicLogo}"; // Image for vertical layout
//     }
// });











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