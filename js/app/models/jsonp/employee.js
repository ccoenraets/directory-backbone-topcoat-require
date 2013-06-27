define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        Employee = Backbone.Model.extend({

            urlRoot: "http://localhost:3000/employees",

            initialize: function () {
                this.reports = new EmployeeCollection();
                this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            }

        }),

        EmployeeCollection = Backbone.Collection.extend({

            model: Employee,

            url: "http://localhost:3000/employees"

        }),

        originalSync = Backbone.sync;

    Backbone.sync = function (method, model, options) {
        if (method === "read") {
            options.dataType = "jsonp";
            return originalSync.apply(Backbone, arguments);
        }
    };

    return {
        Employee: Employee,
        EmployeeCollection: EmployeeCollection
    };

});