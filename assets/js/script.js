$(document).ready(function () {

    $('.owl-one').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 2,
                nav: true,
                loop: false
            }
        }
    });

    // input search

    $("#submit_btn").on("click", function () {
        if ($("#search_amount").val()) {
            $(".amount_content").css("display", "flex");
            $(".insurance").css("display", "none");
        }
    })


    $("#news_submit_btn").on("click", function () {
        if ($("#news_search_amount").val()) {
            $(".news_amount_content").css("display", "flex");
            $(".news_job").css("display", "none");
        }
    })

//    menu height
    var height = $(".navbar_fixed").height();
    $(".menu-burger").css("top", height);

    $(".height_menu").css("margin-top", height);

//collapse menu

    $(".menu_toggle").on('click', function () {
        $(".menu_toggle").toggleClass("active");
        $(".menu-burger").toggleClass("showburger");
    });
    $(window).scroll(function () {

        $(".menu-burger").removeClass("showburger");
        $(".menu_toggle").removeClass("active");

    });

//

//scroll

    $(".dropdown-item").on("click", function () {
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top
        }, 1000);

    });

    $(".btn_next").on("click", function () {
        if ($(this).closest(".step").next()) {

            $(this).closest(".step").css("display", "none");
            $(this).closest(".step").next().css("display", "flex");
        }


    });

    //
    //
    // $(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});

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
    })
});