'use strict';
class Core {
    w;h;data;cvs;ctx;
    init(w,h,properties = []) {
        this.w = w;
        this.h = h;
        this.data = properties;
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
    generate(){
        Primitives.bg(this.data.background);
        Primitives.body(this.data.body, this.data.offset);
    }
    reset(){
        core.data.offset = [0,0];
        core.cvs.width = core.w;
        core.cvs.height = core.h;
        this.generate();
    }
    regenerate(type){
        switch (type) {
            case 'bg':
                delete Primitives.bg_color;
                core.cvs.width = core.cvs.width;
                core.generate();
                break;
            case 'body':
                delete Primitives.body_color;
                core.cvs.width = core.cvs.width;
                core.generate();
                break;
        }
    }
    save() {
        const link = document.createElement('a');
        link.setAttribute('href', this.cvs.toDataURL('image/png'));
        link.setAttribute('download', 'image.png');
        link.click();
        return false;
    }
}