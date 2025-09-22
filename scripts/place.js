const d = new Date();   

document.querySelector('#lastModified').innerHTML =
    `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;

// Convert innerHTML values to numbers
const temp = Number(document.querySelector('#temp').innerHTML);
const wind = Number(document.querySelector('#wind').innerHTML);

// Define function before using it
function calculateWindChill(temp, wind) {
    if (temp > 50 || wind < 3) {
        // Formula is only valid if temp ≤ 50°F and wind ≥ 3 mph
        return temp;
    }
    let windChillCal = (
        35.74 +
        (0.6215 * temp) -
        (35.75 * Math.pow(wind, 0.16)) +
        (0.4275 * temp * Math.pow(wind, 0.16))
    ).toFixed(2);

    return Number(windChillCal); // returns as a number
}

// Call function after definition
document.querySelector('#windChill').innerHTML = calculateWindChill(temp, wind);

console.log(calculateWindChill(temp, wind));
