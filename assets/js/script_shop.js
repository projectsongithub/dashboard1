$(document).ready(function () {

    //shop.html
    $(".link_more_pics").on("click", function () {
        $(".see_more_part").css("display", "flex");

    });

    $(".item ul li").on("click", function () {

        $(".item ul li").removeClass("active_color");
        $(this).addClass("active_color");

    });

    $('.owl_three').owlCarousel({


        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 4,
                nav: true
            },
            1000: {
                items: 4,
                nav: true,
            }
        }
    });

    $(".item1").on("click", function () {
        var img_src = $(this).find("img").attr("src");
        $(".main_pic").find('img').attr('src', img_src);
    });

//    card


    $(".plus").on("click", function(){
        $(".minus").prop('disabled',false);
        var value_input = $(this).parent().find((".card_value")).val();
        value_input++;
        $(this).parent().find((".card_value")).val(value_input);
    });

    $(".minus").on("click", function(){
        var value_input=  $(this).parent().find((".card_value")).val();
        if(value_input==1){
            $(".minus").prop('disabled',true);
        }
        else if(value_input>1){
            $(".minus").prop('disabled',false);
            value_input--;
            $(this).parent().find((".card_value")).val(value_input);
        }
    });



});