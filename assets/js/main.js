$(document).ready(function(){
    
    // Register Next
    $(".btn-register").click(function(){
        $(this).closest(".card").next().removeClass("u-display-none").addClass("u-display-block");
        $(this).closest(".card").addClass("u-display-none").removeClass("u-display-block");
    });

});