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
						title : "Sales Orders Template",
						enableScrolling : true,
						content : [
							new ComponentContainer({
								name : "sap.ui.core.sample.odata.v4.SalesOrdersTemplate",
								settings : {
									id : "sap.ui.core.sample.odata.v4.SalesOrdersTemplate"
								}
							})
						]
					})
				]
			})
		}).placeAt("content");
	});
});
