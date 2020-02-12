function notAvailableNow(x) {
    document.getElementsByClassName('N/A')[x].addEventListener("click", function() {
        alert("This feature is not available yet, sorry about this. Come back soon !")
    })
}

for (i=0; i<document.getElementsByClassName('N/A').length; i++) {
    notAvailableNow(i);
}

function stateAppareance(x) {
    stateAll = document.getElementsByClassName('etat')[x];
    if (stateAll.innerHTML === "Disponible"){
        stateAll.style.color="#78ff00";
        stateAll.style.border="1px solid #78ff00";
    }
    else if (stateAll.innerHTML === "Occupé"){
        stateAll.style.color="#ffc42d";
        stateAll.style.border="1px solid #ffc42d";
    }
    else if (stateAll.innerHTML === "Indisponible"){
        stateAll.style.color="#ff3520";
        stateAll.style.border="1px solid #ff3520";
    }
}

for (i=0; i<document.getElementsByClassName('etat').length; i++) {
    stateAppareance(i);
}