function showHide(active) {
    if (active == 'procent') {
        if (document.getElementById('survey')) {
            document.getElementById('survey').parentNode.removeChild(survey);
        }
        var obj_show = document.createElement('p');
        obj_show.innerHTML = "<p class='input-name' id='myst'>Процент тайника<input type='text' pattern='^(\d+([.,]?\d+)*){1}$' value='' class='form-element' id='mystery-shopper'></p>";
        document.getElementById("mystery-shopper-block").appendChild(obj_show);
    } else {
        if (document.getElementById('myst')) {
            document.getElementById('myst').parentNode.removeChild(myst);
        }
        var obj_hide = document.createElement('p');
        obj_hide.innerHTML = "<p class='input-name' id='survey'>Коэффициент опроса<input type='text' pattern='^(\d+([.,]?\d+)*){1}$' value='' class='form-element' id='polling-rate'></p>";
        document.getElementById("mystery-shopper-block").appendChild(obj_hide);
    }
}
