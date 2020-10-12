'use strict';
const core = new Core();

const labels = document.getElementsByTagName('label');


document.querySelector('button').addEventListener('click', () => {
    let data = {};
    const params = document.querySelectorAll('select, input');

    for (let i = params.length - 1; i >= 0; i--){
        if (params[i].tagName === 'SELECT'){
            data[labels[i].textContent] = params[i].options[params[i].selectedIndex].value;
        }
        else{
            data[labels[i].textContent] = params[i].value;
        }
    }
    document.querySelector('.modal').remove();
    console.log(data)
    core.init(data.width, data.height, data);
    core.generate()
}, false)



