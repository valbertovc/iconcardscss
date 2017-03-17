function scrollToId(id){
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
}
jQuery(document).ready(function ($) {
    $('.navbar[data-spy="scroll-nav"] a').each(function() {
        $(this).click(function(){
            var id = $(this).attr('href');
            scrollToId(id);
            return false;
        });
    });
});