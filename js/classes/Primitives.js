'use strict';

class Primitives {
    static bg(){
        switch (core.data.background.type) {
            case 'black':
                core.ctx.fillStyle = Palette.black();
                break;
            case 'white':
                core.ctx.fillStyle = Palette.white();
                break;
            case 'random':
                if (!core.data.background.data) core.data.background.data = Palette.random();
                core.ctx.fillStyle = core.data.background.data;
                break;
            case 'random_gradient':
                if (!core.data.background.data) core.data.background.data = core.gradientPrepare();
                core.ctx.fillStyle = Palette.randomGradient(core.data.background.data);
                break;
            default:
                core.ctx.fillStyle = Palette.white();
                break;
        }
        core.ctx.fillRect(0,0,core.cvs.width, core.cvs.height);
    }
    static body(){

        this.userW = 309;
        this.userH = 258;

        const user = new Path2D('m207.993343,87.930679c0,0 9.621575,-39.778248 0,-53.252988c-9.632908,-13.47474 -13.474738,-22.450345 -34.655803,-28.876062s-13.463405,-5.145107 -28.864725,-4.487802c-15.40132,0.645972 -28.24142,8.975605 -28.24142,13.463407c0,0 -9.621575,0.645972 -13.463405,4.499135c-3.853163,3.853164 -10.267547,21.804373 -10.267547,26.303508s3.207192,34.655807 6.414383,41.070191l-3.819165,1.28061c-3.207192,37.205695 12.828767,41.70483 12.828767,41.70483c5.768412,34.655807 11.548157,19.900457 11.548157,28.876062s-5.779745,5.779745 -5.779745,5.779745s-5.12244,14.109379 -17.951207,19.243153c-12.828767,5.122441 -84.044289,32.70656 -89.835366,38.486305c-5.791078,5.791078 -5.133773,32.729225 -5.133773,32.729225l305.385847,0c0,0 0.668637,-26.938147 -5.12244,-32.729225c-5.80241,-5.791078 -77.017932,-33.363864 -89.846699,-38.486305c-12.828767,-5.133774 -17.951207,-19.243153 -17.951207,-19.243153s-5.779745,3.195859 -5.779745,-5.779745s5.779745,5.779745 11.55949,-28.876062c0,0 16.024626,-4.499135 12.828767,-41.70483l-3.853163,0z');
        switch (core.data.body.type) {
            case 'black':
                core.ctx.fillStyle = Palette.black();
                break;
            case 'white':
                core.ctx.fillStyle = Palette.white()
                break;
            case 'random':
                if (!core.data.body.data) core.data.body.data = Palette.random();
                core.ctx.fillStyle = core.data.body.data;
                break;
            case 'random_gradient':
                if (!core.data.body.data) core.data.body.data = core.gradientPrepare();
                core.ctx.fillStyle = Palette.randomGradient(core.data.body.data);
                break;
            default:
                core.ctx.fillStyle = Palette.black();
                break;
        }
            core.ctx.scale(core.data.scale, core.data.scale);
            core.ctx.translate((core.cvs.width / core.data.scale * 0.5 - (this.userW/2)) + parseInt(core.data.offset[0]),(core.cvs.height / core.data.scale * 0.5 - (this.userH/2)) + parseInt(core.data.offset[1]));
            core.ctx.fill(user);
    }
}