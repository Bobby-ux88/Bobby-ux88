const moon = document.getElementById("moon");
const stars = document.getElementById("stars");
const emoji = document.getElementById("emoji");

// add touchstart event listener to moon
moon.addEventListener("touchstart", function(e) {
  // prevent default touch behavior
  e.preventDefault();
  // toggle moon and sun classes
  moon.classList.toggle("sun");
  // toggle star visibility
  stars.classList.toggle("hidden");
  // toggle background color
  document.body.classList.toggle("day");
  // toggle emoji
  emoji.innerHTML = "&#x1F601;";
});
