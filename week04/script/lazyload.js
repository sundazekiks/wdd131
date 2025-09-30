const d = new Date();

document.querySelector('#lastModified').innerHTML = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;