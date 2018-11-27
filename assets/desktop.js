import 'expose-loader?$!expose-loader?jQuery!jquery';
import 'expose-loader?Cookies!js-cookie';
import Swiper from 'swiper/dist/js/swiper.js';

let form = (function() {
    $('input, textarea').each(function(index, el) {
        if ($(this).val() === '') {
            $(this).removeClass('full');
        } else {
            $(this).addClass('full');
        }
    }).on('keydown', function() {
        $(this).parent().removeClass('error success');
    }).on('focusout change', function() {
        // ждем пока mask отработает
        setTimeout(() => {
            if ($(this).val() === '') {
                $(this).removeClass('full');
            } else {
                $(this).addClass('full');
            }
        }, 0);
    });
})();
