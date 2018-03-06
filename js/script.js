/*---timer---*/
document.addEventListener("DOMContentLoaded", function (event) {
    var fullTime = new Date().getTime() + 139200000; 
    $('.countdown-container').countdown(fullTime, function (event) {
        $(this).html(event.strftime(
            '<span class="time time_days">%D</span>'
            + '<span class="time time_hours">%H</span>'
            + '<span class="time time_minutes">%M</span>'
            + '<span class="time time_seconds">%S</span>'));
    })})
