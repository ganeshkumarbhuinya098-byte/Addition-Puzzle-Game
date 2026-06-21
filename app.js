// एलिमेंट्स को सिलेक्ट करना
const dashboard = document.getElementById('dashboard');
const gameScreen = document.getElementById('game-screen');
const soloBadgesBtn = document.getElementById('solo-badges-btn');
const enterArenaBtn = document.getElementById('enter-arena-btn');
const startGameBtn = document.getElementById('start-game-btn');

const bgMusic = document.getElementById('bg-music');
const clickSound = document.getElementById('click-sound');
const volumeSlider = document.getElementById('volume-slider');

// पहली बार स्क्रीन पर क्लिक करते ही बैकग्राउंड म्यूजिक चालू करना
document.body.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(err => console.log("Music play blocked initially"));
        bgMusic.volume = volumeSlider.value / 100;
    }
}, { once: true });

// वॉल्यूम कंट्रोलर लॉजिक
volumeSlider.addEventListener('input', (e) => {
    bgMusic.volume = e.target.value / 100;
});

// बटन क्लिक साउंड फंक्शन
function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}

// 'Solo Badges' बटन पर क्लिक का लॉजिक (पुराना अलर्ट हटा दिया!)
soloBadgesBtn.addEventListener('click', () => {
    playClick();
    
    // डैशबोर्ड छुपाओ और जोड़ वाले सेशन का बॉक्स दिखाओ
    dashboard.classList.add('hidden');
    gameScreen.classList.remove('hidden');
});

// 'Enter Arena' बटन (अभी के लिए सिर्फ क्लिक साउंड करेगा)
enterArenaBtn.addEventListener('click', () => {
    playClick();
});

// 'Start Game' बटन पर क्लिक का लॉजिक
startGameBtn.addEventListener('click', () => {
    playClick();
    // यहाँ से हमारा असली सवाल-जवाब वाला कोड शुरू होगा
    alert("अरे वाह भाई! गेम स्टार्ट हो गया। अब अगले कदम में सवाल लोड करेंगे!");
});
