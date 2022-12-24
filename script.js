function city(e) {
    alert('Loading weather report...')
}

var closeCookie = document.querySelector('.alert-section')
function accept() {
    closeCookie.remove();
}

function cel2Fah(temp) {
    return Math.round(9/5 * temp + 32);
}

function fah2Cel(temp) {
    return Math.round(5/9 * temp - 32);
}

function tempControl(element) {
    for (var i=1; i<=8; i++) {
        var temp = document.querySelector("#temp" + i);
        var tempChange = temp.innerText;
        if (element.value == "°C") {
            temp.innerText = fah2Cel(tempChange);
        } else {
            temp.innerText = cel2Fah(tempChange);
        }
    }
}

