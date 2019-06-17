$( document ).ready(function() {

    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:2,
                nav:true,
                loop:false
            }
        }
    });

   // input search

    $("#submit_btn").on("click", function(){
        if($("#search_amount").val()) {
            $(".amount_content").css("display", "flex");
            $(".insurance").css("display", "none");
        }
    })



    $("#news_submit_btn").on("click", function(){
        if($("#news_search_amount").val()) {
            $(".news_amount_content").css("display", "flex");
            $(".news_job").css("display", "none");
        }
    })

//    menu height
    var height = $(".navbar_fixed").height();
    $(".menu-burger").css("top",height);

$(".height_menu").css("margin-top",height);

//collapse menu

    $(".menu_toggle").on('click', function(){
        $(".menu_toggle").toggleClass("active");
        $(".menu-burger").toggleClass("showburger");
    });
    $(window).scroll(function (){

        $(".menu-burger").removeClass("showburger");
        $(".menu_toggle").removeClass("active");

    });

//

//scroll

    $(".dropdown-item").on("click", function(){
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top
        }, 1000);

    });

$(".btn_next").on("click", function(){
    if($(this).closest(".step").next()) {

        $(this).closest(".step").css("display", "none");
        $(this).closest(".step").next().css("display", "flex");
    }



    });



    //$(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});

    //faq.html


    $('.question').click(function () {

        $(".faq_item").find('.collapse_content').slideUp(500);
        $(".faq_item").find('.plus-minus-toggle .fas').removeClass('collapsed');

       if( $(this).parent().find('.collapse_content').is(':visible'))
        {
            if($(this).find('.plus-minus-toggle .fas').hasClass("collapsed")){

                $(this).find('.plus-minus-toggle .fas').removeClass('collapsed');
                $(this).parent().find('.collapse_content').slideUp(500);
            }
        }
        else{
           $(this).find('.plus-minus-toggle .fas').addClass('collapsed');
           $(this).parent().find('.collapse_content').slideDown(500);
       }

    });





});