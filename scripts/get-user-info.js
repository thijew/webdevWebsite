// api documentation: https://whois.fdnd.nl/docs/

const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/222';
const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';

const urlMe = baseURL + endpointMe;
const urlSquad = baseURL + endpointSquad;

// List item where data is shown
const secondList = document.querySelector('li:nth-of-type(2)');

const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";



getMyName();
getMyImage();
getEverybody();
getMyBirthday();



function getMyName() {
    getData(urlMe).then(data => {
        console.log(data.data);

        const myData = data.data;
        let myName = myData.name;

        console.log(myName);


    });
}



function getMyImage() {
    getData(urlMe).then(data => {
        const myData = data.data;
        let myName = myData.name;
        let myImgSrc = myData.avatar;

        if (!myImgSrc) {
            myImgSrc = "images/placeholder1.svg";
        }

        const myImg = document.createElement("img");

        myImg.src = myImgSrc;
        myImg.alt = myName;

        mySection.append(myImg);
    });
}



// reserve webiste: https://youtu.be/dQw4w9WgXcQ?si=WHPj7XWqw3d-GXe7

function getEverybody() {
    getData(urlSquad).then(data => {
        // console.log(data.data);

        const persons = data.data;

        persons.forEach(person => {
            // console.log(person);

            let personName = person.name;
            let personImgSrc = person.avatar;
            let personWebsite = person.website;

            if (!personImgSrc) {
                let randomNr = Math.floor(Math.random() * 5) + 1;
                // console.log(randomNr);
                personImgSrc = `images/placeholder${randomNr}.svg`;
            }

            if (!personWebsite) {
                personWebsite = fallbackWebsite;
            }

            personHTML =
                `<article>
					<h3>${personName}</h3>
					<img src="${personImgSrc}" alt="${personName}">
					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
				</article>`;

            list.insertAdjacentHTML('beforeend', personHTML);
        });
    });
}



// normal

// function getMyBirthday() {
// 	getData(urlMe).then( data => {  
//     // console.log(data.data);

// 		const myData = data.data;
// 		let myBirthdate = myData.birthdate;

// 		// console.log(myBirdthdate);

// 		// birthdate is not present
// 		if (!myBirthdate) {
// 			// do nothing
// 		}
// 		// add birthday
// 		else {
// 			const myBirthday = document.createElement("time");
// 			myBirthday.textContent = myBirthdate;
// 			myBirthday.dateTime = myBirthdate;
// 			mySection.append(myBirthday);
// 		}
// 	});	
// }



// fancy

function getMyBirthday() {
    getData(urlMe).then(data => {
        // console.log(data.data);

        const myData = data.data;
        let myBirthdate = myData.birthdate;

        // console.log(myBirdthdate);

        // birthdate is not present
        if (!myBirthdate) {
            // do nothing
        }
        // convert birthdate to readable date
        else {
            const myBirthdateTimestamp = Date.parse(myBirthdate);
            const DDMMMMYYFormat = new Intl.DateTimeFormat('nl-nl', { dateStyle: 'long' });
            myBirthdateDDMMMMYY = DDMMMMYYFormat.format(myBirthdateTimestamp);

            const myBirthday = document.createElement("time");
            myBirthday.textContent = `🎉 ${myBirthdateDDMMMMYY}`;
            myBirthday.dateTime = myBirthdate;

            mySection.append(myBirthday);
        }
    });
}