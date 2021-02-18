function show() {
    let vorder = document.getElementById("vorder");
    let hinter = document.getElementById("hinter");
    let danach = document.getElementById("danach");
    let zeichen = document.getElementById("zeichen").value;
    let trennung = document.getElementById("trennung").value;
    let firstSplit = zeichen.split(trennung);
    let secondSplit = trennung.length;
    let a
    let b
    let z = "Eine Maschine ist ein technischen Gebilde mit durch ein Antriebssystem bewegten teilen."
    zeichen.value = z
    if (secondSplit == 0) {
        vorder.innerHTML = a = "Das Zeichen konnte leider nicht gefunden werden."
        hinter.innerHTML = b = zeichen;
    } else if (danach.checked) {
        vorder.innerHTML = a = firstSplit[0] + trennung
        hinter.innerHTML = b = firstSplit[1]
    } else {
        vorder.innerHTML = a = firstSplit[0]
        hinter.innerHTML = b = trennung + firstSplit[1]
    }
}
