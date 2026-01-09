sap.ui.require([
	"sap/m/Shell",
	"sap/m/App",
	"sap/m/Page",
	"sap/ui/core/ComponentContainer",
	"sap/ui/core/Core"
], function(
	Shell, App, Page, ComponentContainer, Core) {
	"use strict";

	Core.attachInit(function() {
		new Shell ({
			app : new App ({
				pages : [
					new Page({
						title : "Field - with custom controls",
						enableScrolling : true,
						content : [
							new ComponentContainer({
								name : "sap.ui.mdc.demokit.sample.FieldCustomContent",
								settings : {
									id : "sap.ui.mdc.demokit.sample.FieldCustomContent"
								}
							})
						]
					})
				]
			})
		}).placeAt("content");
	});
});
