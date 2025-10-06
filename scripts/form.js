let prodNameSection = document.getElementById('prodName');
let lastModified = document.getElementById('lastModified');
let d = new Date();

lastModified.innerHTML = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;





const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const loadSelectValues = () => {
    products.map(item => {
        let option = document.createElement('option');

        option.value = item.id;
        option.textContent = item.name;
        prodNameSection.appendChild(option);
    });
}

