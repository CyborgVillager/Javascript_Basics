/* Link Test
window.addEventListener('load',function(){
    alert('linked');
}, false);
*/
window.addEventListener('load',function(){
    video =  document.getElementById('video');
    playButton = document.getElementById('play_button');
    video.load();
    video.addEventListener('canplay',function(){
         playButton.addEventListener('click', playOrPause,false);
    }, false);

}, false);
function playOrPause(){
    if(video.paused) {
        video.play();
        playButton.src = 'images/pause_button.png';
    } else {
        video.paused();
        playButton.src  = 'images/play_button.png';
    }
}

