// animacoes.js
document.addEventListener('DOMContentLoaded', () => {
    const animatedItems = document.querySelectorAll('[data-anim]');

    function showElementsOnScroll() {
        animatedItems.forEach(item => {
            const itemOffset = item.getBoundingClientRect().top + window.scrollY;
            if (window.scrollY + window.innerHeight > itemOffset) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', showElementsOnScroll);
    showElementsOnScroll();
});

// Controle de vídeo personalizado
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("master-video");
    const playPauseBtn = document.getElementById("play-pause");
    const muteUnmuteBtn = document.getElementById("mute-unmute");
    const seekBar = document.getElementById("seek-bar");
    const volumeBar = document.getElementById("volume-bar");
    const timeElapsed = document.getElementById("time-elapsed");
    const videoDuration = document.getElementById("video-duration");
    const fullscreenBtn = document.getElementById("fullscreen");

    // Play / Pause functionality
    playPauseBtn.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = "Pause";
        } else {
            video.pause();
            playPauseBtn.textContent = "Play";
        }
    });

    // Mute / Unmute functionality
    muteUnmuteBtn.addEventListener("click", function() {
        video.muted = !video.muted;
        muteUnmuteBtn.textContent = video.muted ? "Unmute" : "Mute";
    });

    // Seek bar
    video.addEventListener("timeupdate", function() {
        const value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
        timeElapsed.textContent = formatTime(video.currentTime);
    });

    seekBar.addEventListener("input", function() {
        const time = (seekBar.value / 100) * video.duration;
        video.currentTime = time;
    });

    // Volume control
    volumeBar.addEventListener("input", function() {
        video.volume = volumeBar.value;
    });

    // Fullscreen functionality
    fullscreenBtn.addEventListener("click", function() {
        if (!document.fullscreenElement) {
            video.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    // Update video duration on metadata load
    video.addEventListener("loadedmetadata", function() {
        videoDuration.textContent = formatTime(video.duration);
    });

    // Format time in minutes and seconds
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }
});
