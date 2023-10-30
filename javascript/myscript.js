import WaveSurfer from "./node_modules/wavesurfer.js";

var playBtn = document.getElementById("playBtn");

        const wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#BDBFC5',
        progressColor: '#D9D9D9 ',
        barWidth: 2 ,
        responsive: true,
        height: 30,
        barRadius: 4, 
        });
        wavesurfer.load('../media/Chase Me.mp3');
        // if player click on button, it will change button
        playBtn.onclick = function(){
            wavesurfer.playPause();
            if(playBtn.getAttribute("src") === "../images/Play Button.png"){
               playBtn.setAttribute("src", "../images/Pause Button.png");
            }else{
               playBtn.setAttribute("src", "../images/Play Button.png");
            }
        }
        //if it finish playing, change the button back to play button
        //stop the music 
        wavesurfer.on('finish', function(){
            playBtn.setAttribute("src", "../images/Play Button.png");
            wavesurfer.stop();
        })