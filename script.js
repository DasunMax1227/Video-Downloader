document.addEventListener("DOMContentLoaded", function () {
    let text = "☛ 𝗣𝗥𝗢𝗚𝗔𝗠𝗠𝗘𝗥 𝗗𝗔𝗦𝗨𝗡 𝗠𝗔𝗫 ☚";
    let i = 0;
    let speed = 100; // Typing speed
    let animatedText = document.getElementById("animated-text");
    let progressBar = document.querySelector(".progress");

    function typeWriter() {
        if (i < text.length) {
            animatedText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            progressBar.style.width = "100%"; // Load progress bar
            setTimeout(() => {
                document.getElementById("loading-screen").style.display = "none";
                document.getElementById("main-content").style.display = "block";
            }, 2000); // Hide loader after 2s
        }
    }

    typeWriter();
});
