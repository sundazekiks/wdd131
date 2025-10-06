let input = document.querySelector('#favchap');  
let submit = document.getElementById('submitBtn'); 
let dlist = document.querySelector('#list');     
let div = document.querySelector('.lineAnimate');  


const setChapterList = () => {
    localStorage.setItem('myFavBomList', JSON.stringify(chaptersArray));
}

const getChapterList = () => {
    return JSON.parse(localStorage.getItem('myFavBomList')) || [];
}


let chaptersArray = getChapterList() || [];

const displayList = (item) => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    li.textContent = item;
    deleteBtn.textContent = "❌";
    li.append(deleteBtn);
    dlist.append(li);

    deleteBtn.addEventListener('click', () => {
        dlist.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


const deleteChapter = (chapter) => {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}



// --- add new chapter ---
submit.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        let newChapter = input.value.trim();

        displayList(newChapter);
        chaptersArray.push(newChapter);
        setChapterList();

        input.value = '';
        input.focus();
    }
});
