$(function() { ///date and time 
    function displayDate() {
        $("#currentDay").html(moment().format("LLLL"));
       }
       setInterval(displayDate, 1000);
})

$(".saveButton").click(function () {
    let input = $(this).siblings(".input-plans").val();
    let hour = $(this).siblings(".input-plans").attr("id");
    localStorage.setItem(input, hour);
})


$(function() { ///stored inputs for "input-plans"
    function currentPlans() {
        const inputPlans = $(".input-plans")
        $("").val(localStorage.getItem(""))
    }
})