let mySound;
function setup(){
    soundFormats('mp3');
    mySound = loadSound('ANL', loadmusic);
    //mySound.play();
}

function loadmusic(){
    mySound.play();
}