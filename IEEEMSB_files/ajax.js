$(document).ready(function () {
    $('#myForm').on('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var emaill = $('#Email').val();
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdLHIhaieySY7_qmzDJBQljk6JyHC9dco0UpSHzBKPxuvMPbQ/formResponse",
            data: { "emailAddress": emaill },
            type: "POST",
            dataType: "xml",
            success: x()
        });
    });
});
function x() {
    var email = document.forms["myForm"]["emailAddress"].value;

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
    if (re.test(email)) {
        $('#done').show();
        $('#Email').val('');
        $('#done2').hide();
        $('#error').hide();
    } else {
        $('#error').show();
    }

}


