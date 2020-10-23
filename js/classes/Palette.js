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
    static randomGradient(color_slice = false){
        const gradient = core.ctx.createLinearGradient(0,0,core.cvs.width, core.cvs.height);

        if (!color_slice)
        {
            gradient.addColorStop(0,'rgb(' + (core.random(0,256)) + ',' + (core.random(0,256)) + ',' + (core.random(0,256)) + ')');
            gradient.addColorStop(0.5,'rgb(' + (core.random(0,256)) + ',' + (core.random(0,256)) + ',' + (core.random(0,256)) + ')');
            gradient.addColorStop(1,'rgb(' + (core.random(0,256)) + ',' + (core.random(0,256)) + ',' + (core.random(0,256)) + ')');
        }else{
            gradient.addColorStop(0,`rgb(${color_slice[0][0]},${color_slice[0][1]},${color_slice[0][2]})`);
            gradient.addColorStop(0.5,`rgb(${color_slice[1][0]},${color_slice[1][1]},${color_slice[1][2]})`);
            gradient.addColorStop(1,`rgb(${color_slice[2][0]},${color_slice[2][1]},${color_slice[2][2]})`);
        }
        return gradient;
    }

}