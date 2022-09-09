alert("ADD TASKS ON A DAILY BASIS ONCE COMPLETED DELETE AND ADD MORE");

const input = document.querySelector('input');
const btn = document.querySelector('.addtask > button');

btn.addEventListener('click', addList);


function addList(e){
    const notCompleted = document.querySelector('.notcompleted');
    const Completed = document.querySelector('.completed');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<li class="fa fa-check"><li>';
    delBtn.innerHTML= '<li class="fa fa-trash"></li>';

    if(input.value !== ''){
        newLi.textContent= input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

checkBtn.addEventListener('click', function() {
    const parent = this.parentNode;
    parent.remove();
    Completed.appendChild(parent);
    checkBtn.style.display = 'none';

})
delBtn.addEventListener('click', function() {
    const parent = this.parentNode;
    parent.remove();
    

})

}

