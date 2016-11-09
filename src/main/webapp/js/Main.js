
var mainModel = {};

mainModel.init = function () {

    var model = new ReminderModel();
    var view = new ReminderView(model);
    model.setView(view);
    model.updateModel();

};