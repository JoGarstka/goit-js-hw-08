function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const start = document.querySelector('button[data-start]');
  const stop = document.querySelector('button[data-stop]');
  
  let colorChanges;

  function keepStarting() {
    colorChanges = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    start.disabled = true;
  };

  start.addEventListener('click', keepStarting);

  function stopIt() {
    clearInterval(colorChanges);
    start.disabled = false;
  };

  stop.addEventListener('click', stopIt);