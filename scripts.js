document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('backgroundMusic');
    const centerGif = document.getElementById('centerGif'); // Get a reference to the center gif
    let musicPlayed = false;  // To track if music has started

    document.addEventListener('click', function(e) {
        if (!musicPlayed) {
            music.play().then(() => {
                transitionQuotes();  // Start the quote transitions immediately
                
                // Fade the center gif for better visibility of quotes
                centerGif.style.opacity = 0.5;
                centerGif.style.transition = 'opacity 1s';  // Smooth transition
                
            }).catch(error => {
                console.error('Error playing music:', error);
            });
            musicPlayed = true;  // Mark the music as started
        }

        // Create a heart shape made of smaller hearts around the click point
        for (let t = 0; t < Math.PI * 2; t += 0.1) {
            let x = 16 * Math.pow(Math.sin(t), 3);
            let y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
            createHeart(e.clientX + x * 10, e.clientY + y * 10);
        }
    });

    const quotesArray = [
        "You've Got This!",
        "Shine on, beautiful.",
        "Your strength is greater than any struggle.",
        "Believe. Achieve. Repeat.",
        "Breathe. Believe. Receive.",
        "Embrace the journey, embrace you.",
        "Smile, success loves you.",
        "Hey, just wanted to remind you that I'm always here for you. Keep pushing through, and remember to take breaks.",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."
    ];

    let currentQuoteIndex = 0;

    function transitionQuotes() {
        const quoteElement = document.querySelector('.quote-display'); 
        let quoteInterval = setInterval(function() {
            if (currentQuoteIndex < quotesArray.length) {
                quoteElement.textContent = quotesArray[currentQuoteIndex];
                currentQuoteIndex++;
            } else {
                clearInterval(quoteInterval);
            }
        }, 3400);  // 3.4 seconds per quote
    }

    function createHeart(x, y) {
        let heart = document.createElement('div');
        heart.classList.add('heart');

        let size = Math.random() * 10 + 5;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';

        let colors = ['#ff7f7f', '#ff7faa', '#ff4f7f', '#ff7f4f'];
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        if (Math.random() > 0.5) {
            heart.style.animationName = 'float';
        } else {
            heart.style.animationName = 'float-reverse';
        }

        heart.style.left = x + 'px';
        heart.style.top = y + 'px';

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 1500);
    }
});
