body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: url("/images/a-lonely-figure-stands-in-a-muted-environment-reflecting-a-sense-of-sadness-and-despair-66og6yiygwg3o3z9.webp") no-repeat center center fixed;
    background-size: cover;
    color: white;
    overflow-y: auto;
    margin: 0;
    padding: 0;
}

/* Main Wrapper */
.main-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 50px;
}

/* Container (Downloader Box) */
.container {
    margin: 50px auto;
    width: 50%;
    padding: 20px;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0px 0px 10px gray;
    border-radius: 10px;
}

/* Contact Section */
.contact-section {
    margin-top: 50px;
    text-align: center;
}

.contact-section p {
    font-size: 20px;
    font-weight: bold;
    color: white;
}

/* WhatsApp Button */
.whatsapp-button {
    display: inline-block;
    padding: 12px 20px;
    background: #25d366;
    color: white;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    transition: 0.3s;
}

.whatsapp-button:hover {
    background: #1ebe5d;
}
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
