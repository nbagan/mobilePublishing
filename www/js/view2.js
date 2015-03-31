zog("hi from view.js");

var app = function() {
	
	app.makeVerticalPages = function(layoutManager, gridManager, guideManager) {
		p = {};
		zog("inside function");
/*		p.main = new createjs.Container();
		p.main.name = "main";
		p.main.setBounds(0, 0, stageW, stageH);
		
		var content = p.main.content = new createjs.Container();
		content.setBounds(0,0,600,600);
		p.main.addChild(content);

		var title = new createjs.Text("test", "20px Arial", "#333333");
		title.setBounds(0, 0, 100, 100);
		title.x = 0;
		title.y= 0;
 		title.textBaseline = "alphabetic";
		content.addChild(title);
		
		var house = new createjs.Bitmap(preload.getResult("house"));
		house.setBounds(0, 0, 350, 350);
		content.addChild(house);
		
		//percentages
		var mainParts = [
			{object: house, marginLeft: 10, maxHeight: 50, width: 50, valign: "top"},
			{object: title, marginTop:0, maxWidth:80, minHeight:20, align:"middle", valign:"top"} 
			//{object: circle, marginLeft:100, maxHeight: 40, width: 40, valign:"bottom"},
			//{object: circle2, marginLeft:100, maxHeight: 40, width: 40, valign:"bottom"}
		];
		
		//function(holder, regions, lastMargin, backgroundColor, vertical, regionShape, scalingObject, hideKey)
		var mainLayout = new zim.Layout(p.main, mainParts, 10, "#D4F9C0", true, null, stage);

		layoutManager.add(mainLayout);
		
		p.info = new createjs.Container();
		p.info.name = "info";
		
		var infoBacking = new zim.Rectangle(stageW, stageH, "#7EBEC7");
		infoBacking.setBounds(0, 0, stageW, stageH);
		p.info.addChild(infoBacking);
		
		var title = new createjs.Text("page2", "20px Arial", "#333333");
		title.setBounds(null, null, 100, 100);
		title.x = 100;
		title.y= 100;
 		title.textBaseline = "alphabetic";
		infoBacking.addChild(title);
		
		var pet = new createjs.Bitmap("image/pup.png");
		pet.setBounds(-100, -100, 100, 100);
		pet.x = 200;
		pet.y = 400;
		infoBacking.addChild(pet);
		
		zim.drag(pet);
		
		pet.on("pressmove", function(e) {
			console.log("moving");
		});
		
		var circle = zim.Circle (40, "black", null, null);
		circle.setBounds(-40,-40,100,100);
		circle.x = 400;
		circle.y = 700;
		infoBacking.addChild(circle);
		
		var circle2 = zim.Circle (40, "red", null, null);
		circle2.setBounds(-40,-40,100,100);
		circle2.x = 500;
		circle2.y = 700;
		infoBacking.addChild(circle2);
		
		var star = new createjs.Shape();
		star.graphics.beginFill("yellow").dp(100,100,50,5,0.6,-90);
		star.alpha = 0;
		infoBacking.addChild(star); 
		
		
		circle.addEventListener("click", handleClick);
			function handleClick(event){
			console.log("love me");
			createjs.Tween.get(star).to({alpha: 1},1000);
		}
		
		circle2.addEventListener("click", clicked);
			function clicked(event){
			console.log("feed me");
		}
		
		var petPage = [ 
			{object: circle, marginLeft:500, maxHeight: 40, width: 40, valign:"bottom"},
			{object: circle2, marginLeft:500, maxHeight: 40, width: 40, valign:"bottom"}
		];*/
		
		return p;
		
	}
	
	return app;
} (app || {});