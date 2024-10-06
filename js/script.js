$(document).ready(function() {
    // Funkcja do przenoszenia ostatniego paragrafu na początek
    $('#moveLastToFirst').click(function() {
        // Pobieramy ostatni paragraf
        var lastParagraph = $('p').last();
        // Przenosimy go na początek
        lastParagraph.prependTo('body');
    });

    // Funkcja do przenoszenia pierwszego paragrafu na koniec
    $('#moveFirstToLast').click(function() {
        // Pobieramy pierwszy paragraf
        var firstParagraph = $('p').first();
        // Przenosimy go na koniec
        firstParagraph.appendTo('body');
    });
});