'use strict';

const core = new Core();
core.init();
core.createField();
core.generate()

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
        core.data.offset[0] =  e.target.value;
        core.generate()
    } else{
        core.data.offset[1] =  e.target.value;
        core.generate()
    }
});
core.on('.user-size', 'input', e => {
        core.data.scale =  e.target.value;
        core.generate()
});
core.on('#background', 'change', e => {
   localStorage.removeItem('background');
   core.data.background = e.target.value;
   core.generate();

});
core.on('#_body', 'change', e => {
   localStorage.removeItem('body');
   core.data.body = e.target.value;
   core.generate();
});