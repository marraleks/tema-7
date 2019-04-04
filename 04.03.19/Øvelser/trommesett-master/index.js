


function play(evt) {
    const kode = evt.keyCode;
    console.log(kode);


    const lyd = document.querySelector(`audio[data-key="${kode}"]`);
    const firkant = document.querySelector(`#keys div[data-key="${kode}"]`);

    if(!lyd) {
        return;
    }

    firkant.animate([
        { transform: "scale(1,2)", backgroundColor: "orange" },
        { transform: "scale(1)", backgroundColor: "orange" }
    ], 100)


    // Vi spoler helt tilbake
    lyd.currentTime = 0;
    lyd.play();
}


document.addEventListener("keydown", play);
// btnRecord.addEventListener("click", startOpptak);
// btnPlay.addEventListener("click", spillOpptak);