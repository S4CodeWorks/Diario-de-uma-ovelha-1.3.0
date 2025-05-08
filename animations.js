export function initializeAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                requestAnimationFrame(() => {
                    entry.target.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                });
                
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.diary-entry').forEach(entry => {
        observer.observe(entry);
    });

    initializeHeaderAnimation();
}

function initializeHeaderAnimation() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    const threshold = 150; // Scroll threshold to trigger the header transformation
    let isScrollingUp = false;
    let scrollTimeout;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Determine scroll direction
        isScrollingUp = scrollTop < lastScrollTop;
        
        // Clear the previous timeout
        clearTimeout(scrollTimeout);
        
        if (scrollTop > threshold) {
            header.classList.add('scrolled');
            
            if (isScrollingUp) {
                header.style.transform = 'translateY(0)';
            } else {
                header.style.transform = 'translateY(-100%)';
            }
        } else {
            header.classList.remove('scrolled');
            header.style.transform = 'translateY(0)';
        }
        
        // Set a timeout to handle scroll end
        scrollTimeout = setTimeout(() => {
            if (isScrollingUp || scrollTop <= threshold) {
                header.style.transform = 'translateY(0)';
            }
        }, 150);
        
        lastScrollTop = scrollTop;
    });

    // Add smooth transition when switching between days
    window.showDay = (dayNumber) => {
        const currentActive = document.querySelector('.day-button.active');
        const newActive = document.querySelectorAll('.day-button')[dayNumber - 1];
        
        if (currentActive !== newActive) {
            currentActive?.classList.remove('active');
            newActive.classList.add('active');
            
            // Animate the nav-track to center the active button
            const navTrack = document.querySelector('.nav-track');
            const navContainer = document.querySelector('.nav-days');
            const buttonRect = newActive.getBoundingClientRect();
            const containerRect = navContainer.getBoundingClientRect();
            
            const scrollLeft = buttonRect.left - containerRect.left - 
                (containerRect.width / 2) + (buttonRect.width / 2);
            
            navTrack.scrollTo({
                left: navTrack.scrollLeft + scrollLeft,
                behavior: 'smooth'
            });
        }
        
        document.querySelectorAll('.diary-entry').forEach(entry => {
            entry.style.display = 'none';
        });
        
        const targetEntry = document.getElementById(`day-${dayNumber}`);
        targetEntry.style.display = 'block';
        
        // Smooth scroll with header height consideration
        const headerHeight = header.classList.contains('scrolled') ? 
            header.offsetHeight : threshold;
        
        window.scrollTo({
            top: headerHeight,
            behavior: 'smooth'
        });
    };
}