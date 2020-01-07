function calculateFunc() {
    var ratePerHour = parseFloat(document.getElementById("rate-per-hour").value);
    var hours = parseFloat(document.getElementById("hours").value);
    var doublePay = parseFloat(document.getElementById("double-pay").value);
    var planProc = (parseFloat(document.getElementById("plan").value)) / 100;
    var mysteryShopper = parseFloat(document.getElementById("mystery-shopper").value);
    var duty = parseFloat(document.getElementById("duty").value);

    if (document.getElementById('myst')) {
        mysteryShopper = mysteryShopper / 100;
    }

    if ((mysteryShopper >= 0.6) && (mysteryShopper < 0.8)) {
        mysteryShopper = 0.6 + (mysteryShopper - 0.6) * 2;
    } else if (mysteryShopper >= 0.8) {
        mysteryShopper = 1;
    } else {
        mysteryShopper = 0;
    }

   
    var salary = Math.round(parseFloat(hours * ratePerHour));

    if ((planProc >= 0.8) && (planProc <= 1)) {
        var plan = planProc;
    } else if (planProc > 1) {
        var plan = 1 + ((planProc - 1) * 2);
    } else {
        var plan = 0;

    }

    duty = duty * ratePerHour * 0.2;
    doublePay = doublePay * ratePerHour;

    var basePrem = salary * 0.433;
    var forPay = ((salary + (basePrem * plan * 0.6 + basePrem * mysteryShopper * 0.4)) + doublePay + duty) * 0.87;

    alert("К выплате: ~" + Math.round(forPay));
}
