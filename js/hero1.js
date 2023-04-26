class Hero1 {

    constructor() {
        this.x = parseInt(400 * Math.random());
        this.y = parseInt(200 * Math.random());
        this.upImg = assets[0];
        this.downImg = assets[1];
        this.leftImg = assets[2];
        this.rightImg = assets[3];
        this.width = this.upImg.width;
        this.height = this.upImg.height;
        this.dir = "down";
        this.speed = 3.5;
        this.nowHreo = this.downImg;
        this.headImg = assets[4];
        this.hp = 100 + 11;
        this.tophp = 100 + 11;
        this.score = 0;
        this.isFire = false;
    }

    //画头像
    drawHead(ctx) {
        ctx.drawImage(this.headImg, 10, 10, 80, 80);
        //画血条
        ctx.strokeRect(100, 15, 220, 30);
        //血条颜色
        var grd1 = ctx.createLinearGradient(100, 15, 330, 10);
        grd1.addColorStop(0, "orange");
        grd1.addColorStop(1, "red");
        ctx.fillStyle = grd1;
        ctx.fillRect(100, 15, 220 * this.hp / this.tophp, 30);
        //画分数
        ctx.textAlign = "left";
        ctx.font = "23px 微软雅黑";
        ctx.fillStyle = "red";
        ctx.fillText("得分：" + this.score, 330, 40);
        //画血量
        ctx.textAlign = "left";
        ctx.font = "23px 微软雅黑";
        ctx.fillStyle = "red";
        ctx.fillText("HP：" + this.hp + "/" + this.tophp, 100, 80);
    }

    //绘制
    draw(ctx) {
        this.drawHead(ctx);
        this.move();
        ctx.drawImage(this.nowHreo, this.x, this.y, this.width, this.height);
    }

    //移动
    move() {
        if (keySet.has(65)) {
            this.dir = "left";
            this.x -= this.speed;
            this.nowHreo = this.leftImg;
        } else if (keySet.has(68)) {
            this.dir = "right";
            this.x += this.speed;
            this.nowHreo = this.rightImg;
        } else if (keySet.has(87)) {
            this.dir = "up";
            this.y -= this.speed;
            this.nowHreo = this.upImg
        } else if (keySet.has(83)) {
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

    //开火
    fire() {
        var a = new Bullet(this.x, this.y, this.dir);
        if (a.dir == "left") {
            a.img = assets[29];
        } else if (a.dir == "right") {
            a.img = assets[30];
        } else if (a.dir == "up") {
            a.img = assets[27];
        } else if (a.dir == "down") {
            a.img = assets[28];
        }
        a.width = a.img.width;
        a.height = a.img.height;
        a.x = this.x + this.width / 2 - a.width / 2
        a.y = this.y + this.height / 2 - a.height / 2
        a.owner = p1;
        bulletList1.push(a);
    }
}