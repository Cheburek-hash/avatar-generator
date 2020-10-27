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
            body: {type:'random', data: null},
            background: {type:'random_gradient', data: null},
            height: 250,
            width: 250,
            scale: 1.5,
            h: 250,
            w: 250
        }
            const data = {};

            fields.forEach(
                property => {
                  let value = localStorage.getItem(property);

                   data[property] = (value !== null) ? JSON.parse(value) : default_properties[property];
                });
        return data;
    }
    generate(){
        core.cvs.width = core.cvs.width;
        Primitives.bg();
        Primitives.body();
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
                core.data.background.data = null;
                core.generate();
                break;
            case 'body':
                core.data.body.data = null;
                core.generate();
                break;
        }
    }
    save(){
       for (let property in this.data){
            localStorage.setItem(property, JSON.stringify(this.data[property]))
       }
        localStorage.setItem('width', core.cvs.width);
        localStorage.setItem('height', core.cvs.height);
    }
    saveFile() {
        const link = document.createElement('a');
        link.setAttribute('href', this.cvs.toDataURL('image/png'));
        link.setAttribute('download', 'image.png');
        link.click();
        return false;
    }
}