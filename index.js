const test = document.querySelectorAll(".drum");

for (let i = 0; i < test.length; i++) {
  test[i].addEventListener("click", function () {
    let button = this.innerHTML;
    musicPlay(button);
    animation(button);
  });
}

document.addEventListener("keydown", function (e) {
  const key = e.key;
  musicPlay(key);
  animation(key);
});

function musicPlay(key) {
  switch (key) {
    case "w":
      const audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;

    case "a":
      const audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;

    case "s":
      const audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;

    case "d":
      const audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;

    case "j":
      const audio5 = new Audio("sounds/snare.mp3");
      audio5.play();
      break;

    case "k":
      const audio6 = new Audio("sounds/crash.mp3");
      audio6.play();
      break;

    case "l":
      const audio7 = new Audio("sounds/kick-bass.mp3");
      audio7.play();
      break;

    default:
      console.log(key);
  }
}

function animation(keys) {
  const test = document.querySelector("." + keys);

  test.classList.add("pressed");

  setTimeout(function () {
    test.classList.remove("pressed");
  }, 100);
}
