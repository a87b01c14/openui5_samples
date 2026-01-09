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
						title : "XML Templating: demo scenario",
						enableScrolling : true,
						content : [
							new ComponentContainer({
								name : "sap.ui.core.sample.ViewTemplate.scenario",
								settings : {
									id : "sap.ui.core.sample.ViewTemplate.scenario"
								}
							})
						]
					})
				]
			})
		}).placeAt("content");
	});
});
