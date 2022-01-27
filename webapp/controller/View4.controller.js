sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "../utils/Validator",
    "../utils/Common"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, Validator, Common) {
        "use strict";

        return Controller.extend("tutorial1.controller.View4", {
            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteView4").attachPatternMatched( function (){
                    console.log(sap.ui.getCore().getModel("DetailModel").getData());
                    const oDetailModel = sap.ui.getCore().getModel("DetailModel");
                    this.getView().setModel(oDetailModel, "DetailModel");
                }, this);
            },

            onPressImage: function(oEvent){
                Common.openDialogFromFragment(this, "idSayHelloDialog", "tutorial1.fragment.ImageDialog")
            },
        });

    });