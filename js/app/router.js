define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),
        PageSlider  = require('app/utils/pageslider'),
        HomeView    = require('app/views/Home'),

        slider = new PageSlider($('body')),

        homeView = new HomeView();

    return Backbone.Router.extend({

        routes: {
            "": "home",
            "employees/:id": "employeeDetails",
            "employees/:id/reports": "reports"
        },

        home: function () {
            homeView.delegateEvents();
            slider.slidePage(homeView.$el);
        },

        employeeDetails: function (id) {
            require(["app/models/employee", "app/views/Employee"], function (models, EmployeeView) {
                var employee = new models.Employee({id: id});
                employee.fetch({
                    success: function (data) {
                        slider.slidePage(new EmployeeView({model: data}).$el);
                    }
                });
            });
        },

        reports: function (id) {
            require(["app/models/employee", "app/views/Reports"], function (models, ReportsView) {
                var employee = new models.Employee({id: id});
                employee.fetch({
                    success: function (data) {
                        slider.slidePage(new ReportsView({model: data}).$el);
                    }
                });
            });
        }

    });

});