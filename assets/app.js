$(document).ready(function () {
    var currentTime = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(currentTime);

    var times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

    times.forEach(time => {
        var timeCheck = window.localStorage.getItem(time);

        var currentHour = moment().hour()
        // console.log(currentHour)
        console.log(time)

        if(currentHour > time){
            $(`#${time}`).addClass("bg-danger text-light");
            $(`#${time}`).attr("disabled", true);
        } else if(currentHour === time) {
            $(`#${time}`).addClass("bg-secondary text-light");
        } else {
            $(`#${time}`).addClass("bg-success text-light");
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