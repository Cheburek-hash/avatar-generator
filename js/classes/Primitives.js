



class Primitives {
    static bg_color;
    static body_color;
    static bg(type){
        switch (type) {
            case 'transparent':
                core.ctx.clearRect(0,0,core.cvs.width, core.cvs.height)
                break;
            case 'black':
                core.ctx.fillStyle = Palette.black();
                core.ctx.fillRect(0,0,core.cvs.width, core.cvs.height);
                break;
            case 'white':
                core.ctx.fillStyle = Palette.white();
                core.ctx.fillRect(0,0,core.cvs.width, core.cvs.height);
                break;
            case 'random':
                if (!this.bg_color){
                    this.bg_color = Palette.random();
                    core.ctx.fillStyle = this.bg_color;
                    core.ctx.fillRect(0,0,core.cvs.width, core.cvs.height);
                }else{
                    core.ctx.fillStyle = this.bg_color;
                    core.ctx.fillRect(0,0,core.cvs.width, core.cvs.height);
                }
                break;
            case 'random_gradient':
                if (!this.bg_color){
                    this.bg_color = Palette.randomGradient();
                    core.ctx.fillStyle = this.bg_color;
                    core.ctx.fillRect(0,0,core.cvs.width, core.cvs.height);
                }else{
                    core.ctx.fillStyle = this.bg_color;
                    core.ctx.fillRect(0,0,core.cvs.width, core.cvs.height);
            }

                break;
        }
    }
    static body(color){

        const userW = 309;
        const userH = 258;
        const scale_coefficient = 1.5;
        const user = new Path2D('m207.993343,87.930679c0,0 9.621575,-39.778248 0,-53.252988c-9.632908,-13.47474 -13.474738,-22.450345 -34.655803,-28.876062s-13.463405,-5.145107 -28.864725,-4.487802c-15.40132,0.645972 -28.24142,8.975605 -28.24142,13.463407c0,0 -9.621575,0.645972 -13.463405,4.499135c-3.853163,3.853164 -10.267547,21.804373 -10.267547,26.303508s3.207192,34.655807 6.414383,41.070191l-3.819165,1.28061c-3.207192,37.205695 12.828767,41.70483 12.828767,41.70483c5.768412,34.655807 11.548157,19.900457 11.548157,28.876062s-5.779745,5.779745 -5.779745,5.779745s-5.12244,14.109379 -17.951207,19.243153c-12.828767,5.122441 -84.044289,32.70656 -89.835366,38.486305c-5.791078,5.791078 -5.133773,32.729225 -5.133773,32.729225l305.385847,0c0,0 0.668637,-26.938147 -5.12244,-32.729225c-5.80241,-5.791078 -77.017932,-33.363864 -89.846699,-38.486305c-12.828767,-5.133774 -17.951207,-19.243153 -17.951207,-19.243153s-5.779745,3.195859 -5.779745,-5.779745s5.779745,5.779745 11.55949,-28.876062c0,0 16.024626,-4.499135 12.828767,-41.70483l-3.853163,0z');
        switch (color) {
            case 'black':
                core.ctx.fillStyle = Palette.black();
                break;
            case 'white':
                core.ctx.fillStyle = Palette.white()
                break;
            case 'random':
                if (!this.body_color){
                    this.body_color = Palette.random();
                    core.ctx.fillStyle = this.body_color;
                }else{
                    core.ctx.fillStyle = this.body_color;
                }
                break;
            case 'random_gradient':
                if (!this.body_color){
                    this.body_color = Palette.randomGradient();
                    core.ctx.fillStyle = this.body_color;
                }else{
                    core.ctx.fillStyle = this.body_color;
                }
                break;
            default:
                core.ctx.fillStyle = Palette.black();
                break;
        }
            core.ctx.scale(scale_coefficient, scale_coefficient)
            core.ctx.translate((core.cvs.width / scale_coefficient * 0.5 - (userW/2)),(core.cvs.height / scale_coefficient * 0.5 - (userH/2)));
            core.ctx.fill(user);

    }
}