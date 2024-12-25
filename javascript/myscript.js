

var buttons = {
    play: document.getElementById("btn-play"),
    pause: document.getElementById("btn-pause"),
    stop: document.getElementById("btn-stop")
};

var Spectrum = WaveSurfer.create({
    container: '#audio-spectrum',
    progressColor: "#D9D9D9" ,
    barWidth: 2,
    // barGap: 3,
    // barRadius: 3,
    height: 80,
    cursorWidth: 2,
    responsive: true,
    waveColor:"rgb(122,122,122)",
    hideScrollbar: true,
    cursorColor: "#FFFFFF",
    cursorWidth: 3,
    normalize: true

});

// Play button
buttons.play.addEventListener("click", function () {
    Spectrum.play();
    buttons.stop.disabled = false;
    buttons.pause.disabled = false;
    buttons.play.disabled = true;
}, false);

buttons.pause.addEventListener("click", function () {
    Spectrum.pause();
    buttons.pause.disabled = true;
    buttons.play.disabled = false;
}, false);

buttons.stop.addEventListener("click", function () {
    Spectrum.stop();
    buttons.stop.disabled = true;
    buttons.pause.disabled = true;
    buttons.play.disabled = false;
}, false);

Spectrum.on('ready', function () {
    buttons.play.disabled = false;
});

Spectrum.load('media/WHAT.mp3');
