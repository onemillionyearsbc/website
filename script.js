
$(document).ready(function () {
    $(".btn").click(function () {
        $("nav ul").slideToggle(1000);
        $('.btn').toggleClass('turn')
    })
})



//$(document).ready(function () {
//    
//    $('.btn').click(changeNav);
//    
//    function changeNav(){
//        $('nav ul').toggle(1000);
//        $('#btn').toggleClass('turn')
//    }
//})
