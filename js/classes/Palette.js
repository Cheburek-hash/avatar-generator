class Palette{
    static black(){
        return '#000000';
    }
    static white(){
        return '#ffffff';
    }
    static random(){
        return 'rgb(' + (core.random(0,256)) + ',' + (core.random(0,256)) + ',' + (core.random(0,256)) + ')';
    }
    static randomGradient(){
        const gradient = core.ctx.createLinearGradient(0,0,core.w, core.h);
        gradient.addColorStop(0,'rgb(' + (core.random(0,256)) + ',' + (core.random(0,256)) + ',' + (core.random(0,256)) + ')');
        gradient.addColorStop(0.5,'rgb(' + (core.random(0,256)) + ',' + (core.random(0,256)) + ',' + (core.random(0,256)) + ')');
        gradient.addColorStop(1,'rgb(' + (core.random(0,256)) + ',' + (core.random(0,256)) + ',' + (core.random(0,256)) + ')');
        return gradient;
    }
}