$("#sendmail").on("click", function() {
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();

    if(name == "") {
        $("#errormess").text("Заполните поле (Имя)");
        return false;
    }

    else if(email == "") {
        $("#errormess").text("Заполните поле (Email адрес)");
        return false;
    }

    else if(phone == "") {
        $("#errormess").text("Заполните поле (Телефон)");
        return false;
    }

    $("#errormess").text("");

    $.ajax({
        url:'php/mail.php',
        type: 'POST',
        cache: false,
        data: {'name': name, 'email': email, 'phone': phone},
        datatype: 'html',
        beforesend: function() {

            $("#sendmail").prop("disabled", true);
        },
        success: function(data){
            if(!data)
                alert("Отправка не удалась. Пожалуйста, исправьте ошибки и попробуйте еще раз.");
            else
                $("#mailform").trigger("reset");
                $("#sendmail").prop("disabled", false);
                $("#errormess").text("Спасибо! Ваше сообщение отправлено. В ближайшее время с вами свяжется наш консультант.");
        }
    })
});
