//1 open mobile menu
$("#hamburger").on("click", function (e) {
    if ($("#nav").hasClass("display")) {
        $("#nav").removeClass("display");
        $("#nav").addClass("no-display");
        $("#hamburgerIcon").attr("src", "images/hamburger.svg");
    } else {
        $("#nav").removeClass("no-display");
        $("#nav").addClass("display");
        $("#hamburgerIcon").attr("src", "images/delete.svg");
    }

    e.preventDefault();
});

//2 close mobile menu on nav item click if screen is smaller than 880px
$("nav a").on("click", function (e) {
    if ($(window).width() < 880) {
        $("#nav").addClass("no-display");
        $("#hamburgerIcon").attr("src", "images/hamburger.svg");
    } else {
        $("#nav").addClass("display");
    }
});


//3 slideshow
var slider;

clearInterval(slider);

var counter = 1;
slider = setInterval(function (e) {
    counter++;
    if (counter > 3) {
        counter = 1;
    }
    document.querySelector("#slide1").setAttribute("src", `images/hotelroomstandaard${counter}.jpg`);
    document.querySelector("#slide2").setAttribute("src", `images/hotelroomsuperior${counter}.jpg`);
    document.querySelector("#slide3").setAttribute("src", `images/hotelroomfamily${counter}.jpg`);
}, 3000);




//4 group sale
var personen = $("#aantalPersonen");
var price = $("#price");
var discount;

$("#aantalPersonen").on("change", function(e){
    for(var i = 4; i <= 10; i++) {
        if(personen.val() == i) {
            price.html("Je geniet van " + parseInt(i-1) + "% korting op het totaalbedrag.");
        }

        else if(personen.val() < 4){
            price.html("Korting geldig vanaf 4 personen.")
        }
    }
});

/* 
$("#aantalPersonen").on("change", function(e){
    if(personen.val() == 4) {
        price.html("Je geniet van 3% korting op het totaalbedrag.");
    }

    else if(personen.val() == 5) {
        price.html("Je geniet van 4% korting op het totaalbedrag.");
    }

    else if(personen.val() == 6) {
        price.html("Je geniet van 5% korting op het totaalbedrag.");
    }

    else if(personen.val() == 7) {
        price.html("Je geniet van 6% korting op het totaalbedrag.");
    }

    else if(personen.val() == 8) {
        price.html("Je geniet van 7% korting op het totaalbedrag.");
    }

    else if(personen.val() == 9) {
        price.html("Je geniet van 8% korting op het totaalbedrag.");
    }

    else if(personen.val() == 10) {
        price.html("Je geniet van 9% korting op het totaalbedrag.");
    }

    else {
        price.html("Korting geldig vanaf 4 personen.");
    }
});
*/

//5 form validator
$("#email").on("keyup", function(e){
    if($(this).val().includes(".be", "@") || $(this).val().includes(".com", "@")) {
        $(this).css("borderBottom", "2px solid #d3d3d3");
    }

    else if($(this).val().includes("@")) {
        $(this).css("borderBottom", "2px solid orange");
    }

    else {
        $(this).css("borderBottom", "2px solid red");
    }
});

$("#firstname").on("keyup", function(e){
    if($(this).val() !== "") {
        $(this).css("borderBottom", "2px solid #d3d3d3");
    }

    else {
        $(this).css("borderBottom", "2px solid red");
    }
});

$("#lastname").on("keyup", function(e){
    if($(this).val() !== "") {
        $(this).css("borderBottom", "2px solid #d3d3d3");
    }

    else {
        $(this).css("borderBottom", "2px solid red");
    }
});

$("#telephone").on("keyup", function(e){
    if($(this).val() !== "" && $(this).val().match(/^[0-9]+$/) && $(this).val().length == 10) {
        $(this).css("borderBottom", "2px solid #d3d3d3");
    }
    else {
        $(this).css("borderBottom", "2px solid red");
    }
});

var firstname = $("#firstname");
var lastname = $("#lastname");
var email = $("#email");
var phone = $("#telephone");

$("#submit").on("click", function(e){
    if(firstname.val() == "" || lastname.val() == "" || email.val() == "" || phone.val() == "") {
        firstname.css("borderBottom", "2px solid red");
        lastname.css("borderBottom", "2px solid red");
        email.css("borderBottom", "2px solid red");
        phone.css("borderBottom", "2px solid red");
        e.preventDefault();
    }
});