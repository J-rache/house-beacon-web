"use strict";
// This site is static. Never turn a historical check into an implied live status.
// No telemetry, cookies, analytics, API credentials, or background network polling.
(function () {
  var observedAt = new Date("2026-10-19T08:24:00Z");
  var element = document.getElementById("freshness");
  if (!element || !Number.isFinite(observedAt.getTime())) return;
  var now = new Date();
  var elapsedMinutes = Math.max(0, Math.floor((now.getTime() - observedAt.getTime()) / 60000));
  var age;
  if (elapsedMinutes < 60) age = elapsedMinutes + " minute" + (elapsedMinutes === 1 ? "" : "s") + " ago";
  else if (elapsedMinutes < 1440) {
    var hours = Math.floor(elapsedMinutes / 60);
    age = hours + " hour" + (hours === 1 ? "" : "s") + " ago";
  } else {
    var days = Math.floor(elapsedMinutes / 1440);
    age = days + " day" + (days === 1 ? "" : "s") + " ago";
  }
  element.textContent = "Verified Oct 19, 2026 at approximately 08:24 UTC (" + age + "). This is a historical check, not live monitoring.";
})();