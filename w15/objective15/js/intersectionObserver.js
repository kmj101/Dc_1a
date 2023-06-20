const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.15],
};

const callback = (aaaaaaaaaa, observer) => {
  aaaaaaaaaa.forEach((trigger) => {
    if (trigger.isIntersecting) {
      trigger.target.classList.add("triggered");
    } else {
      trigger.target.classList.remove(
        "triggered"
      );
    }
  });
};

const gggggg = new IntersectionObserver(
  callback,
  options
);

const animTriggers = document.querySelectorAll(
  ".animTrigger"
);
animTriggers.forEach((aaaa) => {
  gggggg.observe(aaaa);
});

window.onload = function () {
  var el = document.getElementById("animTrigger");
  el.onclick = hello;
};

function hello() {
  alert(
    "게임을 설치하기 위해선 로그인이 필요합니다."
  );
}
