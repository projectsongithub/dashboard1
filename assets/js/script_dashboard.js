$( document ).ready(function() {
    var  height_company = $(".card_company").height();
    $(".background_color").css("height",height_company*1.5);
    $('#example').DataTable(
        {
            "aLengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
            "iDisplayLength": 5,
        }
    );
    $(".card_close").on("click", function(){
        $(this).parent().css("display","none");
        $(".background_color").css("display","none");
    });

    $(".left_item p").on("click", function(){
        if( $(this).hasClass("change_input")){
            $(this).removeClass("change_input");
            $(this).parent().find("input").prop('disabled', true);
            $(this).parent().find("input").css("border","none");
        }
        else {
            $(this).addClass("change_input");
            $(this).parent().find("input").prop('disabled', false);
            $(this).parent().find("input").css("border", "1px solid #ccc");
        }
    });
    $(".left_item input").on("click", function(){
        $(this).val("");

    });
    $(".back_btn").on("click", function(){
        location.replace("tasks.html");
});


    $('.links').on("click", function () {

        $('.links').removeClass("active_item");
        $(this).addClass("active_item");

        });
    $(".settings_user").on("click", function () {
        $(".profile").slideToggle();
        $(".profile").css("display","flex");
        $(".search").css("display","none");



    });


   // $('#dtBasicExample').DataTable();
  //  $('.dataTables_length').addClass('bs-select');

    $(".nav-item").first().addClass( "active_item");
    $(".nav-item").on("click",function(){
        $( this ).toggleClass( "active_item");
   
        if( $(".nav-item").hasClass("active_item")){      
            $(".nav-item").removeClass( "active_item");
            $( this ).addClass( "active_item");
        }
    
    });
$(".navbar_btn p").on("click", function () {
    $(".navbar_user ul").slideToggle();
});
 $(".search_small").on("click", function () {
        $(".search").slideToggle();
     $(".profile").css("display","none");
 });

 $(".menu_burger").on("click", function (event) {
     event.stopPropagation();
        $(".aside").css("display", "block");
    });
 $(document).on("click", function(e){
     if ($(window).width() <= 768) {
         $(".aside").css("display", "none");
     }
 })

    $(".aside").mouseover(function(){

        $(".aside").addClass("open_menu");

    });
    $(".aside").mouseout(function(){

        $(".aside").removeClass("open_menu");

    });


});