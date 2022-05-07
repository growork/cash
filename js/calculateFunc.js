function calculateFunc() {
    var ratePerHour = parseFloat(document.getElementById("rate-per-hour").value);
    var hours = parseFloat(document.getElementById("hours").value);
    var doublePay = parseFloat(document.getElementById("double-pay").value);
    var planProc = Math.round(parseFloat(document.getElementById("plan").value)) / 100;
    var duty = parseFloat(document.getElementById("duty").value);

    // Расчёт коэффициента тайного покупателя
    var mysteryShopper = Math.round(parseFloat(document.getElementById("mystery-shopper").value)) / 100;
    if (mysteryShopper >= 0.6) {
        mysteryShopper = 0.6 + (mysteryShopper - 0.6) * 2;
    } else {
        mysteryShopper = 0;
    }

    // Расчёт коэффициента плана
    if ((planProc >= 0.8) && (planProc <= 1)) {
        var plan = planProc;
    } else if (planProc > 1) {
        if (planProc > 1.6) {
            planProc = 1.6;
        }
        var plan = 1 + ((planProc - 1) * 2);
    } else {
        var plan = 0;

    }

    
    var salary = Math.round(parseFloat(hours * ratePerHour));
    duty = duty * ratePerHour * 0.2;
    doublePay = doublePay * ratePerHour;

    var basePrem = Math.round(parseFloat(salary * 0.3));
    var forPay = ((salary + (basePrem * plan * 0.6 + basePrem * mysteryShopper * 0.4)) + doublePay + duty) * 0.87;

    alert("К выплате: ~" + Math.round(forPay));
}
