sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.m.sample.Avatar.controller.Avatar", {
		onInit: function () {
			var oJsonModel = new JSONModel({
				Speakers: "https://sdk.openui5.org/test-resources/sap/m/images/Speakers_avatar_01.jpg",
				Woman01: "https://sdk.openui5.org/test-resources/sap/m/images/Woman_avatar_01.png",
				Woman02: "https://sdk.openui5.org/test-resources/sap/m/images/Woman_avatar_02.png",
				Screw: "https://sdk.openui5.org/test-resources/sap/m/images/Screw_avatar_01.jpg",
				Lamp: "https://sdk.openui5.org/test-resources/sap/m/images/Lamp_avatar_01.jpg"
			});
			this.getView().setModel(oJsonModel);
		},
		onPress: function(oEvent) {
			MessageToast.show(oEvent.getSource().getId() + " Pressed");
		}
	});
});