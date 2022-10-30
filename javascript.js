$("input[type='text']").keypress(function (e) {
    if (e.which === 13) {
      var todoText = $(this).val();
      if ($(this).val() !== "") {
        $("ul").append("<li>"+" class='list-group-item'>" + todoText + "</li>");
    }
    $(this).val("");
    }
  });
  $(".add").click(function () {
    $("input[type='text']").fadeToggle(200);
  });  
  