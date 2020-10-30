$(function(){
    // Select

    $('.custom-select').select2({
        minimumResultsForSearch: -1
    });

    $('.menu_item .more').on('click',function(e){
        e.preventDefault();
        $('.inner_menu').show();
        $('.overlay').show();
    })
    $('.overlay, .inner_menu_list a').on('click',function(e){
        e.preventDefault();
        $('.inner_menu').hide();
        $('.overlay').hide();    
    })    
  

    $('.slide_btn').on('click',function(){
        $('.apotheke-wrapper').slideToggle();
        $(this).parent().toggleClass('active');
    })

});