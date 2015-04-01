
// view
zog("hi from view.js");


var app = function(app) {
	
	app.makeVerticalPages = function(layoutManager, gridManager, guideManager, preload) {
		
		zog("pages");
		
		p = {};
		
		//-----FIRST PAGE-----//
		
		p.main = new createjs.Container();
		p.main.name = "main";
		//p.main.setBounds(0,0,stageW,stageH);
		
		var content = p.main.content = new createjs.Container();
		content.setBounds(0,0,360,600);
		p.main.addChild(content);

		var title = new createjs.Bitmap(preload.getResult("logo"));
		title.x = 110;
		title.y = 100;
		content.addChild(title);
		
		var house = new createjs.Bitmap(preload.getResult("house"));
		house.x = 50;
		house.y = 100;
		content.addChild(house);
		
		var paw = new createjs.Bitmap(preload.getResult("paw"));
		paw.x = -10;
		paw.y = 200;
		content.addChild(paw);
		
		var headline = new createjs.Bitmap(preload.getResult("headline"));
		headline.x = 105;
		headline.y = 550;
		content.addChild(headline);
				
		//percentages
		var mainParts = [
			{object: content, marginLeft: 5, maxHeight: 100, width: 100, valign: "top"}
			//{object: house, marginLeft: 10, maxHeight: 100, width: 100, valign: "top"},
			//{object: title, marginTop:0, maxWidth:100, minHeight:100, align:"middle", valign:"top"},
			//{object: paw, marginTop:0, maxWidth:100, minHeight:100, align:"middle", valign:"top"},
			//{object: headline, marginTop:0, maxWidth:100, minHeight:100, align:"middle", valign:"top"}	
		];
		
		//function(holder, regions, lastMargin, backgroundColor, vertical, regionShape, scalingObject, hideKey)
		var mainLayout = new zim.Layout(p.main, mainParts, 10, "#FF6666", true, null, stage);

		layoutManager.add(mainLayout);
		
		//-----SECOND PAGE-----//
		
		p.info = new createjs.Container();
		p.info.name = "info";
		
		var content2 = p.info.content2 = new createjs.Container();
		content2.setBounds(0,0,360,600);
		p.info.addChild(content2);
		
		var barTop = new zim.Rectangle(450, 50, "#222");
		barTop.x = -20;
		barTop.y = 0;
		content2.addChild(barTop);
		
		var logoMini = new createjs.Bitmap(preload.getResult("logoMini"));
		logoMini.x = 20;
		logoMini.y = 10;
		content2.addChild(logoMini);
		
		var pet = new createjs.Bitmap(preload.getResult("pet"));
		pet.x = 80;
		pet.y = 220;
		content2.addChild(pet);
		
		zim.drag(pet);
		
		pet.on("pressmove", function(e) {
			console.log("moving");
		});
		
		var buttonBar = new zim.Rectangle(450, 170, "#ccc");
		buttonBar.x = -20;
		buttonBar.y = 560;
		content2.addChild(buttonBar);
		
		var love = new createjs.Bitmap(preload.getResult("love"));
		love.x = 80;
		love.y = 565;
		content2.addChild(love);
		
		var food = new createjs.Bitmap(preload.getResult("feed"));
		food.x = 190;
		food.y = 565;
		content2.addChild(food);
		
		var loveme = new createjs.Bitmap(preload.getResult("loveme"));
		loveme.x = 110;
		loveme.y = 120;
		loveme.alpha = 0;

		var feedme = new createjs.Bitmap(preload.getResult("feedme"));
		feedme.x = 110;
		feedme.y = 120;
		feedme.alpha = 0;
		
		var yum = new createjs.Text("yum yum yum!", "bold 20px Arial", "#00CCCC");
		yum.x = 110;
		yum.y = 180;
		yum.textBaseline = "alphabetic";
		yum.alpha = 0;
		content2.addChild(yum);
		
		var loveyou = new createjs.Text("I love you!", "bold 20px Arial", "#FF6666");
		loveyou.x = 130;
		loveyou.y = 180;
		loveyou.textBaseline = "alphabetic";
		loveyou.alpha = 0;
		content2.addChild(loveyou);

		love.addEventListener("click", handleClick);
			function handleClick(event){
			console.log("love me");
			stage.addChild(loveme);
			createjs.Tween.get(loveme, {loop: false}).to({alpha: 1},500)
			.wait(300)
			.to({scaleX: 1.5, scaleY: 1.5, alpha:0}, 500)
			.to({scaleX: 1, scaleY: 1}, 500)
			.call(complete);
		function complete(){
			createjs.Tween.get(loveyou).to({alpha:1},500)
			.wait(1000)
			.to({alpha:0},500)
			.wait(1000)
			.call(move);	
			}
		function move(){
			createjs.Tween.get(pet)
			.to({x:60}, 300)
			.to({x:100}, 300)
			.to({x:80}, 300);
			}
			createjs.Ticker.addEventListener("tick", stage);
			stage.removeChild(feedme);
		}
		
		food.addEventListener("click", clicked);
			function clicked(event){
			console.log("feed me");
			stage.addChild(feedme);
			createjs.Tween.get(feedme, {loop: false}).to({alpha:1},500)
			.wait(300)
			.to({scaleX: 1.5, scaleY: 1.5, alpha:0}, 500)
			.to({scaleX: 1, scaleY: 1}, 500)
			.call(complete);
		function complete(){
			createjs.Tween.get(yum).to({alpha:1},500)
			.wait(1000)
			.to({alpha:0},500)
			.wait(1000)
			.call(move);	
			}
		function move(){
			createjs.Tween.get(pet)
			.to({x:60}, 300)
			.to({x:100}, 300)
			.to({x:80}, 300);
			}
			createjs.Ticker.addEventListener("tick", stage);
			stage.removeChild(loveme);
		}

		var tick = function (event) {
   			stage.update();   
		}

		var petPage = [ 
			{object: content2, marginLeft: 5, maxHeight: 100, width: 100, valign: "top"}
		];
		
		var secondLayout = new zim.Layout(p.info, petPage, 10, "#FFF", true, null, stage);

		layoutManager.add(secondLayout);
		
		return p;
		
	}	
	
	return app;
	
}(app || {});