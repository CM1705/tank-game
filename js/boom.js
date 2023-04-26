class Boom {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.imgs = assets.slice(18, 25);
        this.width = this.imgs[0].width / 2;
        this.height = this.imgs[0].height / 2;
        this.imgIndex = 0;
        this.x = this.x - this.width / 2
        this.y = this.y - this.height / 2
    }

    draw(ctx) {
        ctx.drawImage(this.imgs[this.imgIndex], this.x, this.y, this.width, this.height);
        this.imgIndex++;
        if (this.imgIndex >= this.imgs.length) {
            var index = boomList.indexOf(this);
            boomList.splice(index, 1);
        }
    }
}