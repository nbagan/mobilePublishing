
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
		headline.x = 100;
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
		
		var barTop = new zim.Rectangle(450, 70, "#222");
		barTop.x = -20;
		barTop.y = 0;
		content2.addChild(barTop);
		
		var title2 = new createjs.Bitmap(preload.getResult("logo"));
		title2.x = 70;
		title2.y = 5;
		content2.addChild(title2);
		
		var house2 = new createjs.Bitmap(preload.getResult("house"));
		house2.x = 10;
		house2.y = 5;
		content2.addChild(house2);
		
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
		loveme.x = 140;
		loveme.y = 115;
		loveme.alpha = 0;

		var feedme = new createjs.Bitmap(preload.getResult("feedme"));
		feedme.x = 140;
		feedme.y = 115;
		feedme.alpha = 0;

		love.addEventListener("click", handleClick);
			function handleClick(event){
			console.log("love me");
			stage.addChild(loveme);
			createjs.Tween.get(loveme).to({alpha: 1},500)
			.wait(300)
			.to({scaleX: 1.5, scaleY: 1.5, alpha:0}, 500);
			createjs.Ticker.addEventListener("tick", stage);
			stage.removeChild(feedme);
		}
		
		food.addEventListener("click", clicked);
			function clicked(event){
			console.log("feed me");
			stage.addChild(feedme);
			createjs.Tween.get(feedme).to({alpha:1},500)
			.wait(300)
			.to({scaleX: 1.5, scaleY: 1.5, alpha:0}, 500);
			createjs.Ticker.addEventListener("tick", stage);
			stage.removeChild(loveme);
		}

		function tick(event) {
   			stage.update();   
		}

		/*function finishAnimation() {
    		createjs.Ticker.removeEventListener("tick", stage);
		}*/
		
		var petPage = [ 
			{object: content2, marginLeft: 5, maxHeight: 100, width: 100, valign: "top"}
		];
		
		var secondLayout = new zim.Layout(p.main, petPage, 10, "#ccc", true, null, stage);

		layoutManager.add(secondLayout);
		
		return p;
		
	}	
	
	return app;
	
}(app || {});