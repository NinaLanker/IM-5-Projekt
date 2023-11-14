document.addEventListener("DOMContentLoaded", function () {
    var popupButton = document.getElementById("popupButton");
    var popupContainer = document.getElementById("popupContainer");
    var closeButton = document.getElementById("closeButton");

    // Füge einen Klick-Event-Handler zum Bild hinzu
    popupButton.addEventListener("click", function () {
        popupContainer.style.display = "block";
    });

    // Füge einen Klick-Event-Handler zum Schließen-Button hinzu
    closeButton.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
var popupButton2 = document.getElementById("popupButton2");
var popupContainer2 = document.getElementById("popupContainer2");
var closeButton2 = document.getElementById("closeButton2");

// Füge einen Klick-Event-Handler zum Bild hinzu
popupButton2.addEventListener("click", function () {
    popupContainer2.style.display = "block";
});

// Füge einen Klick-Event-Handler zum Schließen-Button hinzu
closeButton2.addEventListener("click", function () {
    popupContainer2.style.display = "none";
    });
});

document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Daten aus den Formularfeldern sammeln
    var vorname = document.getElementById("vorname").value;
    var nachname = document.getElementById("nachname").value;
    var email = document.getElementById("email").value;

    // Hier kannst du die Daten weiterverarbeiten, z. B. an einen Server senden
    console.log("Vorname: " + vorname);
    console.log("Nachname: " + nachname);
    console.log("E-Mail: " + email);
    
    // Meldung anzeigen (kann durch tatsächlichen Datenversand ersetzt werden)
    alert("Vielen Dank für deine Anmeldung!");
});

document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;

    body.addEventListener("click", function (event) {
        // Überprüfe, ob das geklickte Element der Body selbst ist (nicht seine Kinder)
        if (event.target === body) {
            // Navigiere zur index.html-Seite
            window.location.href = "https://232876-2.web.fhgr.ch/index.html";
        }
    });
});
