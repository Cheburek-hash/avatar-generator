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
        //this.ctx.globalCompositeOperation='destination-over';
        document.body.appendChild(this.cvs);
    }
    generate(){
        this.createField();
        Primitives.bg(this.data.background);
        Primitives.body(this.data.body);
        console.log('ok')
    }
}