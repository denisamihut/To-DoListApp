$(document).ready(function () {
    var dt = new Date();
    document.getElementById('date-time').innerHTML = dt;

    var counter = 1;
    function enter_task() {
        var task_name = $('#enter_task').val();
        var task_duration = $('#enter_duration').val();
        var task_due_date = $('#enter_due_date').val();
        var task_type = $('#enter_task_type').val();
        var type1 = "Work Task";
        var type2 = "School Task";
        var type3 = "Household Task";



        $('#todo_list').append('<li class="pb-1 h5"><span>' + task_name + " " + task_duration + " " + task_due_date + " " + task_type + ' </span> <button type="button" class="btn btn-primary" id="edit' + counter + '"> <i class="fas fa-pencil"></i> Edit</button>' + " " + '<button type="button" class="done btn btn-danger" id="delete' + counter + '"> <i class="fas fa-trash"></i> Delete</button>' + '</li>');
       
       
        if (task_type == type1){
            $('#todo_work').append('<li class="pb-1 h5"><span>' + task_name + " " + task_duration + " " + task_due_date + " " + task_type + ' </span> <button type="button" class="btn btn-primary" id="editw' + counter + '"> <i class="fas fa-pencil"></i> Edit</button>' + " " + '<button type="button" class="done btn btn-danger" id="deletew' + counter + '"> <i class="fas fa-trash"></i> Delete</button>' + '</li>');    
        }
        if (task_type == type2){
            $('#todo_home').append('<li class="pb-1 h5"><span>' + task_name + " " + task_duration + " " + task_due_date + " " + task_type + ' </span> <button type="button" class="btn btn-primary" id="edith' + counter + '"> <i class="fas fa-pencil"></i> Edit</button>' + " " + '<button type="button" class="done btn btn-danger" id="deleteh' + counter + '"> <i class="fas fa-trash"></i> Delete</button>' + '</li>');    
        }
        if (task_type == type3){
            $('#todo_school').append('<li class="pb-1 h5"><span>' + task_name + " " + task_duration + " " + task_due_date + " " + task_type + ' </span> <button type="button" class="btn btn-primary" id="edits' + counter + '"> <i class="fas fa-pencil"></i> Edit</button>' + " " + '<button type="button" class="done btn btn-danger" id="deletes' + counter + '"> <i class="fas fa-trash"></i> Delete</button>' + '</li>');    
        }


        $('#edit' + counter).click(function () {
            $(this).prev().attr('contenteditable', 'true');
            $(this).prev().focus();
        });
        $('#editw' + counter).click(function () {
            $(this).prev().attr('contenteditable', 'true');
            $(this).prev().focus();
        });
        $('#edith' + counter).click(function () {
            $(this).prev().attr('contenteditable', 'true');
            $(this).prev().focus();
        });
        $('#edits' + counter).click(function () {
            $(this).prev().attr('contenteditable', 'true');
            $(this).prev().focus();
        });
        $('#delete' + counter).click(function () {
            $(this).parent().remove();
        });
        $('#deletew' + counter).click(function () {
            $(this).parent().remove();
        });
        $('#deleteh' + counter).click(function () {
            $(this).parent().remove();
        });
        $('#deletes' + counter).click(function () {
            $(this).parent().remove();
        });
        counter++;
    };
    $(function () {
        $('#add').on('click', enter_task);
    });
});