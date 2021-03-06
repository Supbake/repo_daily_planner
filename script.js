const eightAM = document.querySelector("#\\38 ");
const nineAM = document.querySelector("#\\39 ");
const tenAM = document.querySelector("#\\31 0");
const elevenAM = document.querySelector("#\\31 1");
const twelvePM = document.querySelector("#\\31 2");
const onePM = document.querySelector("#\\31 3");
const twoPM = document.querySelector("#\\31 4");
const threePM = document.querySelector("#\\31 5");
const fourPM = document.querySelector("#\\31 6");
const fivePM = document.querySelector("#\\31 7");
const sixPM = document.querySelector("#\\31 8");
const sevenPM = document.querySelector("#\\31 9");
const eightPM = document.querySelector("#\\32 0");


const inputArry = [eightAM, nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM, sixPM, sevenPM, eightPM];

$(function() { ///date and time 
    function displayDate() {
        $("#currentDay").html(moment().format("LLLL"));
       }
       setInterval(displayDate, 1000);
       
    for (let i = 0; i < inputArry.length; i++) {
        inputArry[i].value = localStorage.getItem(`${i + 8}`);
    }
    const currentHour = moment().hours();
    
    $(".input-plans").each(function() {
        const timeOfDay = parseInt($(this).attr("id"));
        if (timeOfDay === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past"); 
        } else if (timeOfDay > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past"); 
        }else {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present"); 
            $(this).prop("disabled", true);
        }
    })
})

$(".saveButton").click(function () {
    const input = $(this).siblings(".input-plans").val();
    const hour = $(this).siblings(".input-plans").attr("id");
    localStorage.setItem(hour, input);
    
})

$(".clearButton").click(function () {
    localStorage.clear();
    location.reload();
})

