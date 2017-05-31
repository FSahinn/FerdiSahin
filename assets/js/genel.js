jQuery(document).ready(function($) {

    $('#ust .menubuton .fa').click(function(){
        $('#menu').slideToggle(); 
    });
    
    $('#menu .arama .fa').click(function() {
        $('#menu ul.menu').toggle();
        $('#menu .arama').toggleClass('genis');
    });
    
    $("#icerik .sidebar, #icerik .sol-alan").stick_in_parent({
        offset_top: 20,
    });
    
    $('#icerik.single .tab-alan ul.tab li').click(function() {
        var tab_id = $(this).attr('veri-tab');
        $('#icerik.single .tab-alan ul.tab li').removeClass('aktif');
        $('#icerik.single .tab-alan .tab-ic').removeClass('aktif');

        $(this).addClass('aktif');
        $("#"+tab_id).addClass('aktif');
    });      

    $("img.lazy").lazyload();
});
