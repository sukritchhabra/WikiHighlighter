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

highlightWikiLinks(); // If link opened already has a wiki result

$('body').on('keydown', '.gsfi', function(event) {
    highlightWikiLinks();
    if ( event.which === 13 ) {
        highlightWikiLinks();
    }
});

$('.gsfi').on('keydown', function(event) {
    highlightWikiLinks();
});
