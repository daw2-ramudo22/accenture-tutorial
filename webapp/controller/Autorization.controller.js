sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("tutorial1.controller.Autorization", {

            onInit: function () {
                const oDateModel = new JSONModel();
                oDateModel.loadData("../model/date.json");
                this.getView().setModel(oDateModel, "DateModel");

                const oMonthModel = new JSONModel();
                oMonthModel.loadData("../model/month.json");
                this.getView().setModel(oMonthModel, "MonthModel");
                
            }
            

        });

    });
    