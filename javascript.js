$(document).ready(function () {
    const log = $('#log');
    document.addEventListener('keyup', logKey);
    msg = new SpeechSynthesisUtterance();
    msg.text = "Abhirath type somethign on the keyboard";
    window.speechSynthesis.speak(msg);

    msgWhatLetter = new SpeechSynthesisUtterance();
    msgWhatLetter.text = "Abhirath, what letter is this";
    $("input").focus();
});


function logKey(e) {
    let keyPressed = String.fromCharCode(e.keyCode);
    if (keyPressed.match(/^[0-9a-zA-Z]+$/)) {
        log.textContent = keyPressed;
        $("#log").css("font-size", "70vh");
        msg.text = "This is     " + keyPressed.toLowerCase();
        document.removeEventListener('keyup', logKey);
        window.speechSynthesis.speak(msgWhatLetter);
        setTimeout(function () { window.speechSynthesis.speak(msg); document.addEventListener('keyup', logKey); }, 5000);
    }
}