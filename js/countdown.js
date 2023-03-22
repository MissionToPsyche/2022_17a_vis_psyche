(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const launchDate = new Date("October 5, 2023 00:00:00").getTime();
  let x = setInterval(function () {
    const now = new Date().getTime(),
      distance = launchDate - now;
      
    if (distance > 0) {
      document.getElementById("headline").innerText = "Countdown to Launch Window";
      document.getElementById("days").innerText = Math.floor(distance / day),
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour),
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute),
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
    } else {
      document.getElementById("headline").innerText = "Mission Time Elapsed";
      clearInterval(x);
      x = setInterval(function () {
        const now = new Date().getTime(),
          elapsed = now - launchDate;
        document.getElementById("days").innerText = Math.floor(elapsed / day),
          document.getElementById("hours").innerText = Math.floor((elapsed % day) / hour),
          document.getElementById("minutes").innerText = Math.floor((elapsed % hour) / minute),
          document.getElementById("seconds").innerText = Math.floor((elapsed % minute) / second);
      }, 1000);
    }
  }, 1000);
}());