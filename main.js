import { initializeHeader } from './header.js';
import { initializeDiaryEntries } from './diary-entries.js';
import { initializeNavigation } from './navigation.js';
import { initializeAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeHeader();
    initializeDiaryEntries();
    initializeNavigation();
    initializeAnimations();
});

