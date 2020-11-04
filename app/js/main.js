$(function(){
    // Select

    $('.custom-select').select2({
        minimumResultsForSearch: -1
    });

    $('.menu_item .more').on('click',function(e){
        e.preventDefault();
        $('.inner_menu').show();
        $('.overlay').addClass('active');
    })
    $('.overlay, .inner_menu_list a').on('click',function(e){
        e.preventDefault();
        $('.inner_menu').hide();
        $('.overlay').removeClass('active');    
    })    
  

    $('.slide_btn').on('click',function(){
        $('.apotheke_side_bar').toggle('slide');
        $(this).parent().toggleClass('active');
        $(this).toggleClass('active');
    })

    $('.btn-arrow').on('click',function(e){
        e.preventDefault();
        $('.apotheke_side_bar').slideToggle();
        $(this).toggleClass('active');
    });
 
//Menu

    let sideNav = document.getElementById("mobile-menu");

    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        sideNav.style.left = "0px";
        $('body').addClass('disable');
        $('.overlay').addClass('active');
    });
    $('.close-menu').on('click', function (e) {
        e.preventDefault();
        sideNav.style.left = "-310px";
        $('body').removeClass('disable');
        $('.overlay').removeClass('active');
    });

    $('.overlay').on('click',function(){
        // debugger;
        $('body').removeClass('disable');
        sideNav.style.left = "-310px";
        $(this).removeClass('active');  
    });
  

});