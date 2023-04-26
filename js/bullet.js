class Bullet {
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.dir = dir
        //现在就要根据方向来决定图片
        if (this.dir == "left") {
            this.img = assets[7];
        } else if (this.dir == "right") {
            this.img = assets[8];
        } else if (this.dir == "up") {
            this.img = assets[5];
        } else if (this.dir == "down") {
            this.img = assets[6];
        }
        this.width = this.img.width;
        this.height = this.img.height;
        this.speed = 10;
    }

    //移动
    move() {
        //始终都要记住一个口诀 ，上负下正，左负右正
        if (this.dir == "left") {
            this.x -= this.speed;
        } else if (this.dir == "right") {
            this.x += this.speed;
        } else if (this.dir == "up") {
            this.y -= this.speed;
        } else if (this.dir == "down") {
            this.y += this.speed;
        }


        //防止子弹超出范围
        if (this.x < 100 || this.x > game.width || this.y < 100 || this.y > game.height) {
            if (this.owner == p1) {
                var index1 = bulletList1.indexOf(this);
                bulletList1.splice(index1, 1);
            }
            if (this.owner == p2) {
                var index2 = bulletList2.indexOf(this);
                bulletList2.splice(index2, 1);
            }
            if (this.owner == enemy) {
                var index3 = bulletList3.indexOf(this);
                bulletList3.splice(index3, 1);
            }
        }
    }

    //绘制
    draw(ctx) {
        this.move();
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}