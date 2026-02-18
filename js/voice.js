const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

function startListening() {
    recognition.start();
}

recognition.onresult = function(event) {
    const text = event.results[0][0].transcript;
    respond(text);
};

function respond(input) {

    let reply = "I heard " + input;

    if(input.toLowerCase().includes("hello"))
        reply = "Greetings. Orvix systems online.";

    if(input.toLowerCase().includes("status"))
        reply = "All modules functioning within expected parameters.";

    speak(reply);
}

function speak(text){
    const utter = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utter);
}
