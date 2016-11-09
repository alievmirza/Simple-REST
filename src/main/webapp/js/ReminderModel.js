function ReminderModel() {

    var thisObject = this;
    var view;

    var data = {};
    data.name = null;
    data.surname = null;
    data.country = null;

    data.countries = ["Russia", "Belarus", "USA"];

    thisObject.setView = function (viewReminder) {
        view = viewReminder;
    };

    thisObject.updateModel = function () {
        view.updateView(thisObject);
    };

    thisObject.getName = function () {
        return data.name;
    };

    thisObject.setName = function (name) {
        data.name = name;
    };

    thisObject.getSurname = function () {
        return data.surname;
    };

    thisObject.setSurname = function (surname) {
        data.surname = surname;
    };

    thisObject.getCountry = function () {
        return data.country;
    };

    thisObject.setCountry = function (country) {
        data.country = country;
    };

    thisObject.getCountries = function () {
        return data.countries;
    }

    thisObject.setCountries = function (countries) {
        data.countries = countries;
    }

    /*
    thisObject.setDropdown = function () {
        for (var i=0; i < countries.length; i++){
            $('<option/>').val(countries[i]).html(countries[i]).appendTo('#countries');
        }
    }
*/

    return thisObject;
}
