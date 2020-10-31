var currentTime = moment().format('MMMM Do YYYY, h:mm a')
console.log(currentTime)

$("#currentDay").text(currentTime);

$("form").on("submit", function(event) {
    event.preventDefault()
    console.log(event.target);
});