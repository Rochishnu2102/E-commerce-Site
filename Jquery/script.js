$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".nav-items").toggleClass("hamMenu");
    })
    $(".arrow-down").click(function(){
        $(".dropdown-content").toggleClass("dropdown-content-toggle");
    })
})