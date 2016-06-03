/**
 * Parses all search results and highlights wikipedia links
 */
function highlightWikiLinks() {
    var listSuggestions = $('.g .rc');

    for (var i = 0; i < listSuggestions.length; i++) {
        var res = listSuggestions[i];
        var cite_url = $(res).find('.s div.f.kv._SWb ._Rm').text();
        if (cite_url.indexOf('wikipedia.') >= 0) {
            $(res).css({
                'border-left': 'solid 2px green',
                'padding-left': '1em'
            });
        }
    };
}

/**
 * A function that calls highlightWikiLinks() with a timeout
 * @param  {[type]} num   [ Number of iterations ]
 * @param  {[type]} value [ Increase in each iteration ]
 * @param  {[type]} begin [ Starting value ]
 */
function highlightWithTimeout (num, value, begin) {
    var total = begin;
    for (var i = 0; i < num; i++) {
        setTimeout(highlightWikiLinks, total);
        total = total + value;
    };
}

highlightWithTimeout(5, 300, 300);

$('body').on('keydown', '#lst-ib', function(event) {
    highlightWikiLinks();
});

$('body').on('click', 'a', function(event) {
    highlightWithTimeout(3, 300, 200);
});

$('#lst-ib').on('keydown', function(event) {
    highlightWikiLinks();
    if ( event.keyCode === 13 ) {
        setTimeout(highlightWikiLinks, 1200);
    }
});
