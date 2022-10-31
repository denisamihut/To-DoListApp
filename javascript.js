$(document).ready(function () {
    $('#inp').hide();
    // $('#add').click(function () {
    //     $('#inp').show();
    // });
    $(function () {
        $('#add').on('click', enter_task);
    });

    var counter = 1;
    function enter_task() {
        var text = $('#enter_task').val();
        $('#todo_list').append('<li><span>' + text + ' </span> <button type="button" class="btn btn-primary" id="edit' + counter + '"> Edit</button>' + " " + '<button type="button" class="done btn btn-danger" id="delete' + counter + '"> Delete</button>' + '</li>');

        $('#edit' + counter).click(function () {
            $(this).prev().attr('contenteditable', 'true');
            $(this).prev().focus();
        });

        $('#delete' + counter).click(function () {
            $(this).parent().remove();
        });

        counter++;
    };
});