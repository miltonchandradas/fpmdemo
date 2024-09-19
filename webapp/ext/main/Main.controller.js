sap.ui.define(
  ["sap/fe/core/PageController", "sap/ui/model/json/JSONModel"],
  function (PageController, JSONModel) {
    "use strict";

    return PageController.extend("fpmdemo.ext.main.Main", {
      onAfterRendering: function () {
        let oView = this.getView();
        let mFBConditions = new JSONModel({
          allFilters: "",
          expanded: false,
          filtersTextInfo: oView.byId("myFilterBar").getActiveFiltersText(),
        });
        oView.byId("myFilterBar").triggerSearch();
        oView.setModel(mFBConditions, "fbConditions");
      },
      handlers: {
        onFiltersChanged: function (oEvent) {
          let oView = this.getView();
          let filterBar = oView.byId("myFilterBar");
          let allFilters = filterBar.getFilters();

          let oSource = oEvent.getSource();
          let mFBConditions = oSource.getModel("fbConditions");
          mFBConditions.setProperty(
            "/allFilters",
            JSON.stringify(allFilters, null, "  ")
          );

          if (Object.keys(allFilters).length > 0) {
            mFBConditions.setProperty("/expanded", true);
          }
          mFBConditions.setProperty(
            "/filtersTextInfo",
            oSource.getActiveFiltersText()
          );
        },
      },
      /**
       * Called when a controller is instantiated and its View controls (if available) are already created.
       * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
       * @memberOf fpmdemo.ext.main.Main
       */
      //  onInit: function () {
      //      PageController.prototype.onInit.apply(this, arguments); // needs to be called to properly initialize the page controller
      //  },

      /**
       * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
       * (NOT before the first rendering! onInit() is used for that one!).
       * @memberOf fpmdemo.ext.main.Main
       */
      //  onBeforeRendering: function() {
      //
      //  },

      /**
       * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
       * This hook is the same one that SAPUI5 controls get after being rendered.
       * @memberOf fpmdemo.ext.main.Main
       */
      //  onAfterRendering: function() {
      //
      //  },

      /**
       * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
       * @memberOf fpmdemo.ext.main.Main
       */
      //  onExit: function() {
      //
      //  }
    });
  }
);
