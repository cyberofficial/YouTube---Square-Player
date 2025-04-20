const applyStyles = () => {
    const player = document.getElementById('ytd-player'); // Directly get the player by ID

    if (player && !player.classList.contains('custom-styled')) {
        // Inject CSS to remove rounded corners specifically for the player
        const style = document.createElement('style');
        style.textContent = `
            #ytd-player.style-scope.ytd-watch-flexy { /* Target the player with its correct classes */
                border-radius: 0 !important; /* Use !important to override YouTube's styles */
            }
            #ytd-player.style-scope.ytd-watch-flexy #movie_player.ytp-fullscreen {
                border-radius: 0px !important;
            }
        `;
        document.head.appendChild(style);
        player.classList.add('custom-styled');
        console.log('Styles applied.');
    }
};


// Observe DOM changes and apply styles when necessary
const observeDOM = () => {
    const targetNode = document.body;
    const config = { childList: true, subtree: true };

    const observer = new MutationObserver(() => {
        applyStyles();
    });

    observer.observe(targetNode, config);
};

// Initial style application attempt
applyStyles();

// Start observing DOM changes
observeDOM();