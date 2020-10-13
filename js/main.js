
localStorage.clear();
const core = new Core();
let data = {};
const labels = document.getElementsByTagName('label');


document.querySelector('button').addEventListener('click', () => {

    const params = document.querySelectorAll('select, input');

    for (let i = params.length - 1; i >= 0; i--){
        if (params[i].tagName === 'SELECT'){
            data[labels[i].textContent] = params[i].options[params[i].selectedIndex].value;
        }
        else{
            data[labels[i].textContent] = params[i].value;
        }
    }
    document.querySelector('.modal').classList.add('hide');
    document.querySelector('.real-settings').classList.add('show');
    core.init(data.width, data.height, data);
    core.createField();
    core.generate()
}, false)


document.querySelector('.canvas-size').addEventListener('input', e => {
    if (e.target.id === "x1"){
        core.cvs.width = e.target.value;
        core.generate()
    } else{
        core.cvs.height = e.target.value;
        core.generate()
    }
}, false);




