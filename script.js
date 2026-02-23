// Smooth scroll to gifts section
function scrollToGifts() {
    document.getElementById('gifts').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Open gift modals
function openGift(giftType) {
    const modals = {
        'letter': 'letterModal',
        'memories': 'memoriesModal',
        'playlist': 'playlistModal',
        'reasons': 'reasonsModal',
        'dates': 'datesModal',
        'interactive': 'interactiveModal'
    };
    
    const modalId = modals[giftType];
    if (modalId) {
        document.getElementById(modalId).style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        if (giftType === 'dates') {
            calculateDaysTogether();
        }
    }
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
    
    if (modalId === 'interactiveModal') {
        document.getElementById('messageBox').classList.add('hidden');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Calculate days together
function calculateDaysTogether() {
    const startDate = new Date('2022-10-07'); // Officially together 💖
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('daysTogether').textContent = diffDays;
}

// "Open When" messages
function showMessage(type) {
    const messages = {
        'miss': `My love, even when we're apart, you're always in my heart. Close your eyes and feel my arms around you. I'm thinking of you right now, missing your smile, your laugh, and everything about you. We'll be together again soon. Until then, remember that distance means nothing when someone means everything. I love you! 💕`,
        
        'happy': `Seeing you happy makes my heart soar! Your joy is contagious, and I'm so grateful to be part of your life. Whatever brought that smile to your face, I hope it never fades. Keep shining, my beautiful star. You deserve all the happiness in the world! ✨`,
        
        'sad': `Hey beautiful, I know things are tough right now, but you're tougher. You're the strongest person I know, and this feeling will pass. I'm here for you, always. Remember that it's okay to not be okay sometimes. You don't have to be perfect - you just have to be you. And you are absolutely perfect to me. I love you through the storms and the sunshine. 🌈`,
        
        'night': `Good night, my love. As you drift off to sleep, know that you're the last thing on my mind tonight and the first thing when I wake up. Dream sweet dreams - maybe I'll see you there. Sleep well knowing that someone across the world (or the room!) loves you more than words can say. Sweet dreams, angel. 🌙✨`
    };
    
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = messages[type] || 'I love you! 💕';
    messageBox.classList.remove('hidden');
    
    messageBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.gift-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});

// ESC to close modals
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Hover effect on gift cards
document.addEventListener('DOMContentLoaded', function() {
    const giftCards = document.querySelectorAll('.gift-card');
    
    giftCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

console.log('%c💕 Made with love for someone special 💕', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cIf you\'re reading this, you\'re too curious! 😊', 'color: #764ba2; font-size: 14px;');
