document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.querySelector(".cases-quote");

  generateLetterTransitions();

  setTimeout(() => {
    quoteElement.classList.add("in-view");

    const letters = quoteElement.querySelectorAll(".tw-letter");
    const lastLetter = letters[letters.length - 1];
    const computedStyle = window.getComputedStyle(lastLetter);
    const transitionDelay = parseFloat(computedStyle.transitionDelay) * 1000;
    const transitionDuration =
      parseFloat(computedStyle.transitionDuration) * 1000;
    const totalAnimationTime = transitionDelay + transitionDuration;
  }, 100);
});

function generateLetterTransitions() {
  const baseDelay = 0.1;
  const increment = 0.015;
  const totalLetters = 46;

  const styleSheet = document.createElement("style");
  document.head.appendChild(styleSheet);

  for (let i = 1; i <= totalLetters; i++) {
    const delay = (baseDelay + increment * (i - 1)).toFixed(3);
    const rule = `html:not(.disable-motion) .tw-letter--${i} { transition-delay: ${delay}s; }`;
    styleSheet.sheet.insertRule(rule, styleSheet.sheet.cssRules.length);
  }
}
