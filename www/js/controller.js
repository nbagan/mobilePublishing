zog("hi from controller.js");

var app = function(app) {
	app.makeHotSpots = function(assets, pages, direction) {
		zog("hotspots");
		
		if (direction == "horizontal") {
			var hs = new zim.HotSpots([
				{page: assets.main, rect: assets.logo, call: goHome},
				{page: assets.main, rect: assets.mainThing, call: function() {pages.go(assets.info, "right");}}]
			);
		} else {
			var hs = new zim.HotSpots([
				{page: assets.main, rect: assets.logo, call: goHome},
				{page: assets.main, rect: assets.mainThing, call: function() {pages.go(assets.info, "down");}}]
			);
		}
		
		function goHome() {
			zog("go home");
		}
	}
	
	return app;
} (app || {});