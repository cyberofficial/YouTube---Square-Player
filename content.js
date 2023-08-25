// Function to apply styles
const applyStyles = () => {
    let targetElement = document.querySelector('#ytd-player.ytd-watch-flexy');
  
    if (targetElement && !targetElement.classList.contains('custom-styled')) {
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = 'ytd-watch-flexy[rounded-player-large]:not([fullscreen]):not([theater]) #ytd-player.ytd-watch-flexy { border-radius: 0px; }';
      document.head.appendChild(style);
      targetElement.classList.add('custom-styled');
      console.log('Styles applied.');
    }
  };
  
  // Function to observe DOM changes and apply styles when necessary
  const observeDOM = () => {
    const targetNode = document.body;
  
    const config = { childList: true, subtree: true };
  
    const observer = new MutationObserver(() => {
      applyStyles();
    });
  
    observer.observe(targetNode, config);
  };
  
  // Initial style apply attempt
  applyStyles();
  
  // Start observing DOM changes
  observeDOM();
  