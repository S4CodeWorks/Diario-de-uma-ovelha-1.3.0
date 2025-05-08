export function initializeNavigation() {
    const days = [
        { number: '28', month: 'Abril' },
        { number: '29', month: 'Abril' },
        { number: '30', month: 'Abril' },
        { number: '1', month: 'Maio' },
        { number: '2', month: 'Maio' },
        { number: '3', month: 'Maio' },
        { number: '4', month: 'Maio' },
        { number: '5', month: 'Maio' },
        { number: '6', month: 'Maio' },
        { number: '7', month: 'Maio' }
    ];

    const navTrack = document.querySelector('.nav-track');
    navTrack.innerHTML = days.map((day, index) => `
        <button class="day-button ${index === 0 ? 'active' : ''}" onclick="showDay(${index + 1})">
            <span class="day-number">${day.number}</span>
            <span class="day-month">${day.month}</span>
        </button>
    `).join('');

    initializeArrowNavigation();
}

function initializeArrowNavigation() {
    const track = document.querySelector('.nav-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -200, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: 200, behavior: 'smooth' });
    });

    const updateArrowVisibility = () => {
        const isAtStart = track.scrollLeft <= 0;
        const isAtEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth;
        
        prevBtn.style.opacity = isAtStart ? '0.3' : '1';
        nextBtn.style.opacity = isAtEnd ? '0.3' : '1';
    };

    track.addEventListener('scroll', updateArrowVisibility);
    updateArrowVisibility();
}