    function showHide(active) {
      if (active == 'procent') {
        if (document.getElementById('survey')){
          document.getElementById('survey').parentNode.removeChild(survey);
        }
        var obj_show = document.createElement('p');
        obj_show.innerHTML = "<div id='myst'><p class='input-name'>Процент тайника</p><input type='number' value='' class='form-element' id='mystery-shopper'></div>";
        document.getElementById("mystery-shopper-block").appendChild(obj_show);
      } else {
        if (document.getElementById('myst')){
          document.getElementById('myst').parentNode.removeChild(myst);
        }
        var obj_hide = document.createElement('p');
        obj_hide.innerHTML = "<div id='survey'><p class='input-name'>Коэффициент опроса</p><input type='number' value='' class='form-element' id='mystery-shopper'></div>";
        document.getElementById("mystery-shopper-block").appendChild(obj_hide);
      }
    }