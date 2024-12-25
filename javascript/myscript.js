// Array of track data
const tracks = [
    { id: "waveform1", url: "media/Chase Me.mp3" },
    { id: "waveform2", url: "media/Deja Vu.mp3" },
    { id: "waveform3", url: "media/Piri.mp3" },
    { id: "waveform4", url: "media/Poison Love.mp3"}
];

// Keep track of the currently playing spectrum
let currentPlayingSpectrum = null;

// Initialize each waveform
tracks.forEach((track) => {
    // Create a WaveSurfer instance for the current track
    const spectrum = WaveSurfer.create({
        container: `#${track.id}`,
        progressColor: "#D9D9D9",
        barWidth: 2,
        height: 80,
        responsive: true,
        waveColor: "rgb(122,122,122)",
        cursorColor: "#FFFFFF",
        cursorWidth: 3,
        normalize: true,
        hideScrollBar: true
    });

    // Load the track
    spectrum.load(track.url);

    // Get the control buttons for the current track
    const container = document.querySelector(`#${track.id}`).closest(".spectrum-container");
    const playButton = container.querySelector(".btn-play");
    const pauseButton = container.querySelector(".btn-pause");
    const stopButton = container.querySelector(".btn-stop");

    // Add play button functionality
    playButton.addEventListener("click", () => {
        // Stop the currently playing track, if any
        if (currentPlayingSpectrum && currentPlayingSpectrum !== spectrum) {
            currentPlayingSpectrum.stop();
            const previousContainer = document.querySelector(`#${currentPlayingSpectrum.params.container.substring(1)}`).closest(".spectrum-container");
            const previousPlayButton = previousContainer.querySelector(".btn-play");
            const previousPauseButton = previousContainer.querySelector(".btn-pause");
            const previousStopButton = previousContainer.querySelector(".btn-stop");

            // Reset the previous track's button states
            previousPlayButton.disabled = false;
            previousPauseButton.disabled = true;
            previousStopButton.disabled = true;
        }

        // Play the current track
        spectrum.play();
        currentPlayingSpectrum = spectrum; // Set the currently playing spectrum

        // Update button states
        playButton.disabled = true;
        pauseButton.disabled = false;
        stopButton.disabled = false;
    });

    // Add pause button functionality
    pauseButton.addEventListener("click", () => {
        spectrum.pause();
        playButton.disabled = false;
        pauseButton.disabled = true;
    });

    // Add stop button functionality
    stopButton.addEventListener("click", () => {
        spectrum.stop();
        playButton.disabled = false;
        pauseButton.disabled = true;
        stopButton.disabled = true;

        // Clear the current playing spectrum if this track was playing
        if (currentPlayingSpectrum === spectrum) {
            currentPlayingSpectrum = null;
        }
    });

    // Enable the play button once the waveform is ready
    spectrum.on("ready", () => {
        playButton.disabled = false;
    });
});
