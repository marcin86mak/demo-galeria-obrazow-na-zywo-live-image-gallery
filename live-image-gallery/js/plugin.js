const popup = {
    init: function(){
        $('figure').click(function(){
            popup.open($(this));
        });

        $(document).on('click', '.popup img', function(){
            return false;
        }).on('click', '.popup', function(){
            popup.close();
        })
    },
    open: function($figure) {
        $('.gallery').addClass('pop');
        const $popup = $('<div class="popup" />').appendTo($('body'));
        const $fig = $figure.clone().appendTo($('.popup'));
        const $bg = $('<div class="bg" />').appendTo($('.popup'));
        const $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
        const $shadow = $('<div class="shadow" />').appendTo($fig);
        const src = $('img', $fig).attr('src');
        $shadow.css({backgroundImage: 'url(' + src + ')'});
        $bg.css({backgroundImage: 'url(' + src + ')'});
        setTimeout(function(){
            $('.popup').addClass('pop');
        }, 10);
    },
    close: function(){
        $('.gallery, .popup').removeClass('pop');
        setTimeout(function(){
            $('.popup').remove()
        }, 100);
    }
}

popup.init()