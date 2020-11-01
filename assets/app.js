$(document).ready(function () {
    var currentTime = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(currentTime);
    $("button").addClass("bg-white text-dark");
    $("span").addClass("bg-white text-dark");

    var times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    times.forEach(time => {
        var timeCheck = window.localStorage.getItem(time);
        var currentHour = moment().hour()

        if(currentHour > time){
            $(`#${time}`).addClass("bg-muted text-muted");
            $(`#${time}`).attr("disabled", true);
        } else if(currentHour === time) {
            $(`#${time}`).addClass("bg-white text-dark font-weight-bold");
        } else {
            $(`#${time}`).addClass("bg-info text-light");
        }

        if(timeCheck === null) {
            window.localStorage.setItem(time, "");
        } else if(timeCheck.length > 0){
            $(`#${time}`).attr("value", window.localStorage.getItem(time))
        } 
    });

    $("form").on("submit", function(event) {
        event.preventDefault()
        var time = event.target.querySelector("input").getAttribute("id");
        var text = event.target.querySelector("input").value;

        window.localStorage.setItem(time, text);
    });
})