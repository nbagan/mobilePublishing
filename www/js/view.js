
// view
zog("hi from view.js");


var app = function(app) {
	
	app.makeVerticalPages = function(layoutManager, gridManager, guideManager, preload) {
		
		zog("pages");
		
		p = {};
		
		//-----FIRST PAGE-----//
		
		p.main = new createjs.Container();
		p.main.name = "main";
		p.main.setBounds(0, 0, stageW, stageH);
		
		var content = new createjs.Container();
		content.setBounds(0,0,360,640);
		p.main.addChild(content);

		var title = new createjs.Bitmap(preload.getResult("logo"));
		title.x = 120;
		title.y = 100;
		content.addChild(title);
		
		var house = new createjs.Bitmap(preload.getResult("house"));
		house.x = 60;
		house.y = 100;
		content.addChild(house);
		
		var paw = new createjs.Bitmap(preload.getResult("paw"));
		paw.x = 70;
		paw.y = 200;
		content.addChild(paw);
		
		var headline = new createjs.Bitmap(preload.getResult("headline"));
		headline.x = 130;
		headline.y = 420;
		content.addChild(headline);
				
		//percentages
		var mainParts = [
			{object: content, marginLeft: 0, maxHeight: 100, width: 100, valign: "top"},
			{object: house, marginLeft: 10, maxHeight: 100, width: 100, valign: "top"},
			{object: title, marginTop:0, maxWidth:100, minHeight:100, align:"middle", valign:"top"},
			{object: paw, marginTop:0, maxWidth:100, minHeight:100, align:"middle", valign:"top"},
			{object: headline, marginTop:0, maxWidth:100, minHeight:100, align:"middle", valign:"top"}	
		];
		
		//function(holder, regions, lastMargin, backgroundColor, vertical, regionShape, scalingObject, hideKey)
		var mainLayout = new zim.Layout(p.main, mainParts, 10, "#FF6666", true, null, stage);

		layoutManager.add(mainLayout);
		
		//-----SECOND PAGE-----//
		
		p.info = new createjs.Container();
		p.info.name = "info";
		
		var infoBacking = new zim.Rectangle(stageW, stageH, "#FFF");
		infoBacking.setBounds(0, 0, stageW, stageH);
		p.info.addChild(infoBacking);
		
		var title = new createjs.Text("page2", "20px Arial", "#333333");
		title.setBounds(null, null, 100, 100);
		title.x = 100;
		title.y= 100;
 		title.textBaseline = "alphabetic";
		infoBacking.addChild(title);
		
		var pet = new createjs.Bitmap(preload.getResult("dog"));
		pet.x = 200;
		pet.y = 400;
		infoBacking.addChild(pet);
		
		zim.drag(pet);
		
		pet.on("pressmove", function(e) {
			console.log("moving");
		});
		
		var love = new createjs.Bitmap(preload.getResult("love"));
		love.x = 150;
		love.y = 500;
		infoBacking.addChild(love);
		
		var food = new createjs.Bitmap(preload.getResult("feed"));
		food.x = 200;
		food.y = 500;
		infoBacking.addChild(food);
		
		var loveme = new createjs.Bitmap(preload.getResult("loveme"));
		loveme.x = 200;
		loveme.y = 200;
		loveme.alpha = 0;

		var feedme = new createjs.Bitmap(preload.getResult("feedme"));
		feedme.x = 200;
		feedme.y = 200;
		feedme.alpha = 0;

		love.addEventListener("click", handleClick);
			function handleClick(event){
			console.log("love me");
			stage.addChild(loveme);
			createjs.Tween.get(loveme).to({alpha: 1},500)
			.wait(500)
			.to({alpha:0}, 500);
			createjs.Ticker.addEventListener("tick", stage);
			stage.removeChild(feedme);
		}
		
		food.addEventListener("click", clicked);
			function clicked(event){
			console.log("feed me");
			stage.addChild(feedme);
			createjs.Tween.get(feedme).to({alpha:1},500)
			.wait(500)
			.to({alpha:0}, 500);
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
			{object: title, marginLeft:0, maxHeight: 40, width: 40, valign:"bottom"},
			{object: pet, marginLeft:0, maxHeight: 40, width: 40, valign:"bottom"},
			{object: love, marginLeft:0, maxHeight: 40, width: 40, valign:"bottom"},
			{object: food, marginLeft:0, maxHeight: 40, width: 40, valign:"bottom"}
		];
		
		var secondLayout = new zim.Layout(p.main, petPage, 10, "#FFF", true, null, stage);

		layoutManager.add(secondLayout);
		
		return p;
		
	}	
	
	return app;
	
}(app || {});