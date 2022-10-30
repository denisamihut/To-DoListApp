$("input[type='text']").keypress(function (e) {
    if (e.which === 13) {
        var todoText = $(this).val();
        if ($(this).val() !== "") {
            $("#list").append("<li>" + todoText + "</li>");
        }
        $(this).val("");
    }
});
// $(".add").click(function () {
//     $("input[type='text']").fadeToggle(200);
// });
$(document).ready(function(){
    $('#inp').hide();
    $('#add').click(function() {
        $('#inp').show();
    });});