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

        return Controller.extend("tutorial1.controller.View1", {
            onInit: function () {
                const oCitiesModel = new JSONModel();
                oCitiesModel.loadData("../model/cities.json");
                this.getView().setModel(oCitiesModel, "CitiesModel");
            },

            onSayHello: function(oEvent){
                /*
                //mensaje flotante "Hello world" que aparece durante 3s cuando pulsamos el boton.
                    MessageToast.show("Hello World!", {
                        duration: 3000,
                    });
    
                }
                */
                if(!Validator.isNotEmpty(this.getView().byId("city-combobox").getSelectedKey())) {
                    MessageToast.show("Select a City", {
                        duration: 3000,
                    });

                    return;
                }

                Common.openDialogFromFragment(this, "idSayHelloDialog", "tutorial1.fragment.sayHelloDialog")

            },

            //Si clickamos a "cerrar" la ventana de dialogo cerrará
            onClose: function () {
                if ( this._dialogSayHello ) {
                    this._dialogSayHello.close()
                }
            },

            onNavigateToView2: function(){
                Common.navigateTo(this, "RouteView2");
            },
            
            onNavigateToView3: function(){
                Common.navigateTo(this, "RouteView3");
            },

            onLanguageEnglish: function(){
                sap.ui.getCore().getConfiguration().setLanguage("en_EN");
            },

            onLanguageSpanish: function(){
                sap.ui.getCore().getConfiguration().setLanguage("es_ES");
            }
        });

    });
    