
const time = new Date();

document.getElementById('currentyear').innerHTML = `${time.getFullYear()}`;

document.getElementById('lastModified').innerHTML = `${document.lastModified}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bakersfield California Temple",
    location: "12310 Stockdale HighwayBakersfield, California  93314 United States",
    dedicated: "To be Announced",
    area: "13.07 acres",
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bakersfield-california-temple/bakersfield-california-temple-44187-main.jpg"
  },
  {
    templeName: "Bacolod Philippines Temple",
    location: "Bacolod Airport Access Road Bacolod Philippines",
    dedicated: "2021,  December, 11",
    area: "12.3 acres",
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-24089-main.jpg"
  },
  
];

const mainHero = document.querySelector('#main-hero');
const Home = document.querySelector('#Home');

function clickedHome(){
  render(temples);
}

function renderOnLoad(){
  render(temples);
}

function clickedLarge(){
  const largeTemples = temples.filter(temple => temple.area > 90000)
  render(largeTemples);
}

function clickedSmall(){
  const smallTemples = temples.filter(temple => temple.area < 10000)
  render(smallTemples);

  console.log("It worked");
}


function clickedOld(){
  const oldTemple = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900)

  render(oldTemple);
}

function clickedNew(){
  const newTemple = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);

  render(newTemple);
}

const render = (filteredTemple) => {
    const h1Elem = document.createElement('h1');
    h1Elem.textContent = "Temples";
    h1Elem.setAttribute('id', 'title');
    mainHero.innerHTML = "";
    mainHero.appendChild(h1Elem);
    filteredTemple.map((temple) => {
        console.log(temple.templeName);
        const divElem = document.createElement('div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const img = document.createElement('img');

        divElem.classList.add("temple-card");
        h1.classList.add("templeName");
        h1.textContent = `${temple.templeName}`;
        divElem.appendChild(h1);


        p.classList.add('p-tags');
        p1.classList.add('p-tags');
        p2.classList.add('p-tags');
        p.textContent = `Location: ${temple.location}`
        p1.textContent = `Dedicated: ${temple.dedicated}`;
        p2.textContent = `Area: ${temple.area}`;
        img.classList.add('templeImage');
        img.src = temple.imageUrl;
        img.setAttribute('loading', 'lazy');
        divElem.appendChild(p);
        divElem.appendChild(p1);
        divElem.appendChild(p2);
        divElem.appendChild(img);

        
        mainHero.appendChild(divElem);
        
    })
}







