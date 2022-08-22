(() => {
    'use strict'

    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
  })()

const show = (object) => document.getElementById(`button${object.id}`).click();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const touch = (object) => obj.addEventListener("touchstart", () => console.log(object.id), false);

var bar = new ProgressBar.Circle("#progress-bar", {
  color: '#007bff',
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#007bff', width: 1 },
  to: { color: '#007bff', width: 4 },

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText(`0%`);
    } else {
      circle.setText(`${value}%`);
    }

  }
});

bar.text.style.backgroundColor = "#fff"
bar.text.style.fontSize = ".75em"

bar.animate(0);
