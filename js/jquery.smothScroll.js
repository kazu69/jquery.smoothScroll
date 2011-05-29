(function($) {
    $('a[href^=#]').bind('click',function(){
        //default
        var pagetopId = 'pagetop';
        var scrollDuration = 500;
        var animation = 'swing';
        var hash = this.hash;

        if(!hash ||'#' == hash) return false;
        if(hash.match(pagetopId)){ hash = 'body' }
        $('body,html,document').animate({scrollTop:$(hash).offset().top},scrollDuration,animation);
    });
})(jQuery);