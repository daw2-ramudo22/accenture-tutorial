sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("tutorial1.controller.App", {
            onInit: function () {
                this.getOwnerComponent().setModel(new JSONModel(), "ToolModel");
                const oToolModel = this.getOwnerComponent().getModel("ToolModel");
                oToolModel.setProperty("/name", "Curso Fiori");
                

                var oModelNorthWind = this.getOwnerComponent().getModel();
                oModelNorthWind.read("/Products", {
                    success: function (oData){
                        console.log(oData);
                    }
                })
            }
            
        });

    });
    
