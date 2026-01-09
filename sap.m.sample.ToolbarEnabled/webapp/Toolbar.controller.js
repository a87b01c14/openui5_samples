sap.ui.define(['sap/ui/core/mvc/Controller','sap/m/MessageToast'],
	function(Controller,MessageToast) {
	"use strict";

	var ToolbarController = Controller.extend("sap.m.sample.ToolbarEnabled.Toolbar", {
		onCheckBoxSelect: function (oEvent) {
			var bEnabled = oEvent.getParameter("selected");
			this.byId("toolbar").setEnabled(bEnabled);
		}.
	});

	return ToolbarController;

});
