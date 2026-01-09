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
						title : "Operation Binding",
						enableScrolling : true,
						content : [
							new ComponentContainer({
								name : "sap.ui.core.sample.odata.v4.ListBinding",
								settings : {
									id : "sap.ui.core.sample.odata.v4.ListBinding"
								}
							})
						]
					})
				]
			})
		}).placeAt("content");
	});
});
