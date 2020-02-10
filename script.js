function notAvailableNow(x) {
    document.getElementsByClassName('N/A')[x].addEventListener("click", function() {
        alert("This feature is not available yet, sorry about this. Come back soon !")
    })
}

for (i=0; i<document.getElementsByClassName('N/A').length; i++) {
    notAvailableNow(i);
}