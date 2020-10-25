'use strict';
class Core {
    w;h;data;cvs;ctx;
    init() {
        this.data = this.loadData();
        this.w = this.data.width;
        this.h = this.data.height;
    }
    random(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }
    createField(){
        this.cvs = document.createElement('canvas');
        this.cvs.width = this.w;
        this.cvs.height = this.h;
        this.ctx = this.cvs.getContext('2d');
        document.body.appendChild(this.cvs);
    }
    loadData(fields = ['width', 'height', 'scale', 'offset', 'body', 'background', ]){
        const default_properties = {
            offset: [0, 0],
            body: 'random',
            background: 'random_gradient',
            height: 250,
            width: 250,
            scale: 1.5,
            h: 250,
            w: 250
        }
            const data = {};

            fields.forEach(
                property => {
                    let value;
                    try{
                        value = JSON.parse(localStorage.getItem(property));
                    } catch (e) {
                        value = localStorage.getItem(property);
                    }
                    data[property] = (value === true) ? value : default_properties[property];
                });
        return data;
    }
    generate(){
        core.cvs.width = core.cvs.width;
        Primitives.bg(this.data.background);
        Primitives.body(this.data.offset);
    }
    reset(){
        this.data.offset = [0,0];
        this.cvs.width = core.w;
        this.cvs.height = core.h;
        this.data.scale = 1.5;
        this.generate();
    }
    gradientPrepare(){
        return [
            [this.random(0,256), this.random(0,256), this.random(0,256)],
            [this.random(0,256), this.random(0,256), this.random(0,256)],
            [this.random(0,256), this.random(0,256), this.random(0,256)]
        ]
    }
    on(selector, type, callback){
        document.querySelector(selector).addEventListener(type, callback, false);
    }
    regenerate(type){
        switch (type) {
            case 'background':
                localStorage.removeItem('background');
                core.cvs.width = core.cvs.width;
                core.generate();
                break;
            case 'body':
                localStorage.removeItem('body');
                core.cvs.width = core.cvs.width;
                core.generate();
                break;
        }
    }
    save(){
        localStorage.setItem('offset', JSON.stringify(this.data['offset']));
        localStorage.setItem('width', this.cvs.width);
        localStorage.setItem('height', this.cvs.height);
        localStorage.setItem('height', this.cvs.height);
        localStorage.setItem('scale', this.data.scale);

        }
    saveFile() {
        const link = document.createElement('a');
        link.setAttribute('href', this.cvs.toDataURL('image/png'));
        link.setAttribute('download', 'image.png');
        link.click();
        return false;
    }
}