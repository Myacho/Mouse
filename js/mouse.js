console.log(1);

	var game = document.getElementById("game");
	//保持定时器对象
	var timer;

	timer = setInterval(function() {

		//随机数 0-8    0-0.9999999
		var temp = Math.random() * 9;
		//对小数进行取整数    round()四舍五入取整
		var x = Math.floor(temp);
		//console.log(x);测试生成的随机数
		var img = game.children[x];
		img.src = "img/2.png";

		//随机数 0-8    0-0.9999999
		var temp = Math.random() * 9;
		//对小数进行取整数    round()四舍五入取整
		var x = Math.floor(temp);
		//console.log(x);测试生成的随机数
		var img = game.children[x];
		img.src = "img/5.jpg";

	}, 500);

	//记录分数的全局变量
	var count = 0;
	//实现点击事件
	function beat(img) {
		//保存被点击图片路径
		var beatImg = img.src;
		//对图片路径进行判断
		if (T > 0) {
			if (beatImg.charAt(beatImg.length - 5) == "2") {
				//		console.log("点到地鼠");
				img.src = "img/5.jpg";
				count++;
				//		console.log(count);
				document.getElementById("score").innerHTML = "得分是：" + count;
			}
		}
	}
	var T = 30;
	var backTimer = setInterval(function() {
		T = T - 1;
		document.getElementById("time").innerHTML = "剩余时间：" + T;
		if (T == 0) {
			//停止计时器
			clearInterval(timer);
			clearInterval(backTimer);
			document.getElementById("music").pause();
			document.getElementById("score").innerHTML = "最终得分：" + count;
			document.getElementById("time").innerHTML = "游戏结束";
		}
	}, 1000);