const d = new Date();   

document.querySelector('#lastModified').innerHTML = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
