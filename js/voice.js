// ================================
// ORVIX VOICE ENGINE
// ================================

// ---------- Speech Synthesis ----------
function speak(text) {

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    utter.pitch = 1;
    utter.volume = 1;

    window.speechSynthesis.speak(utter);
}


// ---------- Local AI Response ----------
async function respond(input) {

    try {

        const res = await fetch("http://localhost:3000/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: input })
        });

        const data = await res.json();

        const reply = data.reply || "No response from AI";

        // Save memory
        if (typeof saveMemory === "function") {
            saveMemory({
                input: input,
                reply: reply,
                time: new Date().toISOString()
            });
        }

        speak(reply);

    } catch (err) {

        console.error("AI connection error:", err);
        speak("Local AI connection failed");

    }
}


// ---------- Speech Recognition ----------
const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;

recognition.onresult = (event) => {

    const text = event.results[0][0].transcript;

    console.log("User said:", text);

    respond(text);
};

recognition.onerror = (event) => {
    console.error("Speech error:", event.error);
};


// ---------- Button Trigger ----------
document.getElementById("listenBtn")
    .addEventListener("click", () => {

        recognition.start();

});


// ---------- Startup Greeting ----------
window.onload = () => {

    if (typeof lastInteraction === "function") {

        const last = lastInteraction();

        if (last) {
            speak("Welcome back. Orvix memory active.");
        } else {
            speak("Orvix system online.");
        }
    } else {
        speak("Orvix system online.");
    }

};
