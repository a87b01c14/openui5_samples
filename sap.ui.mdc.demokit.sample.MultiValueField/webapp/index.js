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
						title : "MultiValueField - with value help",
						enableScrolling : true,
						content : [
							new ComponentContainer({
								name : "sap.ui.mdc.demokit.sample.MultiValueField",
								settings : {
									id : "sap.ui.mdc.demokit.sample.MultiValueField"
								}
							})
						]
					})
				]
			})
		}).placeAt("content");
	});
});
