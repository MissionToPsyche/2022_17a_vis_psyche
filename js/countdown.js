(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    month = day * 30, // assuming a month has 30 days
    year = day * 365; // assuming a year has 365 days

  const launchDate = new Date("October 5, 2023 00:00:00").getTime();    //Start of launch window, change to actual launch date if possible
  let x = setInterval(function () {
    const now = new Date().getTime(),
      distance = launchDate - now;
      
    if (distance > 0) {
      document.getElementById("headline").innerText = "Countdown to Launch Window";
      document.getElementById("years").innerText = (Math.floor(distance / year)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
      document.getElementById("months").innerText = (Math.floor((distance % year) / month)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
      document.getElementById("days").innerText = (Math.floor((distance % month) / day)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
        document.getElementById("hours").innerText = (Math.floor((distance % day) / hour)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
        document.getElementById("minutes").innerText = (Math.floor((distance % hour) / minute)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
        document.getElementById("seconds").innerText = (Math.floor((distance % minute) / second)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    } else {
      document.getElementById("headline").innerText = "Mission Time Elapsed";
      clearInterval(x);
      x = setInterval(function () {
        const now = new Date().getTime(),
          elapsed = now - launchDate;
        document.getElementById("years").innerText = (Math.floor(elapsed / year)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
        document.getElementById("months").innerText = (Math.floor((elapsed % year) / month)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
        document.getElementById("days").innerText = (Math.floor((elapsed % month) / day)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
          document.getElementById("hours").innerText = (Math.floor((elapsed % day) / hour)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
          document.getElementById("minutes").innerText = (Math.floor((elapsed % hour) / minute)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
          document.getElementById("seconds").innerText = (Math.floor((elapsed % minute) / second)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
      }, 1000);
    }
  }, 1000);
}());