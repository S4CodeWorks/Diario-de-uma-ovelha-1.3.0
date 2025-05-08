export function initializeHeader() {
    const headerHTML = `
        <header class="header">
            <div class="header-backdrop"></div>
            <div class="header-content">
                <div class="brand-section">
                    <h1>Diário da Ovelha</h1>
                    <p class="subtitle">Acompanhando dias especiais com nossas ovelhas</p>
                </div>
                <div class="nav-container">
                    <button class="nav-arrow prev-btn" aria-label="Previous">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                    </button>
                    <nav class="nav-days" id="nav-days">
                        <div class="nav-track">
                            <!-- Navigation buttons moved to navigation.js -->
                        </div>
                    </nav>
                    <button class="nav-arrow next-btn" aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    `;
    
    document.getElementById('header-container').innerHTML = headerHTML;
}