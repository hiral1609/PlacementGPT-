// Typing effect
const phrases = ["AI Mock Interviews", "ATS Resume Analysis", "Coding Roadmaps", "Placement Tracking"];
let i = 0;
let j = 0;
let isDeleting = false;
let currentPhrase = [];
const typingText = document.getElementById('typing-text');

function loop() {
    typingText.innerHTML = currentPhrase.join('');
    
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            setTimeout(loop, 100);
        }
        
        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop();
            j--;
            setTimeout(loop, 50);
        }
        
        if (j == phrases[i].length + 1) {
            isDeleting = true;
            setTimeout(loop, 2000);
        }
        
        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
            setTimeout(loop, 500);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(typingText) loop();
    
    // Mouse Glow Effect
    const mouseGlow = document.querySelector('.mouse-glow');
    if (mouseGlow) {
        document.addEventListener('mousemove', (e) => {
            mouseGlow.style.left = e.clientX + 'px';
            mouseGlow.style.top = e.clientY + 'px';
        });
    }

    // Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.magnetic');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        btn.addEventListener('mouseout', function(e) {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '15px 5%';
                navbar.style.background = 'rgba(5, 5, 8, 0.9)';
            } else {
                navbar.style.padding = '20px 5%';
                navbar.style.background = 'rgba(5, 5, 8, 0.7)';
            }
        });
    }

    // 3D Tilt Effect on Hologram
    const tiltContainer = document.querySelector('.hero-visual');
    const tiltElement = document.querySelector('.tilt-effect');

    if (tiltContainer && tiltElement) {
        tiltContainer.addEventListener('mousemove', (e) => {
            const rect = tiltContainer.getBoundingClientRect();
            const xAxis = ((rect.width / 2) - (e.clientX - rect.left)) / 25;
            const yAxis = ((rect.height / 2) - (e.clientY - rect.top)) / 25;
            tiltElement.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        tiltContainer.addEventListener('mouseleave', () => {
            tiltElement.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    }
});
