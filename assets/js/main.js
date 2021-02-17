function myTrennen() {
    let zeichen = document.getElementById("zeichen");
    let trennung = document.getElementById("trennung");
    let vorder = document.getElementById("voder");
    let hinter = document.getElementById("hinter");
    let teil = zeichen.value.split(trennung.value)
    let resultVorder
    let resultHinter
    if (zeichen.value.indexOf(trennung.value) == -1) {
        vorder.innerHTML = "Das Zeichnen konnte leider nicht gefunden werden"
        hinter.innerHTML = zeichen.value
    } else {
        hinter.innerHTML = trennung.value + teil[1];
        vorder.innerHTML = teil[0]
    }
    vorder.innerHTML = resultVorder
    hinter.innerHTML = resultHinter
}