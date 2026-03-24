document.addEventListener('DOMContentLoaded', () => {
    // Generate floating background hearts
    const bgContainer = document.querySelector('.background-animation');
    
    // Create custom styles dynamically for heart pseudoelements matching main color
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        const heartColors = ['#8a2be2', '#4169e1', '#da70d6', '#0000ff', '#8b00ff', '#1e90ff']; // violet and blue shades
        heart.style.setProperty('--heart-color', heartColors[Math.floor(Math.random() * heartColors.length)]);
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 4 + 5 + 's'; // 5-9 seconds
        heart.style.opacity = Math.random() * 0.4 + 0.2;
        
        // Random dimensions for a bit of variety
        const scale = Math.random() * 0.5 + 0.5;
        heart.style.transform = `scale(${scale}) rotate(45deg)`;
        
        bgContainer.appendChild(heart);
        
        // Remove after animation finishes to prevent DOM overload
        setTimeout(() => {
            heart.remove();
        }, 9000);
    };

    // Create hearts periodically
    const heartInterval = setInterval(createHeart, 400);

    // Initial batch of hearts
    for(let i=0; i<5; i++) {
        setTimeout(createHeart, i * 200);
    }

    // Welcome Page (login.html) logic
    const openBtn = document.getElementById('openBtn');
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            openBtn.style.display = 'none'; // hide the open button
            
            const successMsg = document.getElementById('success-message');
            successMsg.classList.add('show');
            createConfetti();
        });
    }

    const letsGoBtn = document.getElementById('letsGoBtn');
    if (letsGoBtn) {
        letsGoBtn.addEventListener('click', () => {
            window.location.href = 'message.html';
        });
    }

    // Gallery Page (gallery.html) logic
    const continueBtn = document.getElementById('continueBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            window.location.href = 'message.html';
        });
    }

    // Message Page (message.html) logic
    const giftBox = document.getElementById('giftBox');
    const secretLetter = document.getElementById('secretLetter');
    const giftLoginArea = document.getElementById('giftLoginArea');
    const giftPassword = document.getElementById('giftPassword');
    const unlockGiftBtn = document.getElementById('unlockGiftBtn');
    const giftError = document.getElementById('giftError');
    const giftIcon = document.querySelector('.gift-box-icon');
    const giftText = document.querySelector('.gift-text');
    
    if (giftIcon && giftText) {
        giftIcon.addEventListener('click', showGiftReveal);
        giftText.addEventListener('click', showGiftReveal);
    }
    
    function showGiftReveal() {
        giftIcon.style.display = 'none';
        giftText.style.display = 'none';
        giftBox.style.cursor = 'default';
        giftBox.classList.remove('gift-container');
        
        const firstGiftReveal = document.getElementById('firstGiftReveal');
        if (firstGiftReveal) {
            firstGiftReveal.classList.remove('hidden-element');
            firstGiftReveal.classList.add('show');
        }
    }

    // Handle password submission
    if (unlockGiftBtn && giftPassword && giftError) {
        const checkGiftPassword = () => {
            if (giftPassword.value.toLowerCase().trim() === 'love you kundhani') {
                const giftLoginArea = document.getElementById('giftLoginArea');
                if (giftLoginArea) giftLoginArea.style.display = 'none';
                
                if (secretLetter) {
                    secretLetter.classList.remove('hidden');
                }
                createConfetti();
            } else {
                giftError.style.display = 'block';
                giftError.classList.add('shake');
                setTimeout(() => giftError.classList.remove('shake'), 500);
            }
        };

        unlockGiftBtn.addEventListener('click', checkGiftPassword);
        giftPassword.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkGiftPassword();
        });
    }

    const aduthuPolamBtn = document.getElementById('aduthuPolamBtn');
    if (aduthuPolamBtn) {
        aduthuPolamBtn.addEventListener('click', () => {
            const firstContainer = aduthuPolamBtn.closest('.container');
            if (firstContainer) firstContainer.classList.add('hidden');
            
            const pageMessage = document.getElementById('page-message');
            if (pageMessage) pageMessage.classList.remove('hidden');
        });
    }

    // Confetti Function (retained for the pop-in effect)
    function createConfetti() {
        // Only run if the confetti container exists
        let container = document.getElementById('confetti-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'confetti-container';
            document.body.appendChild(container);
        }

        const colors = ['#8a2be2', '#4169e1', '#ffffff', '#da70d6', '#1e90ff'];
        
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            const size = Math.random() * 8 + 5;
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';

            if (Math.random() > 0.5) confetti.style.borderRadius = '50%';
            
            const duration = Math.random() * 2 + 2;
            confetti.style.animationDuration = duration + 's';
            confetti.style.top = -20 + 'px';
            
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }
    }
});
