/* ---------- 1. Floating Hearts Generator ---------- */
(function createFloatingHearts() {
    var container = document.getElementById('heartsBg');
    var hearts = ['❤️', '💖', '💕', '💗', '💓', '🌸', '💞', '💘'];

    function spawnHeart() {
        var heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (16 + Math.random() * 26) + 'px';
        heart.style.animationDuration = (7 + Math.random() * 8) + 's';
        heart.style.animationDelay = (Math.random() * 3) + 's';
        container.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 18000);
    }

    for (var i = 0; i < 15; i++) {
        setTimeout(spawnHeart, i * 400);
    }

    setInterval(spawnHeart, 900);
})();


/* ---------- 2. Option Click Logic ---------- */
var musicFiles = [
    'loveaudio2.mp3',
    'loveaudio3.mp3',
    'loveaudio4.mp3',
    'loveaudio5.mp3',
    'loveaudio6.mp3',
    'loveaudio7.mp3',
    'loveaudio8.mp3',
    'loveaudio9.mp3',
    'loveaudio10.mp3'
];

var audio = document.getElementById('bgAudio');
var buttons = document.querySelectorAll('.option-btn');
var clicked = false;

buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (clicked) return;
        clicked = true;

        var choice = btn.dataset.choice;

        // Burst animation
        btn.classList.add('clicked');

        // ✅ Pick a random song but DON'T play it here.
        // Just save it so ilu2.html plays it once.
        var randomIndex = Math.floor(Math.random() * musicFiles.length);
        sessionStorage.setItem('loveSong', musicFiles[randomIndex]);
        sessionStorage.setItem('loveSongTime', '0');

        // Redirect after short burst
        setTimeout(function () {
            window.location.href = 'ilu2.html?choice=' + encodeURIComponent(choice);
        }, 700);
    });
});