
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
    data['offset'] = [0,0]
    document.querySelector('.modal').classList.add('hide');
    document.querySelector('.real-settings').classList.add('show');
    core.init(data.width, data.height, data);
    document.querySelectorAll(' .canvas-size input, output').forEach(element => {
        switch (element.tagName) {
            case 'INPUT':
                element.setAttribute('value', (element.id === 'x1') ? core.w : core.h);
                break;
            case 'OUTPUT':
               element.innerText = (element.name === 'out_x') ? core.w : core.h;
               break;
        }


    })
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
document.querySelector('.user-size').addEventListener('input', e => {
    if (e.target.id === "x2"){
        core.cvs.width = core.cvs.width;
        core.data.offset[0] =  e.target.value;
        core.generate()
    } else{
        core.cvs.width = core.cvs.width;
        core.data.offset[1] =  e.target.value;
        core.generate()
    }
}, false);





