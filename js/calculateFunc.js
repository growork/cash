    function calculateFunc() {
      var ratePerHour = parseFloat(document.getElementById("rate-per-hour").value);
      var hours = parseFloat(document.getElementById("hours").value);
      var doublePay = parseFloat(document.getElementById("double-pay").value);
      var planProc = parseFloat(document.getElementById("plan").value/100);
      var mysteryShopper = 0.6+((parseFloat(document.getElementById("mystery-shopper").value)/100)-0.6)*2;

      var salary = hours*ratePerHour;
      doublePay = doublePay*ratePerHour;

      if (planProc>=100) {
        var plan=1+(planProc-1)*2;
      } else {
        var plan=planProc;
      }
      
      var forPay = ((salary*0.433*(plan*0.6+mysteryShopper*0.4)+salary)+doublePay)*0.87;

      alert("К выплате: ~"+(parseInt(forPay)));
    }
    