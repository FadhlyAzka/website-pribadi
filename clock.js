// Live Jakarta time (GMT+7)
var clockEl = document.getElementById('clock');
function updateClock() {
    var now = new Date();
    var options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: true };
    var time = new Intl.DateTimeFormat('en-US', options).format(now);
    clockEl.textContent = "GMT +7; Jakarta\n" + time;
}
updateClock();
setInterval(updateClock, 1000);