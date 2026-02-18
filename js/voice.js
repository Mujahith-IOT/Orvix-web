// ===============================
// ORVIX Voice Engine (Combined)
// ===============================

// -------- Elements (expect these in index.html) --------
const startBtn = document.getElementById("startVoice");
const stopBtn = document.getElementById("stopVoice");
const output = document.getElementById("voiceOutput");

// -------- Speech Recognition Setup --------
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = null;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = false;
}

// -------- Speech Synthesis --------
function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1;
  utter.pitch = 1.1;
  utter.volume = 1;
  speechSynthesis.speak(utter);
}

// -------- Command Brain --------
// This is your expandable Orvix mind stub
function processCommand(command) {
  command = command.toLowerCase();

  if (command.includes("hello")) {
    speak("Greetings. Orvix online.");
    return "Orvix greeted you";
  }

  if (command.includes("time")) {
    const t = new Date().toLocaleTimeString();
    speak("Current time is " + t);
    return "Time requested";
  }

  if (command.includes("open github")) {
    window.open("https://github.com", "_blank");
    speak("Opening GitHub");
    return "Opening GitHub";
  }

  if (command.includes("status")) {
    speak("All systems nominal.");
    return "Status check complete";
  }

  // Default fallback
  speak("Command received: " + command);
  return "Unknown command";
}

// -------- Recognition Events --------
if (recognition) {

  recognition.onresult = (event) => {
    const transcript =
      event.results[event.results.length - 1][0].transcript;

    output.textContent = "You said: " + transcript;

    const response = processCommand(transcript);
    console.log("Orvix:", response);
  };

  recognition.onerror = (e) => {
    console.error("Voice error:", e.error);
  };

}

// -------- Button Hooks --------
if (startBtn && recognition) {
  startBtn.onclick = () => {
    recognition.start();
    speak("Voice interface activated.");
  };
}

if (stopBtn && recognition) {
  stopBtn.onclick = () => {
    recognition.stop();
    speak("Voice interface offline.");
  };
}

// -------- Compatibility Message --------
if (!SpeechRecognition) {
  if (output) {
    output.textContent =
      "Speech Recognition not supported in this browser. Use Chrome.";
  }
}
