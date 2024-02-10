// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
$(document).ready(function () {
    $('#playlistForm').submit(function (event) {
        event.preventDefault();
        var hours = $('#playlistLength').val();
        var costPerHour = 50;

        if ($.isNumeric(hours) && hours > 0) {
            var totalCost = hours * costPerHour;

            $('#costDisplay').val(totalCost); // This now correctly targets the input box.
        } else {
            alert('Please enter a positive number for the length of the playlist.'); // Example error handling
        }
    });
});




