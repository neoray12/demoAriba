sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("demoAribademoAriba.controller.View1", {

		onInit: function() {

			this.initTable();

		},

		initTable: function() {

			var oModel = new sap.ui.model.json.JSONModel();
			var sHeaders = {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"APIKey": "g8CeBRHyAQQVvsGW8PiRrohAMTee5JYd"
			};

			oModel.loadData("https://sandbox.api.sap.com/ariba/api/approval/v1/sandbox/changes?realm=string", null, true, "GET", null, false,
				sHeaders);

			oModel.attachRequestCompleted(function(oEvent) {
				var oData = oEvent.getSource().oData;
				console.log(oData);

				oModel.setData({
					modelData: oData
				});

				sap.ui.getCore().setModel(oModel);

			});
			
			var oTable = this.getView().byId("mytable");
			oTable.setModel(oModel);

			// var aColumns = [
			// 	new sap.m.Column({
			// 		header: new sap.m.Text({
			// 			text: "approvableUniqueName"
			// 		})
			// 	}),
			// 	new sap.m.Column({
			// 		header: new sap.m.Text({
			// 			text: "changeSequenceId"
			// 		})
			// 	}),
			// 	new sap.m.Column({
			// 		header: new sap.m.Text({
			// 			text: "changeType"
			// 		})
			// 	}),
			// 	new sap.m.Column({
			// 		header: new sap.m.Text({
			// 			text: "realm"
			// 		})
			// 	}),
			// 	new sap.m.Column({
			// 		header: new sap.m.Text({
			// 			text: "restResourceName"
			// 		})
			// 	})

			// ];

			// var oTemplate = new sap.m.ColumnListItem({
			// 	type: "Navigation",
			// 	cells: [
			// 		new sap.m.ObjectIdentifier({
			// 			text: "{approvableUniqueName}"
			// 		}),
			// 		new sap.m.ObjectIdentifier({
			// 			text: "{changeSequenceId}"
			// 		}),
			// 		new sap.m.ObjectIdentifier({
			// 			text: "{changeType}"
			// 		}),
			// 		new sap.m.ObjectIdentifier({
			// 			text: "{realm}"
			// 		}),
			// 		new sap.m.ObjectIdentifier({
			// 			text: "{restResourceName}"
			// 		})
			// 	]
			// });

			// var oTable = new sap.m.Table({
			// 	columns: aColumns
			// });

			// oTable.bindItems("/modelData", oTemplate);
			
			// var oPageMaster = new sap.m.Page("masterPage", {
			// 	title: "Supplier Overview",
			// 	content: [oTable]
			// });

			// var oApp = new sap.m.App("myApp");

			// oApp.addPage(oPageMaster);
			// oApp.placeAt("content");

			// sap.ui.getCore().byId("mytable").setModel(oModel).bindRows("/");
			// oModel.setData(oData);
			// sap.ui.getCore().setModel(oModel, "aribaModel");
			// var oTable = this.getView().byId("mytable");
			// console.log(oModel.getData());
			// this.oTable.setModel(oModel, "aribaModel");
			// console.log(oTable.getModel());
			// this.oTable.bindRows("/modelData");

			// this.getView().setModel(oModel, "aribaModel");
			// oTable.bindRows("/");
			//  
		}

	});
});