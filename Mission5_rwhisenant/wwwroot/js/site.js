// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
$(document).ready(function () {
    $('#playlistForm').submit(function (event) {
        event.preventDefault();
        var hours = $('#playlistLength').val();
        var costPerHour = 50;

        // Check if the entered hours are a positive number
        if ($.isNumeric(hours) && hours > 0) {
            var totalCost = hours * costPerHour;
            $('#costDisplay').text('Total Cost: $' + totalCost);
        } else {
            // Display an error message or handle the error as appropriate
            $('#costDisplay').text('Please enter a positive number for the length of the playlist.');
        }
    });
});




