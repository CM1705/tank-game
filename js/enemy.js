class Enemy {

    constructor() {
        //坐标随机产生,
        this.speed = 2;
        this.upImg = assets[13];
        this.downImg = assets[14];
        this.leftImg = assets[15];
        this.rightImg = assets[16];
        this.width = this.upImg.width;
        this.height = this.upImg.height;
        this.x = parseInt(Math.random() * (game.width - this.width));
        this.y = parseInt(Math.random() * (game.height - this.height));
        var randomNumber = parseInt(Math.random() * 4);
        //随机面朝方向
        var nowDirList = [this.upImg, this.downImg, this.leftImg, this.rightImg]
        this.nowHreo = nowDirList[randomNumber];
        //随机初始方向
        var dirList = ["up", "down", "left", "right"];
        this.dir = dirList[randomNumber];
    }


    //小兵的移动方法   左负右正，上负下正
    move() {
        var dirList = ["up", "down", "left", "right"];
        var randomNumber = parseInt(Math.random() * 4);

        if (this.dir == "left") {
            this.nowHreo = this.leftImg;
            this.x -= this.speed;
            if (this.x <= 100) {
                this.dir = dirList[randomNumber];
            }

        }
        if (this.dir == "right") {
            this.nowHreo = this.rightImg;
            this.x += this.speed;
            if (this.x >= game.width - this.width * 2) {
                this.dir = dirList[randomNumber];
            }

        }
        if (this.dir == "up") {
            this.nowHreo = this.upImg;
            this.y -= this.speed;
            if (this.y <= 100) {
                this.dir = dirList[randomNumber];
            }

        }
        if (this.dir == "down") {
            this.nowHreo = this.downImg;
            this.y += this.speed;
            if (this.y > game.height - this.height * 2) {
                this.dir = dirList[randomNumber];
            }
        }

        //限制位置
        if (this.x <= 100) {
            this.x = 100;
        } else if (this.x > game.width - this.width * 2) {
            this.x = game.width - this.width * 2;
        }

        if (this.y <= 100) {
            this.y = 100;
        } else if (this.y > game.height - this.height * 2) {
            this.y = game.height - this.height * 2;
        }

        //随机转向
        if (Number < 8) {
            this.dir = dirList[randomNumber];
        }

        var Number = parseInt(Math.random() * 1000);
        //随机攻击
        if (Number < 5) {
            this.fire();
        }
    }

    //绘制
    draw(ctx) {
        this.move();
        ctx.drawImage(this.nowHreo, this.x, this.y, this.width, this.height);
    }

    //攻击
    fire() {
        var c = new Bullet(this.x, this.y, this.dir);
        c.img = assets[17];
        c.width = c.img.width;
        c.height = c.img.height;
        c.x = this.x + this.width / 2 - c.width / 2;
        c.y = this.y + this.height / 2 - c.height / 2;
        c.owner = enemy;
        bulletList3.push(c);
    }
}
