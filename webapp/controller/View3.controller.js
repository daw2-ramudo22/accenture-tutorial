sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "../utils/Formatter",
    "../utils/Common"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, Formatter, Common) {
        "use strict";

        return Controller.extend("tutorial1.controller.View3", {

            Formatter: Formatter,

            onInit: function () {

            },

            onPressColumn: function(oEvent){
                var oModelNorthWind = this.getOwnerComponent().getModel();

                console.log(oEvent.getSource().getBindingContext().sPath);

                oModelNorthWind.read(oEvent.getSource().getBindingContext().sPath,{
                    urlParameters: {
                        "$expand" : "Category, Order_Details, Supplier"
                    },
                    success: function (oData){
                        sap.ui.getCore().setModel(new JSONModel(oData), "DetailModel");
                        var oRouter = this.getOwnerComponent().getRouter();
                        Common.navigateTo(this, "RouteView4");                    
                }.bind(this)
            });
        }
    });

});