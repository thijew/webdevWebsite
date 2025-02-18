// api documentation: https://whois.fdnd.nl/docs/

const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/222';
const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';

const urlMe = baseURL + endpointMe;
const urlSquad = baseURL + endpointSquad;

// List item where data is shown
const secondList = document.querySelector('li:nth-of-type(2)');

// list item with img
let userImg = document.querySelector('li:nth-of-type(4) img');

const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";



getMyName();
getMyImage();
getMyBirthday();

getData(urlMe).then(data222 => {


    let avatar = data222.data.avatar;
    console.log(avatar);

    let myName = data222.data.name;
    let img = document.createElement('img');

    img.src = avatar;
    img.alt = myName;

    console.log(img);



});

function getMyName() {
    getData(urlMe).then(data => {
        console.log(data.data);

        const myData = data.data;
        let myName = myData.name;

        if (!myName) {
            myName = "Name not found";
        }
        const showName = document.querySelector('li:nth-of-type(2) h1');

        showName.textContent = myName;

        console.log(showName);
    });
}



function getMyImage() {

    getData(urlMe).then(data => {
        const myData = data.data;
        let myName = myData.name;
        let myImgSrc = myData.avatar;

        if (!myImgSrc) {
            myImgSrc = "imgs/placeholder.png";
        }
        const myImg = userImg;

        myImg.src = myImgSrc;
        myImg.alt = myName;

    });
}

// fancy

function getMyBirthday() {
    getData(urlMe).then(data => {
        console.log(data.data);

        const myData = data.data;
        let myBirthdate = myData.birthdate;

        console.log(myBirthdate);

        // birthdate is not present
        if (!myBirthdate) {
            console.log("No birthdate found");
        }
        // convert birthdate to readable date
        else {
            const myBirthdateTimestamp = Date.parse(myBirthdate);
            const DDMMMMYYFormat = new Intl.DateTimeFormat('nl-nl', { dateStyle: 'long' });
            myBirthdateDDMMMMYY = DDMMMMYYFormat.format(myBirthdateTimestamp);

            const myBirthday = document.createElement("time");
            myBirthday.textContent = `🎉 ${myBirthdateDDMMMMYY}`;
            myBirthday.dateTime = myBirthdate;

            // mySection.append(myBirthday);

            console.log(myBirthday);
        }
    });
}

async /*9*/ function getData(URL) {
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