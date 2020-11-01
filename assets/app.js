$(document).ready(function () {
    var currentTime = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(currentTime);

    var times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

    times.forEach(time => {
        var timeCheck = window.localStorage.getItem(time);
        console.log(timeCheck);
        if(timeCheck === null) {
            window.localStorage.setItem(time, "");
        }
    });

    $("form").on("submit", function(event) {
        event.preventDefault()
        console.log(event.target.querySelector("input").getAttribute("id"));
        console.log(event.target.querySelector("input").value)
    });
})