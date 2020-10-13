'use strict';
class Core {
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
        delete this.w && delete this.h;
    }
    generate(){
        Primitives.bg(this.data.background);
        Primitives.body(this.data.body);
    }
    regenerate(type){
        switch (type) {
            case 'bg':
                delete Primitives.bg_color;
                core.generate();
                break;
            case 'body':
                delete Primitives.body_color;
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