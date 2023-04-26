class Hero2 {

    constructor() {
        this.x = parseInt(600 + Math.random() * 400);
        this.y = parseInt(300 + Math.random() * 300);
        this.upImg = assets[9];
        this.downImg = assets[10];
        this.leftImg = assets[11];
        this.rightImg = assets[12];
        this.width = this.upImg.width;
        this.height = this.upImg.height;
        this.dir = "up";
        this.speed = 3.5 + 1.5;
        this.nowHreo = this.upImg;
        this.headImg = assets[26];
        this.hp = 100;
        this.tophp = 100;
        this.score = 0;
        this.isFire = false;
    }

    //画头像
    drawHead(ctx) {
        ctx.drawImage(this.headImg, 1080, 10, 80, 80);
        //画血条
        ctx.strokeRect(1170, 15, 220, 30);
        var grd1 = ctx.createLinearGradient(1170, 10, 1390, 10);
        //血条颜色
        grd1.addColorStop(0, "orange");
        grd1.addColorStop(1, "red");
        ctx.fillStyle = grd1;
        ctx.fillRect(1170, 15, 220 * this.hp / this.tophp, 30);
        //画分数
        ctx.textAlign = "left";
        ctx.font = "23px 微软雅黑";
        ctx.fillStyle = "red";
        ctx.fillText("得分：" + this.score, 1400, 40);
        //画血量
        ctx.textAlign = "left";
        ctx.font = "23px 微软雅黑";
        ctx.fillStyle = "red";
        ctx.fillText("HP：" + this.hp + "/" + this.tophp, 1170, 80);
    }

    //绘制
    draw(ctx) {
        this.drawHead(ctx);
        this.move();
        ctx.drawImage(this.nowHreo, this.x, this.y, this.width, this.height);
    }

    // 移动
    move() {
        if (keySet.has(37)) {
            this.dir = "left";
            this.x -= this.speed;
            this.nowHreo = this.leftImg;
        } else if (keySet.has(39)) {
            this.dir = "right";
            this.x += this.speed;
            this.nowHreo = this.rightImg;
        } else if (keySet.has(38)) {
            this.dir = "up";
            this.y -= this.speed;
            this.nowHreo = this.upImg
        } else if (keySet.has(40)) {
            this.dir = "down"
            this.y += this.speed;
            this.nowHreo = this.downImg;
        }

        //玩家不能超出地图
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
    }

    // 开火
    fire() {
        var b = new Bullet(this.x, this.y, this.dir);
        b.x = this.x + this.width / 2 - b.width / 2
        b.y = this.y + this.height / 2 - b.height / 2
        b.owner = p2;
        bulletList2.push(b);
    }
}