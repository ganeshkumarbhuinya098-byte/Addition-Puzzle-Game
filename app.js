// DualMind-Arena - Core Game Logic & Brain

// Global Player Object to store live stats
let player = {
    name: "",
    level: 1,
    points: 0,
    wins: 0,
    streak: 0
};

// Sound Elements
const bgMusic = document.getElementById('bg-music');
const clickSound = document.getElementById('click-sound');

// Function to play button click sound safely
function playClick() {
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => console.log("Audio play blocked by browser setup."));
    }
}

// 1. Initialize Player and Transition from Login to Main Menu
function initPlayer() {
    playClick();
    const nameInput = document.getElementById('username-input').value.trim();
    
    if (nameInput === "") {
        alert("Please enter a valid player name, bro!");
        return;
    }
    
    // Set Player Name
    player.name = nameInput;
    document.getElementById('player-title').innerText = player.name + "'s Dashboard";
    
    // Hide Login Screen and Show Main Menu
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
    
    // Start Background Music smoothly after first user interaction
    if (bgMusic) {
        bgMusic.volume = 0.3; // Low volume for background ambiance
        bgMusic.play().catch(e => console.log("Music waiting for deeper user action."));
    }
}

// 2. Mode Selection Router
function selectMode(modeName) {
    playClick();
    
    switch(modeName) {
        case 'solo':
            alert("Launching Solo Badges (+, -, ×, ÷) for " + player.name + "!");
            // Solo Mode loading logic will go here
            break;
        case 'mixed':
            alert("Starting Mind Test (Mixed Mode)! Prepare your brain!");
            // Mixed Mode loading logic will go here
            break;
        case 'arena':
            alert("⚠️ Entering the Arena! Speed and Accuracy matter here! ⚠️");
            // Arena Mode loading logic will go here
            break;
        case 'multiplayer':
            alert("Searching for an online live 1v1 opponent... (Feature incoming)");
            // Matchmaking logic will go here
            break;
        case 'leaderboard':
            alert("Fetching Monthly Top 100 Leaderboard data...");
            // API calling for leaderboard will go here
            break;
        default:
            console.log("Unknown mode selected.");
    }
}

// 3. Anti-Cheat / Connection Status Monitor
function updateOnlineStatus() {
    const overlay = document.getElementById('disconnection-overlay');
    if (navigator.onLine) {
        overlay.classList.add('hidden');
    } else {
        overlay.classList.remove('hidden');
        if (bgMusic) bgMusic.pause();
    }
}

// Listen for network changes securely
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Run connection check immediately on launch
updateOnlineStatus();
