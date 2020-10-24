'use strict';
const core = new Core();
const data = {};
const labels = document.getElementsByTagName('label');

document.querySelector('button').addEventListener('click', () => {

    const params = document.querySelectorAll('.settings select, .settings input');

    for (let i = params.length - 1; i >= 0; i--){
        if (params[i].tagName === 'SELECT'){
            data[labels[i].textContent] = params[i].options[params[i].selectedIndex].value;
        }
        else{
            data[labels[i].textContent] = params[i].value;
        }
    }
    data['offset'] = [0,0];
    document.querySelector('.modal').classList.add('hide');
    document.querySelector('.real-settings').classList.add('show');
    core.init(data.width, data.height, data);
    document.querySelectorAll(' .canvas-size input,.canvas-size output').forEach(element => {
        switch (element.tagName) {
            case 'INPUT':
                element.setAttribute('value', (element.id === 'x1') ? core.w : core.h);
                break;
            case 'OUTPUT':
                element.innerText = (element.name === 'out_x') ? core.w : core.h;
                break;
        }
    });
    core.createField();
    core.generate()
}, false)

core.on('.canvas-size','input', e => {
    if (e.target.id === "x1"){
        core.cvs.width = e.target.value;
        core.generate()
    } else{
        core.cvs.height = e.target.value;
        core.generate()
    }
});
core.on('.user-offset', 'input', e => {
    if (e.target.id === "x2"){
        core.cvs.width = core.cvs.width;
        core.data.offset[0] =  e.target.value;
        core.generate()
    } else{
        core.cvs.width = core.cvs.width;
        core.data.offset[1] =  e.target.value;
        core.generate()
    }
});
core.on('.user-size', 'input', e => {
        core.cvs.width = core.cvs.width;
        Primitives.scale_coefficient =  e.target.value;
        core.generate()

});
core.on('#background', 'change', e => {
   core.cvs.width = core.cvs.width;
   localStorage.removeItem('bg_color');
   core.data.background = e.target.value;
   core.generate();

});
core.on('#_body', 'change', e => {
   core.cvs.width = core.cvs.width;
   localStorage.removeItem('body_color');
   core.data.body = e.target.value;
   core.generate();
});