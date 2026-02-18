<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Orvix Interface</title>

<style>
    body {
        background: #0a0f1c;
        color: #00eaff;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    header {
        background: #050814;
        padding: 20px;
        font-size: 28px;
        letter-spacing: 2px;
    }

    .container {
        margin-top: 60px;
    }

    button {
        background: #00eaff;
        color: #000;
        border: none;
        padding: 15px 30px;
        font-size: 18px;
        border-radius: 8px;
        cursor: pointer;
    }

    button:hover {
        background: #00bcd4;
    }

    #log {
        margin-top: 30px;
        font-size: 18px;
        color: #ffffff;
    }
</style>
</head>

<body>

<header>ORVIX AI CONTROL</header>

<div class="container">
    <button onclick="startListening()">Activate Voice</button>
    <div id="log">Status: Idle</div>
</div>

<script>
/*
  Combined Voice Engine
  Uses Web Speech API built into browser
*/

let recognition;

function initVoice() {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        document.getElementById("log").innerText =
            "Speech recognition not supported";
        return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
        document.getElementById("log").innerText = "Listening...";
    };

    recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        document.getElementById("log").innerText =
            "You said: " + text;

        processCommand(text.toLowerCase());
    };

    recognition.onerror = () => {
        document.getElementById("log").innerText = "Error occurred";
    };
}

function startListening() {
    if (!recognition) initVoice();
    recognition.start();
}

function speak(msg) {
    const utter = new SpeechSynthesisUtterance(msg);
    speechSynthesis.speak(utter);
}

function processCommand(cmd) {

    // Example command logic (expand later)
    if (cmd.includes("hello")) {
        speak("Hello. Orvix online.");
    }
    else if (cmd.includes("status")) {
        speak("Systems nominal.");
    }
    else if (cmd.includes("time")) {
        speak("Current time is " + new Date().toLocaleTimeString());
    }
    else {
        speak("Command not recognized");
    }
}
</script>

</body>
</html>        padding:20px;
        margin:15px 0;
        border-radius:8px;
    }

    button {
        padding:15px 25px;
        margin:10px 5px;
        border:none;
        border-radius:6px;
        font-size:16px;
        cursor:pointer;
    }

    .launch-btn {
        background:#2563eb;
        color:white;
    }

    .voice-btn {
        background:#16a34a;
        color:white;
    }

    footer {
        text-align:center;
        padding:20px;
        background:#111827;
        font-size:14px;
    }
</style>

</head><body><header>
    ORVIX AI SYSTEM
</header><section><div class="card">
    <h2>Project Overview</h2>
    <p>
        Orvix is an experimental modular AI platform designed to evolve from
        software interaction to hardware control. This web interface acts as
        the first communication layer for monitoring and interaction.
    </p>
</div>

<div class="card">
    <h2>Capabilities (Current)</h2>
    <ul>
        <li>Web deployment</li>
        <li>Voice interaction shell</li>
        <li>Expandable cognition modules</li>
    </ul>
</div>

<div class="card">
    <h2>Controls</h2>
    <button class="launch-btn" onclick="launchOrvix()">Launch Interface</button>
    <button class="voice-btn" onclick="startListening()">Talk to Orvix</button>
</div>

</section><footer>
    Orvix AI — Experimental Development Platform
</footer><script>
function launchOrvix(){
    alert("Interface expansion module coming next stage.");
}
</script><script src="js/voice.js"></script></body>
</html></header>

<section>

    <div class="card">
        <h2>Project Overview</h2>
        <p>
            Orvix is a modular artificial intelligence platform designed to act as a universal control hub
            across hardware and software systems. This web interface serves as the initial software layer
            for interaction, monitoring, and development of the Orvix ecosystem.
        </p>
    </div>

    <div class="card">
        <h2>Current Capabilities</h2>
        <ul>
            <li>Web-based interaction interface</li>
            <li>Expandable voice assistant integration</li>
            <li>Command processing framework</li>
            <li>Future hardware bridge support</li>
        </ul>
    </div>

    <div class="card">
        <h2>Future Expansion</h2>
        <ul>
            <li>ESP32 communication control</li>
            <li>Satellite link management</li>
            <li>Distributed AI cognition modules</li>
            <li>Unified device orchestration</li>
        </ul>
    </div>

    <button class="launch-btn" onclick="launchOrvix()">
        Launch Interface
    </button>

</section>

<footer>
    Orvix AI — Experimental Development Platform
</footer>

<script>
function launchOrvix(){
    alert("Interface module coming next stage.");
}
</script>

</body>
<button onclick="startListening()">Talk to Orvix</button>
<script src="js/voice.js"></script>
</html>
