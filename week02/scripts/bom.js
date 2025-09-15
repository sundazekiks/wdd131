let input = document.querySelector('#favchap');  // matches <input id="favchap">
let submit = document.getElementById('submitBtn'); 
let dlist = document.querySelector('#list');     // # because it's an ID
let div = document.querySelector('.lineAnimate');  // . because it's a class

submit.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const pTag  = document.createElement('p');

        li.textContent = input.value;
        deleteBtn.textContent = "❌";

        li.append(deleteBtn);
        dlist.append(li);

        deleteBtn.addEventListener('click', () => {
            dlist.removeChild(li);
        });



    }

    input.value = '';
});
