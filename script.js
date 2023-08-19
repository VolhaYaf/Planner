const input = document.querySelector ('.input');
const btn = document.querySelector ('.btn');
const addedValue = document.querySelector ('.addedValue');

btn.addEventListener ('click', ()=>{
    const item = document.createElement ('li');
    item.innerText = input.value.toLowerCase();
    if (input.value.length === 0) {
        return false;
        }
    addedValue.appendChild(item);
    item.classList.add('added');

    input.value = '';


    item.addEventListener('click', ()=>{
        item.classList.add('completed');
    })

    item.addEventListener('dblclick', ()=>{
    addedValue.removeChild(item);
    })
}
)


let text = 'What are we doing today?';
let i = 0;
let speed = 100;

function type() {
    if(i < text.length){
        document.querySelector('#question').textContent += text.charAt(i);
        i++;
        setTimeout (type, speed);
    }
}

type();