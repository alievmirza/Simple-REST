function ReminderView(reminderModel) {

    var thisObject = this;
    var model = reminderModel;

    thisObject.updateView = function (model) {
        thisObject.updateNameInput(model);
        thisObject.updateSurnameInput(model);
        thisObject.updateSubmitButton(model);
        updateDropdown("countries", model.getCountries());
        thisObject.updateCountrySelected(model);
    };


    thisObject.updateNameInput = function (model) {
        var id_NameInput = "input_Name";
        var inputName = $("#" + id_NameInput);
        inputName.val(model.getName());
        inputName.change(function () {
            var val = inputName.val();
            model.setName(val);
        })

    };

    thisObject.updateSurnameInput = function (model) {
        var id_SurnameInput = "input_Surname";
        var inputSurname = $("#" + id_SurnameInput);
        inputSurname.val(model.getSurname());
        inputSurname.change(function () {
            var val = inputSurname.val();
            model.setSurname(val);
        })

    };

    thisObject.updateSubmitButton = function (model) {
        var submit_Btn = "submitBtn";
        var btnField = $("#" + submit_Btn);
        btnField.unbind();
        var output = "output"
        btnField.click(function () {
            $("#" + output).html("Hello " + model.getName() + " " + model.getSurname()
            + " " + "from " + model.getCountry() );
            //alert(model.getName());
        })

    };


    thisObject.updateCountrySelected = function (model) {
        var country = "countries";
        var selectedCountry = $("#" + country);

        selectedCountry.val(model.getCountry());
        selectedCountry.change(function () {
            var val = selectedCountry.val();
            model.setCountry(val);
        })
    };

    function updateDropdown(dropDownField, countries) {
        var option = "";
        for (var i=0; i < countries.length; i++){
            option += '<option value="'+ countries[i] + '">' + countries[i] + '</option>';
        }
        $("#" + dropDownField).append(option);
    };
    return thisObject;
}
