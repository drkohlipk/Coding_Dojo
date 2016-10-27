$(document).ready(function(){
$('#firstN').focus(); //put cursors at and highlight the first name box
$('table').hide(); //hide the table
    $('form').submit(function() { //when the form is submitted
        if ($('#firstN').val() === "" || $('#lastN').val() === "" || $('#email').val() === "" || $('#phone').val() === "") { //if any of the fields are empty
            alert('One of the fields is blank!  Please fill out all fields to continue.'); //alert the user to this
            $('#firstN').focus(); //put focus back on the first text field
            return false; //don't leave the page!
        } else { //if all fields are filled in
            $('main').css('width', '800px'); //change the width of the app box
            $('table').show(); //unhide the table
            $('table').append('<tr><td>' + $('#firstN').val() + '</td><td>' + $('#lastN').val() + '</td><td>' + $('#email').val() + '</td><td>' + $('#phone').val() + '</td></tr>'); //add in the appropriate information
            $('input').val(''); //reset the input fields
            $('#add').val('Add User'); //make sure the value for the button isn't reset!
            $('#firstN').focus(); //put focus back on the first text field
            return false; //don't leave/refresh the page!
        } //else
    }); //submit function
}); //on page load function
